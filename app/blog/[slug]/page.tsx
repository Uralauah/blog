// app/blog/[slug]/page.tsx
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'
import posts from 'content/posts'
import { baseUrl } from 'app/sitemap'

import NotionRenderer from 'components/notion-renderer'
import TOC from 'components/toc'
import { extractHeadings } from 'lib/extract-headings'
import PageContainer from 'components/page-container'

const Comment = dynamic(() => import('components/comment'), { ssr: false })

export const runtime = 'nodejs'

/* ────────── SSG 파라미터 ────────── */
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

/* ────────── SEO 메타데이터 ────────── */
export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return

  const { title, date: publishedTime, description, image } = post
  const ogImage = image ?? '${baseUrl}/og?title=${encodeURIComponent(title)}'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: '${baseUrl}/blog/${post.slug}',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/* ────────── 본문 + TOC 페이지 ────────── */
export default function Blog({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug)
  const post = posts.find((p) => p.slug === decodedSlug)
  if (!post) notFound()

  const content = post.getContent()
  const headings = extractHeadings(content.blocks)

  return (
    <section className="grid grid-cols-[minmax(0,400px)_768px_240px] gap-12 w-full px-4 md:px-8">
  {/* 왼쪽 여백 1fr → 가운데 정렬 역할 */}
  <div ></div>
  {/* ── 글 본문 ─────── */}
  <article className="max-w-3xl w-full mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            description: post.description,
            image: post.image
              ? `${baseUrl}${post.image}`
              : `/og?title=${encodeURIComponent(post.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: { '@type': 'Person', name: 'My Portfolio' },
          }),
        }}
      />
      <NotionRenderer post={{ ...post, content }} />
      <div className="mt-16">
        <Comment />
      </div>
    </article>

    {/* ── TOC ───────────── */}
    <aside className="sticky top-28 self-start lg:block">
      <TOC items={headings} />
    </aside>
  </section>
  )
}
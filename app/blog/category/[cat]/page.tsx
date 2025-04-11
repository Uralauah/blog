// app/blog/category/[cat]/page.tsx
import { notFound } from 'next/navigation'
import posts from 'content/posts'
import Link from 'next/link'

export const runtime = 'edge'

const categoryMap: Record<string, string> = {
  all: '전체글',
  codingtest: '코딩테스트',
  springboot: '스프링부트',
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const { cat } = params

  const filtered = posts.filter(post => post.category === cat)
  if (filtered.length === 0) {
    notFound()
  }

  filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const catName = categoryMap[cat] ?? cat

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{catName}</h1>
      {filtered.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div className="mb-6">
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span>{post.date}</span>
              {/* 카테고리 정보는 여기선 cat으로 필터링 됐으므로 생략 가능 */}
            </div>

            <p className="text-lg font-semibold mt-1">{post.title}</p>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </section>
  )
}

'use client'

import { useSearchParams } from 'next/navigation'
import postsWithContent from 'content/posts'
import Link from 'next/link'
import PageContainer from 'components/page-container'

export const runtime = 'edge'

const POSTS_PER_PAGE = 10;

const posts = postsWithContent.map(p => {
    const { getContent, ...rest } = p;
    return rest;
})

const slugMap: Record<string, string> = {
  '컴퓨터비전': 'computer-vision',
  '데이터베이스': 'database',
  '백준': 'baekjoon',
  '프로그래머스': 'programmers',
  '회고': 'diary',
  '잡생각': 'random',
  '알고리즘': 'algorithm',
}

const tagMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([k, v]) => [v, k])
)

const categoryMap: Record<string, string> = {
  all: '전체글',
  codingtest: '코딩테스트',
  springboot: '스프링부트',
  cs: 'CS',
  others: '기타',
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const { cat } = params
  const searchParams = useSearchParams()
  const tagSlug = searchParams.get('tag')
  const pageParam = parseInt(searchParams.get('page') || '1', 10)
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam

  const tagName = tagSlug ? tagMap[tagSlug] ?? tagSlug : null
  const categoryName = categoryMap[cat] ?? cat

  const filtered = posts
    .filter(post => {
      const categoryMatch = post.category === cat
      const tagMatch = tagName ? post.tags?.includes(tagName) : true
      return categoryMatch && tagMatch
    })
    .sort((a, b) => b.date.localeCompare(a.date))

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <PageContainer size='narrow'>
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {categoryName}{tagName ? ` - ${tagName}` : ''}
      </h1>

      {paginated.length === 0 ? (
        <p className="text-sm text-neutral-500">게시글이 없습니다.</p>
      ) : (
        paginated.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="mb-4">
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>{post.date}</span>
                <span>· {categoryMap[post.category] ?? post.category}</span>
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
        ))
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="mt-8 flex gap-2 text-sm">
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              key={i}
              href={`?tag=${tagSlug ?? ''}&page=${i + 1}`}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              {i + 1}
            </Link>
          ))}
        </div>
      )}
    </section>
    </PageContainer>
  )
}
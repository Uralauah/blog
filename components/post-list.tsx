'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const POSTS_PER_PAGE = 10

const categoryMap: Record<string, string> = {
  codingtest: '코딩테스트',
  springboot: '스프링부트',
  cs: 'CS',
  others: '기타',
}

export default function PostList({ posts }: { posts: any[] }) {
  const searchParams = useSearchParams()
  const pageParam = parseInt(searchParams.get('page') || '1', 10)
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  return (
    <>
      {paginatedPosts.length === 0 ? (
        <p className="text-sm text-neutral-500">게시글이 없습니다.</p>
      ) : (
        paginatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="mb-4">
              {/* 날짜 + 카테고리 */}
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>{post.date}</span>
                <span>· {categoryMap[post.category] ?? post.category}</span>
              </div>

              <p className="text-lg font-semibold mt-1">{post.title}</p>

              {post.tags?.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1">
                  {post.tags.map((tag: string, index: number) => (
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
              href={`?page=${i + 1}`}
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
    </>
  )
}

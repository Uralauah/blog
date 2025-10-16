// components/RecentPosts.tsx
import Link from 'next/link'
import { posts } from 'content'

export function RecentPosts() {
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const categoryMap: Record<string, string> = {
    codingtest: '코딩테스트',
    springboot: '스프링부트',
    cs: 'CS',
    others: '기타'
  }

  const topFive = sortedPosts.slice(0, 5)

  return (
    <div>
      <h2 className="font-bold text-lg mb-2">최신 글</h2>
      {topFive.map((post) => {
        const categoryName = categoryMap[post.category] ?? post.category
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="mb-4">
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>{post.date}</span>
                <span>· {categoryName}</span>
              </div>

              <p className="text-base font-semibold mt-1">{post.title}</p>

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
        )
      })}
    </div>
  )
}
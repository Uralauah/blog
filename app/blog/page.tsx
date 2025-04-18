// app/blog/page.tsx
import Link from 'next/link'
import posts from 'content/posts'

export const metadata = {
  title: '코딩뽕짝',
  description: '코딩 뽕짝은 즐겁고 신나게 코딩을 배우고 나누는 블로그입니다.',
}

const categoryMap: Record<string, string> = {
  codingtest: '코딩테스트',
  springboot: '스프링부트',
  cs: 'CS'
}


export default function Page() {
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        전체글
      </h1>
      {sortedPosts.map((post) => {
        const categoryName = categoryMap[post.category] ?? post.category
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="mb-4">
              {/* 날짜 + 카테고리 */}
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>{post.date}</span>
                <span>· {categoryName}</span>
              </div>

              <p className="text-lg font-semibold mt-1">{post.title}</p>

              {post.tags?.length > 0 && (
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
    </section>
  )
}
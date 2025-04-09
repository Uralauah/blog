import Link from 'next/link'
import posts from '../content/posts'

export function RecentPosts() {
  // 날짜가 최신인 순으로 내림차순 정렬
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const categoryMap: Record<string, string> = {
    codingtest: '코딩테스트',
    springboot: '스프링부트',
  }
  // 상위 5개 추출
  const topFive = sortedPosts.slice(0, 5)

  return (
    <div>
      <h2 className="font-bold text-lg mb-2">최신 글</h2>
      {topFive.map((post) => {
        const categoryName = categoryMap[post.category] ?? post.category
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="mb-4">
              <div className="text-sm text-gray-500">
                <span>{post.date}</span>
                <span className="ml-2">· {categoryName}</span>
              </div>
              <p className="font-medium">{post.title}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

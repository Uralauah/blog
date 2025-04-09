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
}


export default function Page() {
  // 최신순으로 정렬 (날짜 큰 것 먼저)
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
              <div className="text-sm text-gray-500">
                <span>{post.date}</span>
                <span className="ml-2">· {categoryName}</span>
              </div>
              <p className="font-medium">{post.title}</p>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

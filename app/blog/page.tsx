// app/blog/page.tsx
import Link from 'next/link'
import posts from 'content/posts'
import PostList from 'components/post-list'

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
      <PostList posts={sortedPosts} />
    </section>
  )
}
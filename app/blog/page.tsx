// app/blog/page.tsx
import Link from 'next/link'
import posts from 'content/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
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
      {sortedPosts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div>
            <div className="text-sm text-gray-500">
              <span>{post.date}</span>
              <span className="ml-2">· {post.category}</span>
            </div>
            <p>{post.title}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

// app/blog/category/[cat]/page.tsx
import { notFound } from 'next/navigation'
import posts from 'content/posts'
import Link from 'next/link'

// cat 값 → 한글명으로 바꿔주기 위한 매핑 객체
const categoryMap: Record<string, string> = {
  codingtest: '코딩테스트',
  springboot: '스프링부트',
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const { cat } = params

  const filtered = posts.filter(post => post.category === cat)
  if (filtered.length === 0) {
    notFound()
  }

  // 최신순 정렬
  filtered.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // 매핑 객체에 없는 cat일 경우, 일단 그냥 cat 자체를 그대로 써 주도록 처리
  const catName = categoryMap[cat] ?? cat

  return (
    <section>
      {/* cat이 codingtest면 '코딩테스트', springboot면 '스프링부트' 표시 */}
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{catName}</h1>
      {filtered.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <div>
            <p>{post.date}</p>
            <p>{post.title}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

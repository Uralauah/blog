// app/blog/category/[cat]/page.tsx
import posts from 'content/posts'
import Link from 'next/link'

export const runtime = 'edge'

const categoryMap: Record<string, string> = {
  all: '전체글',
  codingtest: '코딩테스트',
  springboot: '스프링부트',
  cs: 'CS',
  others: '기타',
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const { cat } = params

  const filtered = posts.filter(post => post.category === cat)
  filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const catName = categoryMap[cat] ?? cat

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">{catName}</h1>
      {filtered.length === 0 ? (
        <p className="text-sm text-neutral-500">게시글이 없습니다.</p>
      ) : (
        filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="mb-4">
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span>{post.date}</span>
                <span>· {catName}</span>
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
    </section>
  )
}
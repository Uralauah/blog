// app/blog/tag/[tag]/page.tsx
import posts from 'content/posts'
import Link from 'next/link'

export const runtime = 'edge'

// 한글 태그 → slug 변환
const slugMap: Record<string, string> = {
  '컴퓨터비전': 'computer-vision',
  '백준' : 'baekjoon',
  '프로그래머스' : 'programmers',
  '회고': 'diary',
  '잡생각': 'random',
}

// slug → 한글 태그 변환
const tagMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([k, v]) => [v, k])
)

const categoryMap: Record<string, string> = {
  codingtest: '코딩테스트',
  springboot: '스프링부트',
  cs: 'CS',
  others: '기타',
}

export async function generateStaticParams() {
  const allTags = new Set(posts.flatMap(post => post.tags || []))
  return Array.from(allTags).map(tag => ({ tag: slugMap[tag] }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const slug = params.tag
  const tagName = tagMap[slug] ?? slug

  const filtered = posts.filter(post => post.tags?.includes(tagName))
  filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {tagName}
      </h1>
      {filtered.length === 0 ? (
        <p className="text-sm text-neutral-500">게시글이 없습니다.</p>
      ) : (
        filtered.map((post) => {
          const categoryName = categoryMap[post.category] ?? post.category
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="mb-4">
                <div className="text-xs text-gray-500 flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>· {categoryName}</span>
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
          )
        })
      )}
    </section>
  )
}
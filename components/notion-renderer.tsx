'use client'
import { Notion } from "@notionpresso/react"

export default function NotionRenderer({
  post,
}: {
  post: {
    title: string
    content: { blocks: any[] }
    image?: string
    date?: string
    category?: string
    tags?: string[]
  }
}) {
  return (
    <Notion>
      <Notion.Cover src={post.image} />
      <Notion.Body>
        <Notion.Title title={post.title} />

        <div className="mt-2 mb-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
            {post.date && <span>{post.date}</span>}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="pt-6 mb-6">
          <Notion.Blocks blocks={post.content.blocks} />
        </div>
      </Notion.Body>
    </Notion>
  )
}

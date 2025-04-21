'use client'

import React from 'react'
import { Notion } from '@notionpresso/react'

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
  /** h1‧h2‧h3 공통 커스텀 */
  const makeHeading =
    (level: 1 | 2 | 3) =>
    (props: any) => {
      const type = `heading_${level}` as const
      const data = props[type]          // ← props 안에 바로 있음
      const text = data?.rich_text?.[0]?.plain_text ?? ''
      if (!text) return null

      const id = props.id.replace(/-/g, '')
      const cls =
        level === 1
          ? 'text-4xl font-bold scroll-mt-24'
          : level === 2
          ? 'text-2xl font-bold scroll-mt-24'
          : 'text-xl font-semibold scroll-mt-24'

      return React.createElement(
        `h${level}`,
        { id, className: cls },
        text
      )
    }

  return (
    <Notion
      custom={{
        heading_1: makeHeading(1),
        heading_2: makeHeading(2),
        heading_3: makeHeading(3),
      }}
    >
      {/* ───── 상단 이미지 ───── */}
      <Notion.Cover src={post.image} />

      <Notion.Body>
        {/* 제목 */}
        <Notion.Title title={post.title} />

        {/* 날짜 · 태그 */}
        <div className="mt-2 mb-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
            {post.date && <span>{post.date}</span>}
            {post.tags?.length ? (
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
            ) : null}
          </div>
        </div>

        {/* 본문 블록 */}
        <div className="pt-6 mb-6">
          <Notion.Blocks blocks={post.content.blocks} />
        </div>
      </Notion.Body>
    </Notion>
  )
}

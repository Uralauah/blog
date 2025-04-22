'use client'

import React from 'react'
import { Notion } from '@notionpresso/react'
import { getTextFromBlocks, calculateReadingTime } from 'lib/reading-time'

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
      const data = props[type]
      const text = data?.rich_text?.[0]?.plain_text ?? ''
      if (!text) return null

      const id = props.id.replace(/-/g, '')
      const cls =
        level === 1
          ? 'text-4xl font-bold scroll-mt-24'
          : level === 2
          ? 'text-2xl font-bold scroll-mt-24'
          : 'text-xl font-semibold scroll-mt-24'

      return React.createElement(`h${level}`, { id, className: cls }, text)
    }

  const text = getTextFromBlocks(post.content.blocks)
  const readingTime = calculateReadingTime(text)

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
        <div className="text-center">
          <Notion.Title title={post.title} />
        </div>

        {/* 날짜, 태그, 읽기 시간 → 좌우 여백 포함해 가운데 정렬 */}
        <div className="mt-2 mb-8 w-full px-6 sm:px-8 md:px-12">
          <div className="max-w-[300px] mx-auto flex justify-between items-center text-sm text-neutral-500 dark:text-neutral-400 flex-wrap gap-y-2">
            {/* 왼쪽: 날짜 + 태그 */}
            <div className="flex items-center flex-wrap gap-x-3 gap-y-2">
              {post.date && (
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              )}

              {post.tags?.length ? (
                <div className="flex flex-wrap gap-1">
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

            {/* 오른쪽: 읽기 시간 */}
            <div className="flex items-center gap-1 shrink-0">
              <ClockIcon className="w-4 h-4" />
              <span>{readingTime}분</span>
            </div>
          </div>
        </div>

        <div className='pt-5'></div>
        <hr className="mt-8 mb-6 border-t border-gray-300 dark:border-neutral-700 w-full" />


        {/* 본문 블록 */}
        <div className="pt-10 mb-6">
          <Notion.Blocks blocks={post.content.blocks} />
        </div>
      </Notion.Body>
    </Notion>
  )
}

/* ───── 흑백 아이콘 컴포넌트 ───── */
function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3M3 11h18M5 7h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z"
      />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
      />
    </svg>
  )
}

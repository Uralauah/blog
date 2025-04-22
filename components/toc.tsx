'use client'

import React, { useEffect, useState } from 'react'
import { TOCItem } from 'lib/extract-headings'

export default function TOC({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h1[id], h2[id]')) as HTMLElement[]

    const handleScroll = () => {
      const offset = 300 // 조정 가능한 상단 여유값
      let currentId: string | null = null

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i]
        const rect = heading.getBoundingClientRect()

        if (rect.top - offset <= 0) {
          currentId = heading.id
        } else {
          break
        }
      }

      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 초기 상태 업데이트

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="text-sm leading-6 top-1/2 -translate-y-1/2 fixed space-y-1">
      {items.map(({ id, text, level }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`
            block
            rounded-sm
            transition-all duration-300 ease-in-out
            hover:text-black dark:hover:text-white
            hover:translate-x-1 hover:font-medium
            ${level === 2 ? 'pl-4' : level === 1 ? 'pl-0' : ''}
            ${
              activeId === id
                ? 'text-black dark:text-white font-bold border-l-2 border-black dark:border-white bg-gray-100 dark:bg-neutral-800'
                : 'text-gray-500'
            }
          `}
        >
          {text}
        </a>
      ))}
      <a
        href="#top"
        className="block pt-4 text-gray-400 text-xs hover:text-black dark:hover:text-white transition-colors"
      >
        ↑ 맨 위로
      </a>
    </nav>
  )
}

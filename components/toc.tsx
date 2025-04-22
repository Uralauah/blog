'use client'

import React, { useEffect, useState } from 'react'
import { TOCItem } from 'lib/extract-headings'

export default function TOC({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('id')
          if (id) setActiveId(id)
        }
      },
      {
        rootMargin: '0px 0px -30% 0px', // 조금 더 빠르게 감지
        threshold: [0.25, 0.5, 0.75],
      }
    )

    const headings = document.querySelectorAll('h1[id], h2[id]') // 사용하는 heading 모두 포함!
    headings.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
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

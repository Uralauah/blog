'use client'
import Link from 'next/link'
import ThemeToggle from './theme'
import VisitorCounter from './visitor-counter'
import { useState, useRef } from 'react'
import PageContainer from './page-container'

type NavItem = {
  name: string
  children?: {
    [path: string]: { name: string }
  }
}

const navItems: Record<string, NavItem> = {
  '/': { name: '홈' },
  '/blog': { name: '전체글' },
  '/blog/category/codingtest': {
    name: '코딩테스트',
    children: {
      '/blog/category/codingtest?tag=baekjoon': { name: '백준' },
      '/blog/category/codingtest?tag=programmers': { name: '프로그래머스' },
    },
  },
  '/blog/category/springboot': { name: '스프링부트' },
  '/blog/category/cs': {
    name: 'CS',
    children: {
      '/blog/category/cs?tag=computer-vision': { name: '컴퓨터비전' },
    },
  },
  '/blog/category/others': {
    name: '기타',
    children: {
      '/blog/category/others?tag=diary': { name: '회고' },
      '/blog/category/others?tag=random': { name: '잡생각' },
    },
  },
  'https://github.com/Uralauah': { name: 'GitHub' },
}

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (path: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setOpenDropdown(path)
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
  }

  return (
    <PageContainer size="narrow">
      <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name, children }]) => {
                const isOpen = openDropdown === path

                if (children) {
                  return (
                    <div
                      key={path}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(path)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={path}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                      >
                        {name}
                      </Link>
                      <div
                        className={`absolute mt-1 z-10 bg-white dark:bg-black shadow-lg rounded-md transition-all duration-200 ease-out transform ${
                          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
                        }`}
                      >
                        {Object.entries(children).map(([childPath, { name: childName }]) => (
                          <Link
                            key={childPath}
                            href={childPath}
                            className="block whitespace-nowrap px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                          >
                            {childName}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
            <div className="ml-auto flex flex-row items-center space-x-2">
              <VisitorCounter />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </aside>
    </PageContainer>
  )
}
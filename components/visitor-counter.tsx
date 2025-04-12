'use client'
import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<string>('...')

  useEffect(() => {
    const fetchVisitors = () => {
      fetch('/api/visitors')
        .then(res => res.json())
        .then(data => setVisitors(data.visitors))
        .catch(() => setVisitors('불러오기 실패'))
    }

    fetchVisitors()

    const interval = setInterval(fetchVisitors, 600000) // 10분마다 호출

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-[14px]">
      방문자: <strong className="ml-1">{visitors}</strong>
    </span>
  )
}

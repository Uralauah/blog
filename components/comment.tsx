// To enable comments:
// 1. Uncomment this component
// 2. Update repo, repoId, and categoryId with your own giscus settings
// 3. Visit https://giscus.app to get your settings

'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Comment() {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Giscus가 지원하는 테마 이름 중 선택
    if (resolvedTheme === 'dark') {
      setTheme('dark_tritanopia') // 혹은 다른 다크 테마
    } else {
      setTheme('light_tritanopia') // 혹은 다른 라이트 테마
    }
  }, [resolvedTheme])

  return (
    <Giscus
      id="comments"
      repo="UralaUah/blog"
      repoId="R_kgDOOUujzg"
      category="Announcements"
      categoryId="DIC_kwDOOUujzs4Co3Pn"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="ko"
      loading="lazy"
    />
  )
}

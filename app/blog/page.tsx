import { Suspense } from 'react'
import Link from 'next/link'
import { posts } from 'content'
import PostList from 'components/post-list'
import PageContainer from 'components/page-container'

export const metadata = {
  title: '코딩뽕짝',
  description: '코딩 뽕짝은 즐겁고 신나게 코딩을 배우고 나누는 블로그입니다.',
}

export default function Page() {
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <PageContainer size="narrow">
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">전체글</h1>

        {/* Suspense로 감싸기 (필수!) */}
        <Suspense fallback={<p>로딩 중...</p>}>
          <PostList posts={sortedPosts} />
        </Suspense>
      </section>
    </PageContainer>
  )
}

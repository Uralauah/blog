import Image from 'next/image'
import { RecentPosts } from 'components/recent-posts'
import PageContainer from 'components/page-container'

export default function Page() {
  return (
    <PageContainer size="narrow">
      <section>
        <div className="flex items-center mb-8">
            <Image
              src="/profile.png"
              alt="profile image"
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <h1 className="text-2xl font-semibold tracking-tighter">
              💻 코딩뽕짝
            </h1>
          </div>
        <p className="mb-4">
          {`👋 안녕하세요! 저는 `}
          <strong>컴퓨터공학을 전공 중인 </strong>
          {` 이승현입니다. 주로 `}
          <strong>백엔드 개발</strong>
          {`과 `}
          <strong>코딩 테스트</strong>
          {`를 공부하고 있고, `}
          {`요즘은 `}
          <strong>깔끔하고 효율적인 시스템</strong>
          {`을 만드는 데 흥미를 느끼고 있어요. 이 블로그에는 제가 공부하면서 정리한 내용, 경험한 것들, 그리고 `}
          <strong>개발자로 성장해가는 과정</strong>
          {`을 기록하고 있어요. 편하게 읽어주시면 감사하겠습니다 :)`}
        </p>
        <div className="my-8">
          <RecentPosts />
        </div>
      </section>
    </PageContainer>
  )
}

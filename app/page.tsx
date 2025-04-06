import Image from 'next/image'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
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
          코딩뽕짝
        </h1>
      </div>
      <p className="mb-4">
        {`👋  안녕하세요, 저는 `}
        <strong>열정적인 백엔드 개발자</strong>
        {`이자 `}
        <strong>코드 마스터</strong>
        {`인 승현입니다. `}
        <strong>컴퓨터 공학</strong>
        {`을 전공한 저는 주로 `}
        <strong>백엔드 개발</strong>
        {`과 `}
        <strong>코딩 테스트</strong>
        {`를 공부하며, `}
        <strong>효율적이고 견고한 시스템 구축</strong>
        {`에 열정을 가지고 있습니다. 이 블로그에서는 제가 관심 있는 `}
        <strong>최신 백엔드 기술</strong>
        {`, `}
        <strong>코딩 테스트 팁</strong>
        {`, 배운 점, 그리고 `}
        <strong>개발자로서의 다양한 경험</strong>
        {`을 공유하고자 합니다. 재밌게 읽어주세요!`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

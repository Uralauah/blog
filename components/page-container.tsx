import clsx from 'clsx'

type Size = 'narrow' | 'wide'

export default function PageContainer({
  size = 'narrow',
  children,
}: {
  size?: Size
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        // narrow → 홈/목록, wide → 게시글
        size === 'narrow' ? 'max-w-2xl' : 'max-w-8xl',
        // 가운데 정렬 + 기본 패딩
        'mx-auto w-full px-4'
      )}
    >
      {children}
    </div>
  )
}

import { BlogPosts } from 'components/posts'
import posts from 'content/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">전체글</h1>
      <BlogPosts />
    </section>
  )
}

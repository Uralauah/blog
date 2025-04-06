// components/BlogPosts.tsx

import Link from 'next/link'
import posts from '../content/posts'

export function BlogPosts() {
  // 모든 카테고리 + “전체글” 섞어서 세트 만들기
  const categories = Array.from(
    new Set(["전체글", ...posts.map((post) => post.category)])
  );

  return (
    <div>
      {categories.map((cat) => {
        // “전체글”이면 필터링 없이 그냥 전체 posts
        const categoryPosts = cat === "전체글"
          ? posts
          : posts.filter((post) => post.category === cat);

        // 날짜 역순 정렬
        categoryPosts.sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) return -1
          return 1
        });

        return (
          <div key={cat} className="mb-8">
            <h2 className="font-bold text-lg mb-2">
              {cat}
            </h2>
            {categoryPosts.map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {post.date}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
}

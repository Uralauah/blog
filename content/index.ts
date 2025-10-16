import postsWithContent from './posts';
import type { Post as PostWithContent } from './posts';

export const posts = postsWithContent.map(p => {
    const { getContent, ...rest } = p;
    return rest;
});

export type Post = Omit<PostWithContent, 'getContent'>;

export { postsWithContent };

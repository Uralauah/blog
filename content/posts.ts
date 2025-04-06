import post1 from '../notion-data/1c6a071d-4763-803a-8218-c59c905e3208.json'
import post2 from '../notion-data/114a071d-4763-809a-8abf-d030eff337e2.json'

const posts = [
  {
    title: "완전범죄",
    slug: "codingtest1",
    content: post1,
    date: "2025-04-02",
    description: "정민주배 코딩테스트 1번",
    image: undefined,
    category: "codingtest"
  },
  {
    title: "SSE",
    slug: "SSE",
    content: post2,
    date: "2024-10-03",
    description: "스프링부트의 SSE",
    image: undefined,
    category: "springboot"
  }
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
  category: string;
};

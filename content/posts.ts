import post1 from '../notion-data/1c6a071d-4763-803a-8218-c59c905e3208.json'
import post2 from '../notion-data/127ce18c-fd83-805c-bebd-d6772e18bf02.json'

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
    title: "Naver Search Bar UX: Analysis and Implementation Guide",
    slug: "naver-search-bar-ux",
    content: post2,
    date: "2023-10-23",
    description: "Explore the UX analysis of Naver's search bar and strategies for replicating its features. The post examines the UX triggers, selection of search results, and the refreshing of result lists. It also compares coding approaches for implementing search bar functionalities, aiming for a concise and effective execution.",
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

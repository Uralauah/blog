
const posts = [
  {
    title: "1987번 - 알파벳 ",
    slug: "baekjoon-1987-cpp",
    content: require('../notion-data/c8b3b022-a46d-4ec6-a053-4b5ec3c997c7.json'),
    date: "2024-01-31",
    description: "1987번 - 알파벳 ",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
  {
    title: "12865번 - 평범한 배낭",
    slug: "baekjoon-12865-cpp",
    content: require('../notion-data/7f27f4de-f780-4f48-886f-bb00a5691788.json'),
    date: "2024-01-24",
    description: "12865번 - 평범한 배낭",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
  {
    title: "당구 연습",
    slug: "programmers-java-당구-연습-프로그래머스-java",
    content: require('../notion-data/1d1a071d-4763-8023-a977-cc8292312e1d.json'),
    date: "2025-04-10",
    description: "당구 연습",
    image: undefined,
    category: "codingtest",
    tags: ["프로그래머스","JAVA"]
  },
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
  tags: string[];
};

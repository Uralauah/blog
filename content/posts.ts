
const posts = [
  {
    title: "Spring Boot에서 JWT + Redis로 게스트 로그인 시스템 구현하기",
    slug: "spring-boot에서-jwt-redis로-게스트-로그인-시스템-구현하기",
    content: require('../notion-data/1d6a071d-4763-8099-99cc-f08f7d4c287b.json'),
    date: "2025-04-18",
    description: "Spring Boot에서 JWT + Redis로 게스트 로그인 시스템 구현하기",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "MySQL LIKE 대신 Full-Text Index 쓰는 이유",
    slug: "mysql-like-대신-fulltext-index-쓰는-이유",
    content: require('../notion-data/11aa071d-4763-80ad-9966-fccfcb276f2a.json'),
    date: "2024-10-09",
    description: "MySQL LIKE 대신 Full-Text Index 쓰는 이유",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Spring SSE로 실시간 알림 구현하기",
    slug: "spring-sse로-실시간-알림-구현하기",
    content: require('../notion-data/114a071d-4763-809a-8abf-d030eff337e2.json'),
    date: "2024-10-03",
    description: "Spring SSE로 실시간 알림 구현하기",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "REST API가 RESTful하지 않은 이유",
    slug: "rest-api가-restful하지-않은-이유",
    content: require('../notion-data/105a071d-4763-80b1-aa53-ea785cb21e97.json'),
    date: "2024-09-18",
    description: "REST API가 RESTful하지 않은 이유",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Spring API 성능 최적화 — 병렬 처리, 트랜잭션 분리, 캐시 적용",
    slug: "spring-api-성능-최적화-병렬-처리-트랜잭션-분리-캐시-적용",
    content: require('../notion-data/92399f6e-c037-432d-a4de-9a9917e27d02.json'),
    date: "2024-09-11",
    description: "Spring API 성능 최적화 — 병렬 처리, 트랜잭션 분리, 캐시 적용",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Java에서 null을 안전하게 다루는 방법",
    slug: "java에서-null을-안전하게-다루는-방법",
    content: require('../notion-data/f194801b-249e-4149-930d-5f97cbff5286.json'),
    date: "2024-09-04",
    description: "Java에서 null을 안전하게 다루는 방법",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Spring JPA Soft Delete : @SQLDelete, @Where, @SoftDelete",
    slug: "spring-jpa-soft-delete-sqldelete-where-softdelete",
    content: require('../notion-data/cbd52867-cb38-4944-8a7f-dca3d5b11bf6.json'),
    date: "2024-08-26",
    description: "Spring JPA Soft Delete : @SQLDelete, @Where, @SoftDelete",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Spring 서비스 간 의존, 어디까지 허용될까? Service vs Repository vs Facade",
    slug: "spring-서비스-간-의존-어디까지-허용될까-service-vs-repository-vs-facade",
    content: require('../notion-data/2ccef68b-d878-4581-8cf4-df19af48a432.json'),
    date: "2024-08-11",
    description: "Spring 서비스 간 의존, 어디까지 허용될까? Service vs Repository vs Facade",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Spring Data JPA 페이징 : Page, Slice, List 차이와 사용법",
    slug: "spring-data-jpa-페이징-page-slice-list-차이와-사용법",
    content: require('../notion-data/d83541a7-8d6a-4b78-8b16-f39405cd4da8.json'),
    date: "2024-08-05",
    description: "Spring Data JPA 페이징 : Page, Slice, List 차이와 사용법",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Spring 의존성 주입 방식 정리: 필드 주입 vs 생성자 주입 vs 수정자 주입",
    slug: "spring-의존성-주입-방식-정리-필드-주입-vs-생성자-주입-vs-수정자-주입",
    content: require('../notion-data/1b1be4ac-35cd-453e-9e6e-73fd77e142cc.json'),
    date: "2024-07-29",
    description: "Spring 의존성 주입 방식 정리: 필드 주입 vs 생성자 주입 vs 수정자 주입",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },
  {
    title: "Spring Boot 테스트 코드 작성법 정리 (JUnit, AssertJ, Given-When-Then)",
    slug: "spring-boot-테스트-코드-작성법-정리-junit-assertj-givenwhenthen",
    content: require('../notion-data/6ca2969d-82b5-453b-9d97-c74fb3b369c8.json'),
    date: "2024-07-23",
    description: "Spring Boot 테스트 코드 작성법 정리 (JUnit, AssertJ, Given-When-Then)",
    image: undefined,
    category: "springboot",
    tags: ["JAVA"]
  },{
    title: "[컴퓨터비전] 5. 영상 분할",
    slug: "컴퓨터비전-5-영상-분할",
    content: require('../notion-data/1d7a071d-4763-8015-8aff-e555fcd9738c.json'),
    date: "2025-04-18",
    description: "[컴퓨터비전] 5. 영상 분할",
    image: undefined,
    category: "cs",
    tags: ["컴퓨터비전"]
  },
  {
    title: "[컴퓨터비전] 2. 영상 처리",
    slug: "컴퓨터비전-2-영상-처리",
    content: require('../notion-data/1d7a071d-4763-809f-ab08-f13ef29c2688.json'),
    date: "2025-04-16",
    description: "[컴퓨터비전] 2. 영상 처리",
    image: undefined,
    category: "cs",
    tags: ["컴퓨터비전"]
  },
  {
    title: "[컴퓨터비전] 4. 지역 특징 검출",
    slug: "컴퓨터비전-4-지역-특징-검출",
    content: require('../notion-data/1d7a071d-4763-80eb-acf5-d6538b8d9ecb.json'),
    date: "2025-04-17",
    description: "[컴퓨터비전] 4. 지역 특징 검출",
    image: undefined,
    category: "cs",
    tags: ["컴퓨터비전"]
  },{
    title: "[컴퓨터비전] 3. 에지 검출",
    slug: "컴퓨터비전-3-에지-검출",
    content: require('../notion-data/1d7a071d-4763-80d2-a399-fc5a61033670.json'),
    date: "2025-04-17",
    description: "[컴퓨터비전] 3. 에지 검출",
    image: undefined,
    category: "cs",
    tags: ["컴퓨터비전"]
  },{
    title: "[컴퓨터비전] 6. 특징 기술",
    slug: "컴퓨터비전-6-특징-기술",
    content: require('../notion-data/1d7a071d-4763-80fb-b894-d37098d1f75d.json'),
    date: "2025-04-18",
    description: "[컴퓨터비전] 6. 특징 기술",
    image: undefined,
    category: "cs",
    tags: ["컴퓨터비전"]
  },{
    title: "메뉴 리뉴얼",
    slug: "programmers-메뉴-리뉴얼-java",
    content: require('../notion-data/1d1a071d-4763-80f4-94da-c60ef39a1f14.json'),
    date: "2025-04-11",
    description: "메뉴 리뉴얼",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "완전범죄",
    slug: "programmers-완전범죄-java",
    content: require('../notion-data/1c6a071d-4763-803a-8218-c59c905e3208.json'),
    date: "2025-03-30",
    description: "완전범죄",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "당구 연습",
    slug: "programmers-당구-연습-java",
    content: require('../notion-data/1d1a071d-4763-8023-a977-cc8292312e1d.json'),
    date: "2025-04-10",
    description: "당구 연습",
    image: undefined,
    category: "codingtest",
    tags: ["프로그래머스","JAVA"]
  },
  {
    title: "10868번 - 최솟값",
    slug: "baekjoon-10868-java",
    content: require('../notion-data/1bba071d-4763-80d5-8587-e0f654cf6c13.json'),
    date: "2025-03-19",
    description: "10868번 - 최솟값",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "카카오 프렌즈 컬러링북",
    slug: "programmers-카카오-프렌즈-컬러링북-java",
    content: require('../notion-data/1afa071d-4763-80b2-8629-d3c03721a341.json'),
    date: "2025-03-07",
    description: "카카오 프렌즈 컬러링북",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "20293번 - 연료가 부족해",
    slug: "baekjoon-20293-java",
    content: require('../notion-data/19da071d-4763-80bc-837a-e2189f57b118.json'),
    date: "2025-02-17",
    description: "20293번 - 연료가 부족해",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "길 찾기 게임",
    slug: "programmers-길-찾기-게임-java",
    content: require('../notion-data/192a071d-4763-8071-9d33-dc3f988fef63.json'),
    date: "2025-02-06",
    description: "길 찾기 게임",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "미로 탈출 명령어",
    slug: "programmers-미로-탈출-명령어-java",
    content: require('../notion-data/17ba071d-4763-8007-b99d-ee994189c713.json'),
    date: "2025-01-14",
    description: "미로 탈출 명령어",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "인사고과",
    slug: "programmers-인사고과-java",
    content: require('../notion-data/174a071d-4763-8078-a9f9-ecfc5eedffb3.json'),
    date: "2025-01-09",
    description: "인사고과",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "17182번 - 우주 탐사선",
    slug: "baekjoon-17182-java",
    content: require('../notion-data/16ea071d-4763-80a5-9323-d7930bc4a5eb.json'),
    date: "2025-01-01",
    description: "17182번 - 우주 탐사선",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "14863번 - 서울에서 경산까지",
    slug: "baekjoon-14863-java",
    content: require('../notion-data/14aa071d-4763-80fa-85c8-d4e563d5e1b0.json'),
    date: "2024-11-26",
    description: "14863번 - 서울에서 경산까지",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "10159번 - 저울",
    slug: "baekjoon-10159-java",
    content: require('../notion-data/144a071d-4763-80a1-9a3e-e9f0e9dab600.json'),
    date: "2024-11-20",
    description: "10159번 - 저울",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "2157번 - 여행",
    slug: "baekjoon-2157-java",
    content: require('../notion-data/11aa071d-4763-80a8-bd38-cb5d51b20363.json'),
    date: "2024-10-09",
    description: "2157번 - 여행",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "2011번 - 암호코드",
    slug: "baekjoon-2011-java",
    content: require('../notion-data/112a071d-4763-80f0-b875-cc3b3bbd6beb.json'),
    date: "2024-10-01",
    description: "2011번 - 암호코드",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "거스름돈 계산하기 2",
    slug: "programmers-거스름돈-계산하기-2-java",
    content: require('../notion-data/10da071d-4763-807e-93e2-f233389c1439.json'),
    date: "2024-09-26",
    description: "거스름돈 계산하기 2",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "21606번 - 아침 산책",
    slug: "baekjoon-21606-java",
    content: require('../notion-data/87c1a6ea-66b5-40c1-9e4e-b8c8cb12bb3a.json'),
    date: "2024-09-12",
    description: "21606번 - 아침 산책",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "11066번 - 파일 합치기",
    slug: "baekjoon-11066-java",
    content: require('../notion-data/1e67f365-e721-440a-9347-f4af2caef354.json'),
    date: "2024-09-03",
    description: "11066번 - 파일 합치기",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "12781 - PIZZA ALVOLOC",
    slug: "ce5c132d-16ba-4ffa-8add-c6ab10d877ba",
    content: require('../notion-data/ce5c132d-16ba-4ffa-8add-c6ab10d877ba.json'),
    date: "2024-08-26",
    description: "12781 - PIZZA ALVOLOC",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "11758번 - CCW",
    slug: "baekjoon-11758-java",
    content: require('../notion-data/648b8140-0e7a-456a-a06d-f06b9370b08a.json'),
    date: "2024-08-19",
    description: "11758번 - CCW",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "다단계 칫솔 판매",
    slug: "programmers-다단계-칫솔-판매-java",
    content: require('../notion-data/09d7aebd-1039-4d7d-9c23-62bc2de11483.json'),
    date: "2024-08-12",
    description: "다단계 칫솔 판매",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","프로그래머스"]
  },
  {
    title: "10942번 - 팰린드롬?",
    slug: "baekjoon-10942-java",
    content: require('../notion-data/c6cc7109-bf75-449b-a8e4-982066eb9e3e.json'),
    date: "2024-08-06",
    description: "10942번 - 팰린드롬?",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "11401번 - 이항 계수 3",
    slug: "baekjoon-11401-java",
    content: require('../notion-data/9d267cd6-1081-4d25-af52-08cbd596a341.json'),
    date: "2024-07-28",
    description: "11401번 - 이항 계수 3",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "1655번 - 가운데를 말해요",
    slug: "baekjoon-1655-java",
    content: require('../notion-data/54be49f1-ef9e-48fd-bd80-0362fa07bfc4.json'),
    date: "2024-07-22",
    description: "1655번 - 가운데를 말해요",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "1956번 - 운동",
    slug: "baekjoon-1956-java",
    content: require('../notion-data/bf219a61-aed0-4632-9f53-96bab9602674.json'),
    date: "2024-07-13",
    description: "1956번 - 운동",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "4195번 - 친구 네트워크",
    slug: "baekjoon-4195-java",
    content: require('../notion-data/47c51d8a-78e8-4f64-9b92-18db90bee76b.json'),
    date: "2024-07-09",
    description: "4195번 - 친구 네트워크",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "1197번 - 최소 스패닝 트리",
    slug: "baekjoon-1197-java",
    content: require('../notion-data/998b721c-0834-4ea2-8d01-50dfafafb261.json'),
    date: "2024-07-09",
    description: "1197번 - 최소 스패닝 트리",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "10830번 - 행렬 제곱",
    slug: "baekjoon-10830-java",
    content: require('../notion-data/0fefcb2a-c622-4768-851c-68ba321e9f99.json'),
    date: "2024-07-03",
    description: "10830번 - 행렬 제곱",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "1774번 - 우주신과의 교감",
    slug: "baekjoon-1774-java",
    content: require('../notion-data/f0a7642c-a94e-418a-aa93-faaad52a27ec.json'),
    date: "2024-05-15",
    description: "1774번 - 우주신과의 교감",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "17845번 - 수강 과목",
    slug: "baekjoon-17845-java",
    content: require('../notion-data/0c4a5ed1-a841-42f6-bc9e-4430141a2f17.json'),
    date: "2024-05-14",
    description: "17845번 - 수강 과목",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "2186번 - 문자판",
    slug: "baekjoon-2186-cpp",
    content: require('../notion-data/25d4cf92-3450-4da2-a73e-e9befc0187cb.json'),
    date: "2024-05-07",
    description: "2186번 - 문자판",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
  {
    title: "23631번 - 진심 좌우 반복뛰기",
    slug: "baekjoon-23631-java",
    content: require('../notion-data/3f5162e8-205b-4c39-a1bf-753168f0170e.json'),
    date: "2024-04-03",
    description: "23631번 - 진심 좌우 반복뛰기",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "1446번 - 지름길",
    slug: "baekjoon-1446-java",
    content: require('../notion-data/8ef2d501-a184-4874-afd0-f3ae1f7dead3.json'),
    date: "2024-03-26",
    description: "1446번 - 지름길",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "10819번 - 차이를 최대로",
    slug: "baekjoon-10819-java",
    content: require('../notion-data/c1db1fe6-e6d1-48de-90df-d6dc7e5f2390.json'),
    date: "2024-03-19",
    description: "10819번 - 차이를 최대로",
    image: undefined,
    category: "codingtest",
    tags: ["JAVA","백준"]
  },
  {
    title: "11657번 - 타임머신",
    slug: "baekjoon-11657-cpp",
    content: require('../notion-data/19e0fcde-ab92-4218-b818-870698fddcf1.json'),
    date: "2024-03-18",
    description: "11657번 - 타임머신",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
  {
    title: "16234번 - 인구 이동",
    slug: "baekjoon-16234-cpp",
    content: require('../notion-data/72f1176a-c309-4b55-826b-fb95a04784c6.json'),
    date: "2024-02-20",
    description: "16234번 - 인구 이동",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
  {
    title: "2096번 - 내려가기",
    slug: "baekjoon-2096-cpp",
    content: require('../notion-data/88df7d5a-de4b-4701-936b-fb9ddade5419.json'),
    date: "2024-02-14",
    description: "2096번 - 내려가기",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
  {
    title: "5525번 - IOIOI",
    slug: "baekjoon-5525-cpp",
    content: require('../notion-data/e1e669bb-2050-4053-a39d-ca3bb3ada6e7.json'),
    date: "2024-02-07",
    description: "5525번 - IOIOI",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
  {
    title: "N과 M(9) next_permutation풀이",
    slug: "c5f5feb5-62a1-4cbd-ba91-26d0043aeede",
    content: require('../notion-data/c5f5feb5-62a1-4cbd-ba91-26d0043aeede.json'),
    date: "2024-02-05",
    description: "N과 M(9) next_permutation풀이",
    image: undefined,
    category: "codingtest",
    tags: ["C++","백준"]
  },
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

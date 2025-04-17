import { execSync } from 'child_process';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config(); // 이 줄이 반드시 있어야 .env 파일이 로드됩니다!

// ESM용 __dirname 구현
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notionUrl = process.argv[2]; // CLI 인자로 받은 Notion 링크
if (!notionUrl) {
  console.error('❗ Notion 페이지 URL을 입력하세요.');
  process.exit(1);
}

const authToken = process.env.NOTION_AUTH_TOKEN;
if (!authToken) {
  console.error('❗ .env 파일에 NOTION_AUTH_TOKEN이 설정되어야 합니다.');
  process.exit(1);
}

const match = notionUrl.match(/([a-f0-9]{32})/); // UUID 추출
if (!match) {
  console.error('❗ 올바른 Notion 페이지 URL이 아닙니다.');
  process.exit(1);
}
const uuid = match[1].replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
const outputPath = path.resolve(__dirname, `../notion-data/${uuid}.json`);

console.log(`📦 Notion 데이터 추출 중: ${uuid}`);

// execSync 결과를 문자열로 받음
const result = execSync(`npresso --page ${notionUrl} --auth ${authToken}`, {
  encoding: 'utf-8'
});


const data = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
const title = data.properties['제목'].title[0].plain_text;
const date = data.properties['게시일'].date.start;
const tags = data.properties['태그'].multi_select.map((t: any) => t.name);

let category = 'uncategorized';
if (tags.includes('코딩테스트')) {
  category = 'codingtest';
} else if (tags.includes('스프링부트')) {
  category = 'springboot';
} else if (tags.includes('CS')){
  category = 'cs';
} else if (tags.includes('기타')){
  category = 'others';
}

const allowedTags = ['백준', '프로그래머스', 'JAVA','C++','컴퓨터비전'];
const postTags = data.properties['태그'].multi_select
  .map((t: any) => t.name)
  .filter((name: string) => allowedTags.includes(name));

const slug = generateSlug({
  title,
  tags,
  uuid,
});

const postsFile = path.resolve(__dirname, '../content/posts.ts');
const postsContent = fs.readFileSync(postsFile, 'utf-8');

// 기존 항목 제거 (slug로 기존 글 찾아서 제거)
const postRegex = new RegExp(`\\{[^}]*slug:\\s*${JSON.stringify(slug)}[^}]*\\},?`, 'gs');
const cleanedContent = postsContent.replace(postRegex, '');


// 새 게시글 항목 추가 (맨 앞에 넣는 방식)
const insertIndex = postsContent.indexOf('const posts = [') + 'const posts = ['.length;
const newPost = `
  {
    title: ${JSON.stringify(title)},
    slug: ${JSON.stringify(slug)},
    content: require('../notion-data/${uuid}.json'),
    date: ${JSON.stringify(date)},
    description: ${JSON.stringify(title)},
    image: undefined,
    category: ${JSON.stringify(category)},
    tags: ${JSON.stringify(postTags)}
  },`;

const updatedContent =
  postsContent.slice(0, insertIndex) + newPost + postsContent.slice(insertIndex);

fs.writeFileSync(postsFile, updatedContent);
console.log(`🚀 게시글 등록 완료: ${title}`);


function toKebabCase(str: string): string {
  return str
    .replace(/[^\w\s가-힣]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

function generateSlug({
  title,
  tags,
  uuid,
}: {
  title: string
  tags: string[]
  uuid: string
}): string {
  const platformTags = ['백준', '프로그래머스', '스프링부트'];
  const languageTags = ['JAVA', 'C++', 'Python', 'JS'];

  let platform = '';
  if (tags.includes('백준')) platform = 'baekjoon';
  else if (tags.includes('프로그래머스')) platform = 'programmers';
  else if (tags.includes('스프링부트')) platform = 'springboot';

  const numberMatch = title.match(/(\d+)번/);
  const problemNumber = numberMatch ? numberMatch[1] : null;

  const postTags = tags
    .filter((tag) => languageTags.includes(tag))
    .map((tag) => tag.toLowerCase().replace(/\+\+/, 'pp')); // C++ → cpp

  const kebabTags = postTags.join('-');
  const titlePart = toKebabCase(title);

  let slug = '';

  if (platform === 'baekjoon' && problemNumber) {
    slug = [platform, problemNumber, kebabTags].filter(Boolean).join('-');
  } else if (platform === 'programmers') {
    slug = [platform, titlePart, kebabTags].filter(Boolean).join('-');
  } else if (platform === 'springboot') {
    slug = [platform, titlePart].filter(Boolean).join('-');
  } else {
    // 🎯 조건에 해당되지 않는 경우 → 제목 기반으로 slug 생성
    slug = toKebabCase(title);
  }

  return slug;
}

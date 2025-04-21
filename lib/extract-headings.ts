export interface TOCItem {
  id: string
  text: string
  level: 1 | 2 | 3
}

/** Notion blocks 배열에서 h1·h2·h3 정보 추출 */
export function extractHeadings(blocks: any[]): TOCItem[] {
  const result: TOCItem[] = []

  const walk = (nodes: any[]) =>
    nodes.forEach((node) => {
      if (!node) return

      if (
        typeof node.type === 'string' &&
        node.type.startsWith('heading_') &&
        (node.type === 'heading_1' || node.type === 'heading_2') // 👈 여기 추가
      ) {
        const level = Number(node.type.split('_')[1]) as 1 | 2
        const text =
          node[node.type]?.rich_text?.[0]?.plain_text ?? ''
        result.push({ id: node.id.replace(/-/g, ''), text, level })
      }

      if (node.has_children && Array.isArray(node.blocks)) {
        walk(node.blocks)
      }
    })

  walk(blocks)
  return result
}

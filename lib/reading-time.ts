// lib/reading-time.ts
export function getTextFromBlocks(blocks: any[]): string {
    return blocks
      .flatMap((block: any) =>
        (block[block.type]?.rich_text || []).map((t: any) => t.plain_text)
      )
      .join(' ')
  }
  
  export function calculateReadingTime(text: string, wordsPerMinute = 250): number {
    const words = text.trim().split(/\s+/).length
    return Math.max(1, Math.ceil(words / wordsPerMinute)) // 최소 1분
  }
  
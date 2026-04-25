/**
 * Word Counter — sample tool
 * Simplified standalone example from GoWin Tools (https://gowin.tools/tools/word-counter)
 *
 * No dependencies. Pure TypeScript. Copy and use freely for reference.
 */

export interface TextStats {
  words: number;
  chars: number;
  charsNoSpaces: number;
  sentences: number;
  paragraphs: number;
  uniqueWords: number;
  avgWordLength: number;
  longestWord: string;
  shortestWord: string;
  mostFrequentWord: string;
  mostFrequentCount: number;
}

export function analyzeText(text: string): TextStats {
  const trimmed = text.trim();

  const empty: TextStats = {
    words: 0, chars: 0, charsNoSpaces: 0, sentences: 0, paragraphs: 0,
    uniqueWords: 0, avgWordLength: 0, longestWord: "", shortestWord: "",
    mostFrequentWord: "", mostFrequentCount: 0,
  };

  if (!trimmed) return empty;

  const wordList = trimmed
    .split(/\s+/)
    .map((w) => w.replace(/[^a-zA-Z']/g, ""))
    .filter(Boolean);

  const freq: Record<string, number> = {};
  for (const w of wordList) {
    const key = w.toLowerCase();
    freq[key] = (freq[key] ?? 0) + 1;
  }

  let mostFrequentWord = "";
  let mostFrequentCount = 0;
  for (const [w, c] of Object.entries(freq)) {
    if (c > mostFrequentCount) { mostFrequentWord = w; mostFrequentCount = c; }
  }

  const sorted = [...wordList].sort((a, b) => a.length - b.length);
  const totalWordChars = wordList.reduce((s, w) => s + w.length, 0);

  return {
    words: wordList.length,
    chars: text.length,
    charsNoSpaces: text.replace(/\s/g, "").length,
    sentences: trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length,
    paragraphs: trimmed.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || 1,
    uniqueWords: Object.keys(freq).length,
    avgWordLength: wordList.length
      ? Math.round((totalWordChars / wordList.length) * 10) / 10
      : 0,
    longestWord: sorted[sorted.length - 1] ?? "",
    shortestWord: sorted[0] ?? "",
    mostFrequentWord,
    mostFrequentCount,
  };
}

// ── Example usage ─────────────────────────────────────────────────────────────

const sample = `The quick brown fox jumps over the lazy dog.
The fox was very quick indeed.`;

const stats = analyzeText(sample);
console.log("Words:", stats.words);
console.log("Characters:", stats.chars);
console.log("Sentences:", stats.sentences);
console.log("Unique words:", stats.uniqueWords);
console.log("Most frequent:", `"${stats.mostFrequentWord}" (${stats.mostFrequentCount}x)`);
console.log("Longest word:", stats.longestWord);

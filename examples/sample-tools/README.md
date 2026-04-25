# Sample Tools

These are simplified, standalone TypeScript examples extracted from the GoWin Tools codebase.

They are provided for educational and reference purposes — to show the kind of pure utility logic that powers GoWin Tools.

**Notes:**
- These are simplified versions. The production implementations may have additional features.
- No React, no Next.js, no dependencies — just TypeScript functions you can copy and use.
- Each file is self-contained and can be run with `ts-node` or pasted into a TypeScript project.

## Files

| File | What it does |
|---|---|
| `word-counter.ts` | Analyzes text and returns word/character/sentence counts and statistics |
| `slug-generator.ts` | Converts any string to a URL-safe slug |

## Running the examples

```bash
# With ts-node
npx ts-node examples/sample-tools/word-counter.ts
npx ts-node examples/sample-tools/slug-generator.ts

# Or paste the functions into any TypeScript project
```

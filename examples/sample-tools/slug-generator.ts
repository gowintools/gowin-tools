/**
 * Slug Generator — sample tool
 * Simplified standalone example from GoWin Tools (https://gowin.tools/tools/slug-generator)
 *
 * No dependencies. Pure TypeScript. Copy and use freely for reference.
 */

/**
 * Converts any string to a URL-safe slug.
 *
 * @param text  - Input string (any language, mixed case, punctuation)
 * @param sep   - Word separator: "-" (default) or "_"
 * @returns     - Lowercase slug with accents removed and spaces replaced by sep
 *
 * @example
 * toSlug("Hello World!")        // → "hello-world"
 * toSlug("Héllo Wörld", "_")   // → "hello_world"
 * toSlug("  multiple   spaces") // → "multiple-spaces"
 */
export function toSlug(text: string, sep: "-" | "_" = "-"): string {
  return text
    .normalize("NFD")                     // decompose accented characters
    .replace(/[\u0300-\u036f]/g, "")      // remove accent marks
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")         // remove non-alphanumeric (keep spaces)
    .trim()
    .replace(/\s+/g, sep);               // collapse whitespace → separator
}

// ── Example usage ─────────────────────────────────────────────────────────────

const examples = [
  "Hello World",
  "GoWin Tools — Free Browser Utilities",
  "Héllo Wörld (with accents)",
  "  leading and trailing spaces  ",
  "camelCase or PascalCase",
  "Price: $19.99 — Limited Time!",
];

for (const input of examples) {
  console.log(`"${input}"`);
  console.log(`  → "${toSlug(input)}"`);
  console.log(`  → "${toSlug(input, "_")}" (underscore)`);
  console.log();
}

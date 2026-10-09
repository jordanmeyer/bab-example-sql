// Only documented integer money fields carry USD units. Arbitrary aliases stay raw.
const moneyNames = new Set(['unit_price_cents', 'gross_cents', 'shipped_cents', 'outstanding_cents']);
export const isMoney = field => field.typeId === 2 && moneyNames.has(field.name);
export const isNumeric = field => [2, 3, 7].includes(field.typeId);
export function exactDollars(value) {
  const cents = BigInt(value), amount = cents < 0n ? -cents : cents;
  const dollars = (amount / 100n).toLocaleString('en-US');
  const fraction = amount % 100n;
  return `${cents < 0n ? '-' : ''}$${dollars}${fraction ? '.' + String(fraction).padStart(2, '0') : ''}`;
}
export const fieldLabel = field => isMoney(field) ? field.name.replace(/_cents$/, '').replaceAll('_', ' ') + ' (USD)' : field.name;
export const resultValue = (field, value) => value === null ? 'NULL' : isMoney(field) ? exactDollars(value) : value;

export function chartReason(result) {
  if (!result.rows.length) return 'The query returned no rows.';
  if (result.fields.length !== 2) return 'A chart needs exactly two result columns.';
  if (result.fields[0].typeId !== 5 || !isNumeric(result.fields[1])) return 'A chart needs text categories first and a numeric measure second.';
  if (result.capped) return 'This result hit the 500-row cap; a partial chart could mislead.';
  if (result.rows.length > 20) return 'This result has more than 20 categories. Aggregate or filter to compare a smaller set.';
  if (result.rows.some(row => !row[0] || row[1] === null)) return 'Each chart category needs nonempty text and a non-NULL measure.';
  if (new Set(result.rows.map(row => row[0])).size !== result.rows.length) return 'Categories repeat. GROUP BY the category and aggregate the measure first.';
  if (result.rows.some(row => !Number.isFinite(Number(row[1])) || Math.abs(Number(row[1])) > Number.MAX_SAFE_INTEGER)) return 'Some values exceed safe chart display bounds. The exact table retains them.';
  return null;
}
export function errorGuidance(message) {
  if (/cancelled/i.test(message)) return 'Reset database, then run a smaller query. Your editor text stays in place.';
  if (/exceeded 8 seconds/i.test(message)) return 'Reset database; narrow the joins or filter inputs before running again. A final LIMIT may not reduce intermediate work.';
  if (/column.*not found|referenced column|ambiguous reference/i.test(message)) return 'Open Tables and columns, check the column spelling and qualify shared names with the table alias.';
  if (/table.*does not exist/i.test(message)) return 'Check the table name in Tables and columns, or restore a starter query.';
  if (/parser error|syntax error/i.test(message)) return 'Check commas, quotes and clause order near the reported location. Compare with a starter; Restore previous query recovers your draft.';
  return 'Inspect the exact error below. Check the schema and the one-query limits; your draft is preserved.';
}
export function resultNote(result) {
  return `Fulfillment Lab result note\nCSV: fulfillment-${result.dataset}-results.csv\nDataset: ${result.dataset} synthetic example\nSource tables: ${result.counts}\nCompleted: ${result.completedAt}\nRetained rows: ${result.rows.length}${result.capped?' (500-row cap reached; additional rows exist)':' (uncapped result)'}\nTable pagination: up to 50 rows per visible page; CSV includes every retained row.\nUnits: CSV retains raw values and original names. Documented *_cents money columns use integer USD cents; arbitrary aliases do not establish units.\nColumns: ${result.fields.map(f=>`${f.name} (${f.type})`).join(', ')}\nLimitations: synthetic merchandise values; no costs, due dates or payment status. Unshipped does not mean late, unpaid or unprofitable.\n\nExecuted SQL (may differ from the editor):\n${result.sql}\n`;
}

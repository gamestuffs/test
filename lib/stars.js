export function codeToLevel(code) {
  if (!code) return 0;
  const tier = code[0];
  const n = parseInt(code.slice(1), 10) || 0;
  if (tier === 'Y') return Math.max(0, Math.min(5, n));
  if (tier === 'R') return Math.max(6, Math.min(10, 5 + n));
  return 0;
}
export function yellowStars(level) { return Math.min(level, 5); }
export function redStars(level) { return Math.max(level - 5, 0); }
export function levelToCode(level) {
  const lv = Math.max(0, Math.min(10, level|0));
  if (lv === 0) return '';
  if (lv <= 5) return 'Y' + lv;
  return 'R' + (lv - 5);
}
export function meetsAtLeast(level, minCode) {
  // compare like Y1 < Y2 < ... < Y5 < R1 < ... < R5
  const minLevel = codeToLevel(minCode);
  return level >= minLevel;
}
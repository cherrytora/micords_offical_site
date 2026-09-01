import type { Locale } from '../i18n/index';

export function formatDate(dateStr: string, locale: Locale): string {
  const localeMap: Record<Locale, string> = { 'zh-tw': 'zh-TW', 'en': 'en-US', 'ja': 'ja-JP' };
  return new Date(dateStr).toLocaleDateString(localeMap[locale] ?? 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

/** Sort release notes newest-first, using the version as a tie-breaker. */
export function compareReleaseNotes(
  a: { date: string; version: string },
  b: { date: string; version: string },
): number {
  const dateDifference = new Date(b.date).getTime() - new Date(a.date).getTime();
  if (dateDifference !== 0) return dateDifference;

  const aParts = a.version.replace(/^v/i, '').split('.').map(Number);
  const bParts = b.version.replace(/^v/i, '').split('.').map(Number);
  const partCount = Math.max(aParts.length, bParts.length);

  for (let index = 0; index < partCount; index += 1) {
    const difference = (bParts[index] ?? 0) - (aParts[index] ?? 0);
    if (difference !== 0) return difference;
  }

  return 0;
}

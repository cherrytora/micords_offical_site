import type { Locale } from '../i18n/index';

export function formatDate(dateStr: string, locale: Locale): string {
  const localeMap: Record<Locale, string> = { 'zh-tw': 'zh-TW', 'en': 'en-US', 'ja': 'ja-JP' };
  return new Date(dateStr).toLocaleDateString(localeMap[locale] ?? 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

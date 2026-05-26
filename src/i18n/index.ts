export type Locale = 'zh-tw' | 'en' | 'ja';

export const locales: Locale[] = ['zh-tw', 'en', 'ja'];
export const defaultLocale: Locale = 'zh-tw';

export const localeNames: Record<Locale, string> = {
  'zh-tw': '繁體中文',
  'en': 'English',
  'ja': '日本語',
};

export const localeShort: Record<Locale, string> = {
  'zh-tw': '繁中',
  'en': 'EN',
  'ja': 'JP',
};

export const htmlLang: Record<Locale, string> = {
  'zh-tw': 'zh-TW',
  'en': 'en',
  'ja': 'ja',
};

export const ogLocale: Record<Locale, string> = {
  'zh-tw': 'zh_TW',
  'en': 'en_US',
  'ja': 'ja_JP',
};

// --------------- UI translations ---------------

const ui = {
  'zh-tw': {
    nav: {
      home: '首頁',
      blog: '毛孩日記',
      tutorial: '教學',
      faq: 'FAQ',
      roadmap: '即將上線',
      releaseNotes: '更新日誌',
      contact: '聯絡我們',
      cta: '立即體驗',
    },
    contact: {
      badge: 'Contact',
      title: '聯絡我們',
      subtitle: '有任何問題或想法，都歡迎找我們。',
      seoTitle: 'Micords 貓咪健康紀錄 APP｜聯絡我們',
      seoDescription: '有問題或建議？歡迎透過官方 Threads @rela2cats 或意見回饋表單聯絡 Micords 團隊，你的聲音會影響下一版的開發方向。',
      channels: [
        {
          icon: '🧵',
          title: '官方 Threads',
          handle: '@rela2cats',
          href: 'https://www.threads.com/@rela2cats',
          desc: '最新消息、使用心得、貓咪日常，歡迎來找我們聊天。',
          cta: '前往 Threads',
        },
        {
          icon: '📝',
          title: '意見回饋表單',
          handle: 'Google 表單',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfGHGgkdV2jAep1zVODgT8oM0Ahzc_ORTHFPtApmLd3s-bXHQ/viewform?usp=header',
          desc: '功能建議、Bug 回報、或任何想對我們說的話。',
          cta: '填寫表單',
        },
      ],
    },
    blog: {
      badge: 'Blog',
      title: '毛孩日記',
      subtitle: '貓咪健康知識、日常照護與 Micords 使用技巧。',
      empty: '文章即將上線，敬請期待。',
      readMore: '閱讀更多',
      latestLabel: '最新',
      seoTitle: 'Micords 貓咪健康紀錄 APP｜毛孩日記',
      seoDescription: 'Micords 毛孩日記，分享貓咪健康知識、血檢數值解析、飲食管理、用藥紀錄技巧，以及毛孩日常照護的實用文章。',
      seoKeywords: '毛孩日記,貓咪健康知識,貓咪血檢教學,貓咪飲食管理,毛孩日常,貓咪照護,Micords',
    },
    releaseNotes: {
      badge: 'Changelog',
      title: '更新日誌',
      subtitle: '每一次更新，都是為了讓守護更完善。',
      latest: '最新版本',
      old: '舊版本',
      seoTitle: 'Micords 貓咪健康紀錄 APP｜更新日誌',
      seoDescription: 'Micords 各版本更新紀錄，包含新功能上線、介面改善與錯誤修正。持續進化，讓每一位貓奴都能更輕鬆守護毛孩健康。',
    },
    roadmap: {
      badge: 'Roadmap',
      title: '即將上線功能',
      subtitle: '我們持續為每一位貓奴打造更好的工具。',
      done: '已上線',
      building: '開發中',
      planned: '規劃中',
      seoTitle: 'Micords 貓咪健康紀錄 APP｜即將上線功能',
      seoDescription: 'Micords 產品路線圖，了解我們正在開發的新功能。多貓管理、記帳簿、物品倉庫、健康報告⋯⋯每一步都是為了讓毛孩健康管理更完善。',
    },
    langSwitcher: '切換語言',
  },

  'en': {
    nav: {
      home: 'Home',
      blog: 'Cat Diary',
      tutorial: 'Tutorial',
      faq: 'FAQ',
      roadmap: 'Coming Soon',
      releaseNotes: 'Changelog',
      contact: 'Contact',
      cta: 'Try Now',
    },
    contact: {
      badge: 'Contact',
      title: 'Contact Us',
      subtitle: "Any questions or ideas? We'd love to hear from you.",
      seoTitle: 'Micords Cat Health App | Contact Us',
      seoDescription: 'Have questions or suggestions? Reach out to the Micords team via Threads @rela2cats or our feedback form. Your voice shapes the next version.',
      channels: [
        {
          icon: '🧵',
          title: 'Official Threads',
          handle: '@rela2cats',
          href: 'https://www.threads.com/@rela2cats',
          desc: 'Latest news, user stories, and cat life — come chat with us.',
          cta: 'Go to Threads',
        },
        {
          icon: '📝',
          title: 'Feedback Form',
          handle: 'Google Form',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfGHGgkdV2jAep1zVODgT8oM0Ahzc_ORTHFPtApmLd3s-bXHQ/viewform?usp=header',
          desc: 'Feature requests, bug reports, or anything you want to tell us.',
          cta: 'Fill Out Form',
        },
      ],
    },
    blog: {
      badge: 'Blog',
      title: 'Cat Diary',
      subtitle: 'Cat health tips, daily care guides, and Micords usage tricks.',
      empty: 'Articles coming soon. Stay tuned.',
      readMore: 'Read More',
      latestLabel: 'Latest',
      seoTitle: 'Micords Cat Health App | Cat Diary',
      seoDescription: 'Micords Cat Diary — sharing cat health knowledge, blood test analysis, diet management, medication tips, and daily care articles.',
      seoKeywords: 'cat diary,cat health,cat blood test,cat diet,pet care,Micords',
    },
    releaseNotes: {
      badge: 'Changelog',
      title: 'Changelog',
      subtitle: 'Every step forward, documented.',
      latest: 'Latest',
      old: 'Previous',
      seoTitle: 'Micords Cat Health App | Changelog',
      seoDescription: 'Micords changelog — new features, improvements, and fixes for each version.',
    },
    roadmap: {
      badge: 'Roadmap',
      title: 'Coming Soon',
      subtitle: "Features we're building to make pet care more complete.",
      done: 'Live',
      building: 'In Progress',
      planned: 'Planned',
      seoTitle: 'Micords Cat Health App | Roadmap',
      seoDescription: "Micords product roadmap — discover what we're building next.",
    },
    langSwitcher: 'Switch Language',
  },

  'ja': {
    nav: {
      home: 'ホーム',
      blog: '猫日記',
      tutorial: 'チュートリアル',
      faq: 'よくある質問',
      roadmap: '近日公開',
      releaseNotes: '更新履歴',
      contact: 'お問い合わせ',
      cta: '今すぐ試す',
    },
    contact: {
      badge: 'Contact',
      title: 'お問い合わせ',
      subtitle: 'ご質問やご意見はお気軽にどうぞ。',
      seoTitle: 'Micords 猫の健康記録アプリ | お問い合わせ',
      seoDescription: 'ご質問やご提案はMicordsチームへ。Threads @rela2cats またはフィードバックフォームでご連絡ください。',
      channels: [
        {
          icon: '🧵',
          title: '公式 Threads',
          handle: '@rela2cats',
          href: 'https://www.threads.com/@rela2cats',
          desc: '最新情報、使用体験、猫の日常 — お気軽に話しかけてください。',
          cta: 'Threads を見る',
        },
        {
          icon: '📝',
          title: 'フィードバックフォーム',
          handle: 'Google フォーム',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSfGHGgkdV2jAep1zVODgT8oM0Ahzc_ORTHFPtApmLd3s-bXHQ/viewform?usp=header',
          desc: '機能リクエスト、バグ報告、または伝えたいことを何でもどうぞ。',
          cta: 'フォームを送信',
        },
      ],
    },
    blog: {
      badge: 'Blog',
      title: '猫日記',
      subtitle: '猫の健康知識、毎日のケアガイド、Micords の使い方のコツ。',
      empty: '記事は近日公開予定です。お楽しみに。',
      readMore: '続きを読む',
      latestLabel: '最新',
      seoTitle: 'Micords 猫の健康記録アプリ | 猫日記',
      seoDescription: 'Micords 猫日記 — 猫の健康知識、血液検査の解説、食事管理、服薬記録のコツなどを紹介。',
      seoKeywords: '猫日記,猫の健康,血液検査,食事管理,ペットケア,Micords',
    },
    releaseNotes: {
      badge: 'Changelog',
      title: '更新履歴',
      subtitle: 'すべての進歩を記録しています。',
      latest: '最新版',
      old: '旧バージョン',
      seoTitle: 'Micords 猫の健康記録アプリ | 更新履歴',
      seoDescription: 'Micords の更新履歴 — 各バージョンの新機能、改善点、修正内容をご覧ください。',
    },
    roadmap: {
      badge: 'Roadmap',
      title: '近日公開',
      subtitle: 'ペットケアをより充実させるために開発中の機能です。',
      done: 'リリース済み',
      building: '開発中',
      planned: '計画中',
      seoTitle: 'Micords 猫の健康記録アプリ | ロードマップ',
      seoDescription: 'Micords ロードマップ — 計画中の新機能と近日公開の改善点をご覧ください。',
    },
    langSwitcher: '言語切替',
  },
} as const;

export type UI = typeof ui['zh-tw'];

export function useTranslations(locale: Locale): UI {
  return (ui[locale] ?? ui['zh-tw']) as UI;
}

/** Strip base and locale prefix to get the bare page path, e.g. "/blog" */
export function getPagePath(pathname: string, base: string): string {
  const cleanBase = base.replace(/\/$/, '');
  let path = pathname.startsWith(cleanBase) ? pathname.slice(cleanBase.length) : pathname;
  // Remove locale prefix /en/ or /ja/
  for (const loc of ['en', 'ja']) {
    if (path === `/${loc}` || path === `/${loc}/`) return '/';
    if (path.startsWith(`/${loc}/`)) return path.slice(loc.length + 1);
  }
  return path || '/';
}

/** Build locale-specific URL for a given page path */
export function localePath(locale: Locale, pagePath: string, base: string): string {
  const cleanBase = base.replace(/\/$/, '');
  const cleanPath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`;
  if (locale === 'zh-tw') return `${cleanBase}${cleanPath}`;
  return `${cleanBase}/${locale}${cleanPath}`;
}

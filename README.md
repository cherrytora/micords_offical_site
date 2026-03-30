# Micords 官方網站

Micords 官網，使用 [Astro](https://astro.build/) + Tailwind CSS 建置，部署至 GitHub Pages。

---

## 目錄結構

```
micord_offical_site/
├── public/                        # 靜態資源（圖片、Logo）
│   └── Micords.png / Micords去背.png
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       # 所有頁面共用的 <head>、font、meta
│   ├── components/
│   │   ├── Nav.astro              # 導覽列（含手機版 hamburger）
│   │   └── Footer.astro          # 頁尾
│   ├── pages/                     # 每個 .astro 檔自動對應一條路由
│   │   ├── index.astro            # 首頁（服務連結、品牌小故事）
│   │   ├── tutorial.astro         # 教學（步驟說明 + 媒體佔位區）
│   │   ├── roadmap.astro          # 即將上線功能 / 時程
│   │   ├── release-notes.astro    # 更新日誌（讀取 content collection）
│   │   └── contact.astro          # 聯絡我們
│   ├── content/
│   │   ├── config.ts              # Content Collection schema 定義
│   │   └── release-notes/         # ⬅ 新增版本只要在這裡加 .md 檔
│   │       ├── 1-0-0.md
│   │       └── 1-1-0.md
│   └── styles/
│       └── global.css             # Tailwind base + 品牌色系
├── astro.config.mjs               # Astro 設定（含 GitHub Pages base path）
├── tailwind.config.mjs            # Tailwind 設定
└── .github/workflows/deploy.yml   # GitHub Actions 自動部署
```

---

## 本地開發

**需求：** Node.js v22+（建議用 nvm 管理）

```bash
# 切換 Node 版本（每次開新 Terminal 都要執行）
source ~/.nvm/nvm.sh && nvm use 22

# 安裝相依套件（第一次需要）
npm install

# 啟動開發伺服器
npm run dev
```

啟動後開啟瀏覽器：**http://localhost:4321/micord_offical_site**

> 若 4321 被佔用會自動換 port（4322、4323…），Terminal 會顯示實際 URL。
> 存檔後瀏覽器會自動熱重載，不需要手動重整。

---

## 常見修改

### 更新服務連結 (App URL)

`src/components/Nav.astro` 和 `src/pages/index.astro` 頂端都有：

```js
const APP_URL = 'https://micords.web.app/';
```

改這裡就會同步更新所有「立即申請體驗」按鈕。

### 新增 Release Note

在 `src/content/release-notes/` 新增一個 `.md` 檔，例如 `1-2-0.md`：

```md
---
version: "1.2.0"
date: "2026-06-01"
title: "多貓管理上線"
summary: "支援多隻貓咪帳戶切換。"
---

## 版本 1.2.0

### 新功能
- ...
```

存檔後 `/release-notes` 頁面會自動出現，**不需要改任何其他程式碼**。

### 新增教學步驟

編輯 `src/pages/tutorial.astro` 頂端的 `sections` 陣列，新增一個物件即可：

```js
{
  id: 'my-feature',       // 錨點 ID
  title: '功能名稱',
  desc: '一行說明',
  steps: ['步驟一', '步驟二'],
  mediaType: 'placeholder',
  mediaLabel: '示意圖',   // 之後換成 <img> 或 <video>
},
```

### 更新 Roadmap 時程

編輯 `src/pages/roadmap.astro` 頂端的 `roadmap` 陣列。`status` 有三個值：
- `done` — 已上線（綠色）
- `building` — 開發中（橘色）
- `planned` — 規劃中（灰色）

### 新增教學媒體（截圖 / 影片）

找到 `tutorial.astro` 中對應章節的媒體佔位區，把 `<div class="bg-slate-100 ...">` 整段換成：

```astro
<!-- 截圖 -->
<img src="/micord_offical_site/截圖檔名.png" alt="說明" class="rounded-3xl w-full" />

<!-- 或影片 -->
<video src="/micord_offical_site/demo.mp4" controls class="rounded-3xl w-full" />
```

將圖片或影片放在 `public/` 資料夾下即可。

---

## 部署到 GitHub Pages

### 自動部署（推薦）

1. Push 到 `main` branch，GitHub Actions 會自動 build 並部署。
2. 第一次使用前，到 GitHub repo → **Settings → Pages → Source**，選 **GitHub Actions**。

部署完成後網站位於：**https://cherrytora.github.io/micord_offical_site/**

### 手動 Build

```bash
npm run build   # 輸出到 dist/ 資料夾
npm run preview # 預覽 build 結果（http://localhost:4321）
```

---

## 品牌規範

| 項目 | 值 |
|---|---|
| 主色（品牌橘） | `#FF8D41` |
| 背景色（奶油白） | `#FFF9F5` |
| 字型 | Noto Sans TC |
| Tailwind class | `bg-brand-orange` / `text-brand-orange` / `bg-brand-cream` |


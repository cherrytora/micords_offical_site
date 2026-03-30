# Decap CMS 設定與使用指南

Decap CMS 是一個純前端的內容管理介面，讓你不需要碰程式碼，直接在瀏覽器更新「更新日誌」和「即將上線功能」的內容。

---

## 開通步驟（只需做一次）

### 1. Push 代碼到 GitHub

```bash
cd /Users/sirius/docs/micord_offical_site
git add .
git commit -m "feat: add Decap CMS"
git push origin main
```

### 2. 開啟 GitHub Pages

1. 到 [repo 設定頁](https://github.com/cherrytora/micord_offical_site/settings/pages)
2. **Source** 選「**GitHub Actions**」
3. 等 Actions 跑完（約 1-2 分鐘），網站上線於：  
   `https://cherrytora.github.io/micord_offical_site`

### 3. 建立 GitHub OAuth App

1. 到 [GitHub Developer Settings](https://github.com/settings/developers)
2. 點「**New OAuth App**」
3. 填入以下資訊：

   | 欄位 | 值 |
   |---|---|
   | Application name | `Micords CMS` |
   | Homepage URL | `https://cherrytora.github.io/micord_offical_site` |
   | Authorization callback URL | `https://cherrytora.github.io/micord_offical_site/admin/` |

4. 點「**Register application**」
5. 複製產生的 **Client ID**（格式類似 `Ov23liXXXXXXXX`）

### 4. 填入 Client ID

打開 `public/admin/config.yml`，找到這行：

```yaml
app_id: REPLACE_WITH_YOUR_GITHUB_OAUTH_CLIENT_ID
```

替換為你的 Client ID：

```yaml
app_id: Ov23liXXXXXXXX
```

然後再 push 一次：

```bash
git add public/admin/config.yml
git commit -m "config: set CMS OAuth app id"
git push origin main
```

---

## 日常使用方式

### 登入

等部署完成後，開啟後台網址：

**https://cherrytora.github.io/micord_offical_site/admin/**

點「**Login with GitHub**」→ 在跳出的視窗授權 → 進入 CMS 後台。

> ⚠️ 本地 dev server（localhost）無法登入，一定要用正式部署的網址。

---

### 新增更新日誌

1. 左側選「**更新日誌**」
2. 點右上角「**New 版本**」
3. 填入欄位：
   - **版本號**：例如 `1.2.0`
   - **發布日期**：選日期
   - **標題**：例如「多貓管理上線」
   - **摘要**：一句話說明這次更新
   - **內容**：用 Markdown 寫詳細說明（支援標題、條列等）
4. 點右上角「**Publish**」

CMS 會自動 commit 到 GitHub，GitHub Actions 接著自動部署，幾分鐘後網站更新。

---

### 新增 / 修改即將上線功能

1. 左側選「**即將上線功能**」
2. 點現有項目編輯，或點「**New 功能項目**」新增
3. 填入欄位：
   - **排序**：數字越小越前面（例如 `1`、`2`、`3`…）
   - **季度**：例如 `Q2 2026`
   - **標題**：功能名稱
   - **說明**：一段描述
   - **狀態**：選 `已上線` / `開發中` / `規劃中`
   - **功能列表**：條列式功能點，點「**Add item**」新增
4. 點「**Publish**」

---

## 編輯首頁內容

1. 左側選「**頁面內容**」→ 點「**首頁**」
2. 可編輯的欄位：
   - **Hero 大標題**：首頁最大的標題文字
   - **Hero 副標題**：標題下方的說明文字
   - **主要按鈕文字**：CTA 按鈕上的文字
   - **功能區標題**：功能介紹區的標題
   - **功能列表**：四個功能卡片（Emoji、功能名稱、功能說明）
   - **品牌故事標題**：品牌故事區的標題
   - **品牌故事內容**：一段品牌故事文字
   - **CTA 標題**：底部行動呼籲的標題
   - **CTA 按鈕文字**：底部按鈕上的文字
3. 點「**Publish**」

---

## 內容存放位置

CMS 編輯的內容對應到 repo 裡的這些檔案，直接修改檔案也可以：

| CMS 集合 | 檔案位置 |
|---|---|
| 更新日誌 | `src/content/release-notes/*.md` |
| 即將上線功能 | `src/content/roadmap/*.md` |
| 首頁 | `src/content/pages/home.yaml` |

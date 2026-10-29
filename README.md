# AI 自動化實戰課

依據已確認設計圖開發的繁體中文一頁式課程網站。

## 執行

需要 Node.js 22.12+ 與 pnpm。

```sh
pnpm install
pnpm dev
```

瀏覽 http://127.0.0.1:5173 。

```sh
pnpm build
pnpm preview
```

`dist/` 為可部署到靜態網站主機的正式版本。本專案使用根路徑部署。

## 技術

- React 19、TypeScript、Vite、Tailwind CSS 4。
- Untitled UI 官方開源 Button（透過官方 CLI 安裝），位於 `src/components/base/buttons/button.tsx`；搭配官方 `@untitledui/icons`。
- React Aria 無障礙對話框、焦點管理與按鈕互動。
- Framer Motion：捲動進場、流程卡片與連線、完成狀態、手機選單；尊重 prefers-reduced-motion。

## 修改內容

- `src/App.tsx`：課程文案、導覽與各區塊。
- `src/components/Workflow.tsx`：首頁流程視覺。
- `src/App.tsx` 的 `registrationUrl`：課程報名網址。
- `src/styles/globals.css`、`theme.css`：版面與設計色彩。
- `public/course-outline.txt`：下載的課程大綱。

## 報名功能狀態

桌面導覽、手機選單與頁尾的「立即報名課程」連至 https://google.com/（依指定網址設定）。課程日期、時數、形式與費用仍待提供。本站不收集報名資料。

## 來源

Untitled UI 官方文件：https://www.untitledui.com/react/docs/installation
Button 透過 `untitledui add button` 取得，保留官方元件原始碼；品牌樣式在外層 CSS 自訂。
Icons：https://www.npmjs.com/package/@untitledui/icons
Motion：https://motion.dev/docs/react
Noto Sans TC 由 Google Fonts 提供，無網路時使用系統 sans-serif。
金屬環為此網站獨立產生的裝飾素材；所有文字、連線與互動介面都是原生網頁元素。

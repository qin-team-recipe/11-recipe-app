# チーム 11 レシピアプリ

## 技術スタック

### フロントエンド

- Next.js(App Router)
- Tailwind / shadcn/ui

### バックエンド

- supabase
- Prisma

## npm script

```
# 開発モード起動
npm run dev
# ビルド
npm run build
# 本番モード起動
npm run start
# コードチェック
npm run lint
# コード整形
npm run format
# コードを修正
npm run lint:fix
```

## コミットメッセージ

わかりやすければ OK

## ディレクトリ構造

```
app/
├── api                           :Backend
├── components
│   ├── parts/                    :共通コンポーネント、UIなど再利用するもの
│   │   └── Button/
│   │       ├──Button.tsx         :コンポーネントのメインファイル
│   │       └──index.ts           :exportするだけ
│   │
│	  └── features/　
│		    ├── search/　                 :検索feature
│		    │   ├── SearchBar/
│		    │   │   ├──SearchBar.tsx      :コンポーネントのメインファイル
│		    │   │   ├──useDebounce.ts     :このコンポーネントでしか使わないファイル
│		    │   │   └── index.ts　　　    :exportするだけ
│		    │   └── SearchResult/
│		    │       ├──SearchResult.tsx   :コンポーネントのメインファイル
│		    │       ├──filterResult.ts    :このコンポーネントでしか使わないファイル
│		    │       └── index.ts          :exportするだけ
│		    │
│		    └── recipe/                   :レシピfeature
│		        └── RecipeList/
│		            ├──RecipeList.tsx     :コンポーネントのメインファイル
│		            ├── index.ts　　　    :exportするだけ
│		            └── RecipeListItem/
│		                ├──RecipeListItem.tsx :コンポーネントのメインファイル
│		               └── index.ts　  　    :exportするだけ
│
├──  (pages)/　                    :Route Groupにするための（）
│	  ├── layout.tsx　              :アプリ全体のレイアウト
│	  ├── (search)/　               :Route Groupにするための（）
│	  │   ├── search/
│	  │   │   └── page.tsx          :/searchページ
│	  │   ├── page.tsx              :分かりずらいですがTOPページ
│	  │   └── layout.tsx            :'/'と'/search'用のレイアウト（検索バーを共通化）
│	  │
│	  └── recipe/                   :レシピfeature、
│	      └── [recipeId]/
│	          ├──getRecipeDetailsById.ts :このページで使うファイル
│           └── page.tsx          :レシピ詳細ページ
│ 　
└── hooks/                    :共通hooks,utils,data,constants,types等?
│	  └── useSomething.ts
│
└── global.css
```

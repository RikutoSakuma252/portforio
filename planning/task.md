# Portfolio Works 制作タスク管理

## ルール

### 制作全般
- **サイト作成時は必ず `/frontend-design` スキルを使用すること**
- **各サイトの制作開始前に必ずブランチを作成すること**（命名例: `feature/site-02-osteria-nodo`）
- **制作完了後は必ずPRを作成してmainへマージすること**
- 各サイトは独立したプロジェクト（独立フォルダ or 独立リポジトリ）として管理する
- コミットは作業の区切りごとに行う（セクション単位が目安）
- 命名規則: ファイル名はケバブケース（例: `hero-section.tsx`）

### 画像
- フリー素材は **Unsplash**（https://unsplash.com）または **Pexels**（https://pexels.com）を使用
- どちらも商用利用可・クレジット表記不要のライセンス
- ダウンロードしたら `/public/images/` 以下に整理して配置
- 画像ファイル名は内容がわかる名前をつける（例: `hero-coffee-shop.jpg`）

### コーディング
- レスポンシブ対応必須（モバイルファースト）
- アニメーションは控えめに・パフォーマンスを意識する
- アクセシビリティ: `alt` 属性・適切な見出し階層を守る
- 各サイトの `content.md` を参照しながら実装する

### ダミーデータ
- 個人情報（メール・電話番号・SNS）は一旦空欄または `[placeholder]` とする
- 後から差し替えられる構造にしておく

---

## 制作順序

難易度・技術スタックの習熟度順（シンプルなものから始めて技術を積み上げる）

| 順番 | サイト | 業種 | 技術スタック | ファイル | 状態 |
|------|--------|------|-------------|---------|------|
| 1 | KOKU Coffee | カフェ LP | HTML / CSS / JavaScript | site-01-cafe.md | 完了 |
| 2 | OSTERIA NODO | レストラン LP | React + Tailwind CSS (Vite) | site-06-restaurant.md | 完了 |
| 3 | atelier BLANC | ヘアサロン LP | Nuxt.js (Vue 3) | site-02-salon.md | 完了 |
| 4 | APEX GYM | パーソナルジム LP | React + Tailwind CSS | site-03-gym.md | 完了 |
| 5 | HORIZON不動産 | 不動産 コーポレート | Next.js | site-04-realestate.md | 未着手 |
| 6 | Flowly | SaaS LP | Next.js + TypeScript | site-05-saas.md | 未着手 |

> 制作完了したら「状態」を `完了` に更新する

---

## 各サイト完了チェックリスト

- [ ] content.md の内容を全セクション実装済み
- [ ] レスポンシブ対応（モバイル・タブレット・デスクトップ）
- [ ] 画像を Unsplash/Pexels から取得・配置済み
- [ ] ローカルで動作確認済み
- [ ] ポートフォリオの Works セクションに追加（タイトル・説明・タグ・スクリーンショット）

---

## ポートフォリオへの反映方針

各サイト完成後、`/src/components/Works.tsx` の `projects` 配列を更新する。
- `image`: スクリーンショットを撮影して `/public/works/` に配置
- `tags`: 実際に使用した技術を記載
- `description`: 制作意図・工夫した点を日本語で記載

---

## Works 埋め込み手順（実装完了後に必ず実施）

サイトの実装が完了したら、以下の手順を **自動的に** 実施してユーザーに確認を促すこと。

### 1. 静的ビルド

技術スタックに応じてビルドコマンドを実行する。

| スタック | ビルドコマンド | 出力先 |
|---------|--------------|-------|
| Vite (React) | `npm run build` | `dist/` |
| Nuxt.js | `NUXT_APP_BASE_URL=/works/{slug}/ npm run generate` | `.output/public/` |
| HTML/CSS/JS | ビルド不要 | ソースをそのまま使用 |

### 2. public へコピー

```
# Vite の場合
cp -r dist/ ../../public/works/{slug}/

# Nuxt の場合
cp -r .output/public/ ../../public/works/{slug}/
```

スラッグ命名規則: `site-01-koku-coffee` → `koku-coffee` のようにサイト名のケバブケース

### 3. Works.tsx に追加

`/src/components/Works.tsx` の `projects` 配列に以下を追加する。

```ts
{
  id: N,                          // 連番
  title: "サイト名",
  category: "業種 Landing Page",
  description: "制作意図・工夫した点を日本語で記載",
  tags: ["使用技術1", "使用技術2"],
  year: "2025",
  color: "#xxxxxx",               // サイトのアクセントカラー
  image: "Pexels/Unsplash の URL または /works/{slug}/screenshot.jpg",
  link: "/works/{slug}/index.html",
}
```

### 4. 動作確認・ユーザーへ報告

上記完了後、ユーザーに以下を伝えてブラウザ確認を促す。

> 「Works セクションへの埋め込みが完了しました。ブラウザで確認してください。」

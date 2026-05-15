# Site 06 - OSTERIA NODO

## 基本情報

| 項目 | 内容 |
|------|------|
| サイト名 | OSTERIA NODO（オステリア ノード） |
| 業種 | イタリアンレストラン LP |
| 技術スタック | Astro + Tailwind CSS |
| 制作意図 | Astro の静的サイト生成・Island Architecture・パフォーマンスを示す |
| カラーコンセプト | ダークグリーン・クリームホワイト・ゴールド |

## コンセプト

> 「素材の声を、皿の上で。」

南イタリアの家庭料理をルーツに持つリストランテ。
旬の国産食材とイタリアの伝統技法を組み合わせ、
「素材そのものの美味しさ」を追求するシェフこだわりの一皿を提供する。
温かみと高級感を両立させた、食欲をそそるデザイン。

## ターゲット

- 特別な日のディナーを探している30〜60代
- 本格イタリアンを楽しみたいカップル・ファミリー
- 接待・会食に使える上質なレストランを探している人

## カラーパレット

| 役割 | カラーコード | 用途 |
|------|------------|------|
| Background | `#0f1a10` | ページ背景（ダークグリーン） |
| Surface | `#1a2b1c` | カード・セクション背景 |
| Primary | `#f5f0e8` | 見出し・メインテキスト（クリーム） |
| Secondary | `#a89b80` | サブテキスト |
| Accent | `#c9a84c` | ゴールドアクセント |
| Light Section | `#f9f6f0` | 明るいセクション（メニューなど） |

## フォント方針

- 見出し: `Libre Baskerville`（Google Fonts）- クラシック・格式
- サブ見出し: `Cinzel`（Google Fonts）- ローマ字的・高貴
- 本文: `Noto Serif JP`（Google Fonts）- 日本語の読みやすさ

## セクション構成

### 1. Hero
- フルスクリーン高品質料理画像（暗め・ムーディ）
- 画像に軽いオーバーレイ（`rgba(0,0,0,0.4)`）
- ロゴ（上部中央）
- キャッチコピー（中央）: 「素材の声を、皿の上で。」
- サブコピー: 「南イタリアの伝統と、日本の旬が出会う場所。」
- CTAボタン（ゴールドボーダー）: 「ご予約はこちら」

### 2. Story（シェフのこだわり）
- 左: シェフの写真（調理中）
- 右: テキスト
  - 「OSTERIA NODOは、南イタリア・プーリア州の家庭料理に着想を得たリストランテです。」
  - 「素材の声に耳を傾け、シンプルな調理でその本質を引き出すことを大切にしています。」
- シェフプロフィール: 山本 誠司 / 経歴: [placeholder]

### 3. Menu（コースメニュー）
- 背景: ライトセクション（`#f9f6f0`）でコントラスト
- タブ切り替え: ランチ / ディナー
  - ランチコース: ¥3,800 / ¥5,500
  - ディナーコース: ¥8,800 / ¥13,200 / ¥18,700（シェフズテーブル）
- 各コース: コース名・価格・料理の流れ（前菜 → パスタ → メイン → デザート）
- 「アレルギー・食材に関するご相談はお気軽に」注記

### 4. Dish Gallery（料理ギャラリー）
- Masonry or 不均一グリッドレイアウト（6〜8枚）
- 高品質な料理写真
- ホバーで料理名のオーバーレイ表示
- 背景: ダークグリーンに戻る

### 5. Wine（ワインセラー）
- イタリアワインのセレクションを紹介（シンプルなリスト形式）
- ソムリエ紹介: [placeholder]
- 「ワインペアリングのご相談もお気軽に」

### 6. Space（店内紹介）
- 横スクロール or スライダーで店内写真を3〜4枚
  - カウンター席・テーブル席・個室（プライベートルーム）
- 座席数・個室の有無・コース専門など情報

### 7. Voice（ご来店のお客様から）
- 3件のレビューカード
  - Googleマップ風のスター評価 + 一言コメント + 名前（匿名可）

### 8. Reserve（ご予約）
- 「特別な夜を、ご一緒に。」
- ご予約方法: 電話予約 / ネット予約（[placeholder]）
- 営業時間・定休日
- 「※完全予約制・2名様〜承ります」

### 9. Access
- 住所・最寄り駅・電話番号（[placeholder]）
- Google Maps 埋め込み
- 「地下鉄〇〇駅 徒歩3分」など

### 10. Footer
- ロゴ・コピーライト・SNS（Instagram / [placeholder]）

## Astro 設計方針

- Astro + Tailwind CSS（`@astrojs/tailwind`）
- `.astro` コンポーネントでセクション分割
- タブ切り替え（Menu）のみ React Island として組み込み（`client:load`）
- `<Image>` コンポーネントで画像最適化（`@astrojs/image`）
- デプロイ: Vercel or Netlify（Static）

## アニメーション方針

- Astro の特性を活かし、基本は CSS アニメーション
- スクロール連動: CSS `@keyframes` + `IntersectionObserver`（Vanilla JS）
- Hero: テキストのフェードアップ（CSS animation）
- Gallery: ホバーでオーバーレイ表示（CSS transition）
- スライダー: Swiper.js を使用

## Unsplash 検索キーワード（画像取得用）

- Hero: `italian restaurant dark moody food`
- Story: `chef cooking restaurant kitchen`
- Menu: `pasta handmade`, `italian food plating`, `risotto elegant`, `tiramisu dessert`
- Gallery: `fine dining food photography`, `italian cuisine`
- Space: `restaurant interior elegant dark`
- Wine: `wine cellar italian`

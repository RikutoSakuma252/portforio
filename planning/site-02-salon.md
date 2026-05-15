# Site 02 - atelier BLANC

## 基本情報

| 項目 | 内容 |
|------|------|
| サイト名 | atelier BLANC（アトリエ ブラン） |
| 業種 | ヘアサロン LP |
| 技術スタック | Nuxt.js (Vue 3) + Tailwind CSS |
| 制作意図 | Nuxt.js / Vue 3 での SSG・コンポーネント設計を示す |
| カラーコンセプト | オフホワイト・ベージュ・チャコールグレー |

## コンセプト

> 「あなたらしさを、解放する場所。」

都内の閑静なエリアにある完全予約制のプライベートサロン。
トレンドに流されず、一人ひとりの骨格・ライフスタイルに合ったスタイルを提案。
エレガントでミニマルなデザインでブランドの世界観を表現する。

## ターゲット

- 20〜40代の女性
- 「自分に合ったスタイル」を追求したい人
- 落ち着いた雰囲気のサロンを求めている人

## カラーパレット

| 役割 | カラーコード | 用途 |
|------|------------|------|
| Background | `#faf9f7` | ページ背景 |
| Primary | `#2d2d2d` | 見出し・メインテキスト |
| Accent | `#b8a99a` | ボタン・ライン・アクセント |
| Light | `#ede9e4` | カード背景・セクション背景 |
| White | `#ffffff` | カード・モーダル |

## フォント方針

- 見出し: `Cormorant Garamond`（Google Fonts）- 上品・クラシック
- サブ見出し: `Josefin Sans`（Google Fonts）- スリムでモダン
- 本文: `Noto Sans JP`（Google Fonts）

## セクション構成

### 1. Hero
- 左半分: テキスト（キャッチコピー・CTA）
- 右半分: 縦長の美容師 or ヘアスタイル画像
- キャッチコピー: 「あなたらしさを、解放する場所。」
- サブコピー: 「骨格・ライフスタイルに寄り添う、完全プライベートサロン。」
- CTAボタン: 「ご予約はこちら」→ #reserve

### 2. Concept
- センター寄せの大きなテキストブロック
- 「atelier BLANCは、あなた一人のために存在するプライベートサロンです。」
- 「トレンドではなく、あなたの魅力を最大限に引き出すスタイルをご提案します。」
- 装飾的な横ライン・細いボーダーで上品さを演出

### 3. Service（メニュー）
- カード形式 4種
  - カット / ¥8,800〜
  - カラー / ¥12,100〜
  - パーマ / ¥14,300〜
  - トリートメント / ¥5,500〜
- 各カード: サービス名・価格・所要時間・一言説明
- ホバーで背景色変化

### 4. Works（施術実績）
- ビフォーアフター or スタイルギャラリー
- Masonry レイアウト or 均等グリッド（2〜3列）
- 6〜8枚のスタイル写真

### 5. Stylist
- スタイリスト紹介（1〜2名）
- 写真・名前・経歴・得意なスタイル
  - 佐々木 麻衣 / 担当: カット・カラー / 経歴: [placeholder]
  - 田中 理沙 / 担当: パーマ・トリートメント / 経歴: [placeholder]

### 6. Flow（ご来店の流れ）
- 横並び4ステップ（番号付き）
  1. ご予約（LINE or 電話）
  2. カウンセリング（ご来店後、お話を丁寧に伺います）
  3. 施術（完全個室でリラックスして）
  4. アフターフォロー（ホームケアのアドバイスも）

### 7. Reserve（予約）
- 大きなCTAセクション
- 「ご予約・お問い合わせ」
- LINEボタン / 電話番号 → [placeholder]
- 「初回限定 カット20%OFF」などオファーを入れてもOK

### 8. Access
- サロン情報（住所・営業時間・定休日）
- 住所: 東京都渋谷区X-X-X（[placeholder]）
- 営業: 10:00 - 20:00（火曜定休）

### 9. Footer
- ロゴ・コピーライト・SNSリンク（Instagram / [placeholder]）

## Nuxt.js 設計方針

- SSG（`nuxt generate`）でビルド
- コンポーネント分割: セクションごとに1コンポーネント
- `useHead` でメタ情報管理
- スクロールアニメーション: `@vueuse/core` の `useIntersectionObserver` 活用

## アニメーション方針

- Hero: ページロード時にテキストフェードイン（Vue の `onMounted` + CSS transition）
- セクション: スクロールで下からフェードイン
- Service カード: ホバーで背景色トランジション
- Works ギャラリー: ホバーでオーバーレイ表示

## Unsplash 検索キーワード（画像取得用）

- Hero: `hair salon minimalist elegant`
- Concept: `luxury beauty interior`
- Works: `hair color blonde`, `bob haircut`, `hair style women`
- Stylist: `hairdresser portrait professional`
- Access: `salon exterior elegant`

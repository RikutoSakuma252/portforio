import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Flowly — チームの「当たり前」を、もっとスマートに。',
  description: '業務フロー管理SaaS。タスク管理・承認フロー・チームチャットをFlowly一つに集約。導入企業の87%が業務効率30%改善。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

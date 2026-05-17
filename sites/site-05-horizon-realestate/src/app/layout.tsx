import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'HORIZON不動産 | 地域密着の不動産会社',
  description: '地域に根ざして20年。あなたの大切な住まい探しを、丁寧にサポートします。東京西部・神奈川エリアを中心に、売買・賃貸の不動産をご紹介します。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

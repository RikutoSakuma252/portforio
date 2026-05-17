const footerLinks = {
  プロダクト: ['機能', '料金', '導入事例', 'ロードマップ', 'リリースノート'],
  会社: ['会社概要', 'ブログ', '採用情報', 'プレス'],
  サポート: ['ヘルプセンター', 'APIドキュメント', 'ステータス', 'お問い合わせ'],
  法的: ['プライバシーポリシー', '利用規約', '特定商取引法に基づく表記', 'セキュリティ'],
};

export default function Footer() {
  return (
    <footer className="bg-fl-primary text-white/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-fl-brand to-fl-accent flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 7.5L6 11.5L13 3.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">Flowly</span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-[200px]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              チームの業務フローを、もっとスマートに。
            </p>
            {/* SNS */}
            <div className="flex items-center gap-3 mt-6">
              {['X', 'In', 'fb'].map((sns) => (
                <a
                  key={sns}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {sns}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs hover:text-white transition-colors"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            &copy; 2025 Flowly, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>全システム正常稼働中</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

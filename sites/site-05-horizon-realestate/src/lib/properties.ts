export interface Property {
  id: string;
  title: string;
  location: string;
  area: string;
  price: number; // 万円
  type: '一戸建て' | 'マンション' | '土地';
  layout: string;
  size: number; // m²
  builtYear: number;
  station: string;
  images: string[];
  description: string;
  features: string[];
  recommended?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: '碑文谷 閑静な住宅街の一戸建て',
    location: '東京都目黒区碑文谷4丁目',
    area: '目黒区',
    price: 6800,
    type: '一戸建て',
    layout: '4LDK',
    size: 112.5,
    builtYear: 2018,
    station: '東急東横線 学芸大学駅 徒歩8分',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80&fit=crop',
    ],
    description: '閑静な住宅街に佇む2018年築の一戸建て。4LDKのゆとりある間取りに、南向きの開放的なリビングダイニング。シンプルモダンな外観と機能的な室内設計が調和しています。大型スーパーや公園も近く、ファミリー層に最適な環境です。オール電化・床暖房完備で、快適な暮らしをサポートします。',
    features: ['南向き', '駐車場あり', '庭付き', 'システムキッチン', '床暖房', 'オール電化'],
    recommended: true,
  },
  {
    id: '2',
    title: '代々木上原 駅近リノベーションマンション',
    location: '東京都渋谷区西原1丁目',
    area: '渋谷区',
    price: 4500,
    type: 'マンション',
    layout: '2LDK',
    size: 68.2,
    builtYear: 2010,
    station: '小田急線 代々木上原駅 徒歩3分',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fit=crop',
    ],
    description: '代々木上原駅から徒歩3分の好立地。全面リノベーション済みで、スタイリッシュな内装と最新設備が魅力。コンクリート打ちっぱなし風のデザインが印象的で、都市生活を満喫できる住まいです。',
    features: ['駅徒歩3分', 'フルリノベ済み', '宅配ボックス', '角部屋', 'バルコニー南向き'],
    recommended: true,
  },
  {
    id: '3',
    title: '成城学園前 大型邸宅（庭付き）',
    location: '東京都世田谷区成城2丁目',
    area: '世田谷区',
    price: 9800,
    type: '一戸建て',
    layout: '5LDK',
    size: 158.3,
    builtYear: 2015,
    station: '小田急線 成城学園前駅 徒歩5分',
    images: [
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80&fit=crop',
    ],
    description: '成城の高級住宅街に位置する5LDKの大型邸宅。広々とした庭と充実した設備で豊かな暮らしを実現。書斎やホームシアタールームも備えた、こだわりの住空間です。',
    features: ['大型庭付き', 'ホームシアター', '書斎', '2台分駐車場', '床暖房全室', 'ビルトインガレージ'],
    recommended: false,
  },
  {
    id: '4',
    title: '中目黒 デザイナーズマンション',
    location: '東京都目黒区上目黒2丁目',
    area: '目黒区',
    price: 3800,
    type: 'マンション',
    layout: '1LDK+S',
    size: 55.7,
    builtYear: 2020,
    station: '東急東横線 中目黒駅 徒歩6分',
    images: [
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&fit=crop',
    ],
    description: '目黒川沿いの人気エリア、中目黒駅から徒歩6分。2020年築のデザイナーズマンション。スタディルーム付きで在宅ワークにも対応。おしゃれな内装と高い収納力が魅力です。',
    features: ['スタディコーナー', '2020年築', 'ディスポーザー', '24時間ゴミ出し可', '宅配ボックス'],
    recommended: true,
  },
  {
    id: '5',
    title: '国分寺 庭付き新築一戸建て',
    location: '東京都国分寺市本多1丁目',
    area: '国分寺市',
    price: 4200,
    type: '一戸建て',
    layout: '4LDK',
    size: 125.0,
    builtYear: 2024,
    station: 'JR中央線 国分寺駅 徒歩12分',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fit=crop',
    ],
    description: '2024年新築一戸建て。広々とした庭でお子様も安心して遊べる環境。ZEH基準の省エネ住宅で、光熱費を抑えた快適な暮らしが実現できます。',
    features: ['新築2024年', '庭付き', 'ZEH基準', 'オール電化', '太陽光発電', '駐車場2台'],
    recommended: false,
  },
  {
    id: '6',
    title: '吉祥寺 駅近新築マンション',
    location: '東京都武蔵野市吉祥寺本町2丁目',
    area: '武蔵野市',
    price: 5600,
    type: 'マンション',
    layout: '3LDK',
    size: 82.4,
    builtYear: 2023,
    station: 'JR中央線 吉祥寺駅 徒歩7分',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80&fit=crop',
    ],
    description: '人気の吉祥寺エリア、駅から徒歩7分の新築マンション。3LDKのゆとりある間取り。高層階からの眺望が素晴らしく、都市の景色を毎日楽しめます。',
    features: ['新築2023年', '眺望良好', 'ディスポーザー', 'オートロック', '宅配ボックス', '自走式駐車場'],
    recommended: false,
  },
  {
    id: '7',
    title: '三鷹 緑豊かな住宅街の一戸建て',
    location: '東京都三鷹市下連雀4丁目',
    area: '三鷹市',
    price: 5100,
    type: '一戸建て',
    layout: '4LDK',
    size: 118.6,
    builtYear: 2016,
    station: 'JR中央線 三鷹駅 徒歩10分',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&fit=crop',
    ],
    description: '緑豊かな三鷹の住宅街に佇む一戸建て。落ち着いた環境と充実した室内設備が魅力。スーパーや学校も近く、ファミリーに最適なロケーションです。',
    features: ['南西角地', '床暖房', '駐車場', '収納豊富', 'ウッドデッキ', 'リフォーム済み'],
    recommended: false,
  },
  {
    id: '8',
    title: '自由が丘 南向き高層マンション',
    location: '東京都目黒区自由が丘1丁目',
    area: '目黒区',
    price: 6200,
    type: 'マンション',
    layout: '3LDK',
    size: 95.8,
    builtYear: 2019,
    station: '東急東横線 自由が丘駅 徒歩4分',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&fit=crop',
    ],
    description: '人気の自由が丘エリア、駅徒歩4分の高層マンション。南向きの明るい室内と充実した共用施設が魅力。コンシェルジュサービス付きで快適な生活をサポートします。',
    features: ['南向き', 'コンシェルジュ', '24時間セキュリティ', 'フィットネス', '宅配ボックス', 'ゲストルーム'],
    recommended: false,
  },
  {
    id: '9',
    title: '武蔵小杉 タワーマンション高層階',
    location: '神奈川県川崎市中原区新丸子東3丁目',
    area: '川崎市',
    price: 7800,
    type: 'マンション',
    layout: '3LDK',
    size: 88.5,
    builtYear: 2021,
    station: 'JR南武線 武蔵小杉駅 徒歩2分',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80&fit=crop',
    ],
    description: '武蔵小杉のタワーマンション高層階。都市の全景を望む眺望と充実した共用施設が自慢。複数路線利用可能で都内主要駅へのアクセス抜群です。',
    features: ['高層階', '夜景一望', '駅徒歩2分', 'ラウンジ', 'スカイデッキ', 'コンシェルジュ'],
    recommended: false,
  },
  {
    id: '10',
    title: '二子玉川 川沿い邸宅マンション',
    location: '東京都世田谷区玉川1丁目',
    area: '世田谷区',
    price: 8500,
    type: 'マンション',
    layout: '4LDK',
    size: 110.3,
    builtYear: 2022,
    station: '東急田園都市線 二子玉川駅 徒歩5分',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80&fit=crop',
    ],
    description: '多摩川を望む邸宅型マンション。4LDKのゆとりある居住空間と上質な内装材が高い居住性を実現。二子玉川の豊かな自然環境と都市の利便性を両立しています。',
    features: ['リバービュー', '4LDK', '大型バルコニー', 'ビルトインガレージ', 'ウォークインクローゼット', '床暖房全室'],
    recommended: true,
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.recommended);
}

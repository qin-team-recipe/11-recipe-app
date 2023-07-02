import { Chef } from '@/app/_types';

export const dummyChefList: Chef[] = [
  {
    id: '1234',
    userId: '5678',
    role: 'CHEF',
    name: '山田太郎',
    profile: '美食に情熱を持つ経験豊富なシェフです。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link1',
        siteType: 'TWITTER',
        chefId: '1234',
        siteName: 'Twitter',
        url: 'https://twitter.com/johndoe',
        accountName: 'johndoe',
      },
      // Add more links if needed
    ],
    numFollows: 100,
    recipes: [],
    numRecipes: 0,
  },
  {
    id: '5678',
    userId: '9101',
    role: 'CHEF',
    name: '佐藤花子',
    profile: '地元の伝統料理にこだわりを持つシェフです。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link2',
        siteType: 'INSTAGRAM',
        chefId: '5678',
        siteName: 'Instagram',
        url: 'https://instagram.com/hanakosato',
        accountName: 'hanakosato',
      },
      // Add more links if needed
    ],
    numFollows: 200,
    recipes: [],
    numRecipes: 0,
  },
  {
    id: '2345',
    userId: '9102',
    role: 'CHEF',
    name: '高橋健太',
    profile: 'フレンチ料理のスペシャリストです。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link3',
        siteType: 'FACEBOOK',
        chefId: '2345',
        siteName: 'Facebook',
        url: 'https://facebook.com/kentakahashi',
        accountName: 'kentakahashi',
      },
      // Add more links if needed
    ],
    numFollows: 150,
    recipes: [],
    numRecipes: 0,
  },
  {
    id: '3456',
    userId: '9103',
    role: 'CHEF',
    name: '田中美香',
    profile: 'ベジタリアン料理のアイデアを提供するシェフです。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link4',
        siteType: 'YOUTUBE',
        chefId: '3456',
        siteName: 'YouTube',
        url: 'https://youtube.com/mikatanaka',
        accountName: 'mikatanaka',
      },
      // Add more links if needed
    ],
    numFollows: 300,
    recipes: [],
    numRecipes: 0,
  },
  {
    id: '4567',
    userId: '9104',
    role: 'CHEF',
    name: '伊藤雅子',
    profile: 'アジア料理のエキスパートです。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link5',
        siteType: 'TIKTOK',
        chefId: '4567',
        siteName: 'TikTok',
        url: 'https://tiktok.com/masakoito',
        accountName: 'masakoito',
      },
      // Add more links if needed
    ],
    numFollows: 250,
    recipes: [],
    numRecipes: 0,
  },
  {
    id: '5678',
    userId: '9105',
    role: 'CHEF',
    name: '佐々木大輔',
    profile: 'ステーキ職人の料理人です。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link6',
        siteType: 'BLOG',
        chefId: '5678',
        siteName: 'ブログ',
        url: 'https://sasaki-daisuke.com',
      },
      // Add more links if needed
    ],
    numFollows: 180,
    recipes: [],
    numRecipes: 0,
  },
  {
    id: '6789',
    userId: '9106',
    role: 'CHEF',
    name: '木村さやか',
    profile: '和食の伝統と革新を融合させる料理人です。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link7',
        siteType: 'INSTAGRAM',
        chefId: '6789',
        siteName: 'Instagram',
        url: 'https://instagram.com/sayakakimura',
        accountName: 'sayakakimura',
      },
      // Add more links if needed
    ],
    numFollows: 120,
    recipes: [],
    numRecipes: 0,
  },
  {
    id: '7890',
    userId: '9107',
    role: 'CHEF',
    name: '中村健二',
    profile: 'イタリアン料理の真髄を追求するシェフです。',
    imageUrl: '/assets/dummyImage_200_200.png',
    links: [
      {
        id: 'link8',
        siteType: 'BLOG',
        chefId: '7890',
        siteName: 'ブログ',
        url: 'https://kenjinakamura.com',
      },
      // Add more links if needed
    ],
    numFollows: 220,
    recipes: [],
    numRecipes: 0,
  },
];

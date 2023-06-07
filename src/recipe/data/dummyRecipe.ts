import { Recipe } from '@/recipe/types/Recipe';

// 日本語でダミーレシピを作成
export const dummyRecipeList: Recipe[] = [
  {
    id: '1',
    ownerId: '1',
    name: 'ハンバーグハンバーグハンバーグハンバーグハンバーグハンバーグハンバーグハンバーグ',
    description:
      'おいしいハンバーグの作り方おいしいハンバーグの作り方おいしいハンバーグの作り方おいしいハンバーグの作り方おいしいハンバーグの作り方おいしいハンバーグの作り方',
    ingredients: [
      {
        name: '牛ひき肉',
        description: '300g',
      },
      {
        name: '玉ねぎ',
        description: '1/2個',
      },
      {
        name: 'パン粉',
        description: '大さじ1',
      },
      {
        name: '牛乳',
        description: '大さじ1',
      },
      {
        name: '卵',
        description: '1個',
      },
      {
        name: '塩',
        description: '小さじ1/2',
      },
      {
        name: 'こしょう',
        description: '少々',
      },
    ],
    instructions: [
      {
        title: '1. 材料を混ぜる',
        description:
          'ボウルに牛ひき肉、玉ねぎ、パン粉、牛乳、卵、塩、こしょうを入れてよく混ぜる',
      },
      {
        title: '2. 形を整える',
        description: '1のボウルの中身を手でこねて、ハンバーグの形に整える',
      },
      {
        title: '3. 焼く',
        description: 'フライパンに油をひいて、2のハンバーグを焼く',
      },
    ],
    image: '/assets/dummyImage_200_200.png',
    isPublic: true,
    numLikes: 3245,
    numServings: 2,
    links: ['https://www.youtube.com/dummy', 'https://www.google.com/dummy'],
  },
  {
    id: '2',
    ownerId: '1',
    name: 'カレー',
    description: 'おいしいカレーの作り方',
    ingredients: [
      {
        name: '玉ねぎ',
        description: '1個',
      },
      {
        name: 'にんじん',
        description: '1本',
      },
      {
        name: 'じゃがいも',
        description: '2個',
      },
      {
        name: '豚肉',
        description: '200g',
      },
      {
        name: 'カレールー',
        description: '1箱',
      },
      {
        name: '水',
        description: '500ml',
      },
    ],
    instructions: [
      {
        title: '1. 材料を切る',
        description: '玉ねぎ、にんじん、じゃがいもを切る',
      },
      {
        title: '2. 焼く',
        description: 'フライパンに油をひいて、豚肉を焼く',
      },
      {
        title: '3. 煮る',
        description: '鍋に水、1の材料、2の豚肉を入れて煮る',
      },
      {
        title: '4. カレールーを入れる',
        description: '3にカレールーを入れて溶かす',
      },
      {
        title: '5. 煮る',
        description: '4を煮る',
      },
    ],
    image: '/assets/dummyImage_200_200.png',
    isPublic: true,
    numLikes: 0,
    numServings: 4,
    links: ['https://www.youtube.com/dummy', 'https://www.google.com/dummy'],
  },
  {
    id: '3',
    ownerId: '1',
    name: 'オムライス',
    description: 'おいしいオムライスの作り方',
    ingredients: [
      {
        name: '玉ねぎ',
        description: '1個',
      },
      {
        name: 'にんじん',
        description: '1本',
      },
      {
        name: 'じゃがいも',

        description: '2個',
      },
      {
        name: '豚肉',
        description: '200g',
      },
    ],
    instructions: [
      {
        title: '1. 材料を切る',
        description: '玉ねぎ、にんじん、じゃがいもを切る',
      },
      {
        title: '2. 焼く',
        description: 'フライパンに油をひいて、豚肉を焼く',
      },
      {
        title: '3. 煮る',
        description: '鍋に水、1の材料、2の豚肉を入れて煮る',
      },
      {
        title: '4. カレールーを入れる',
        description: '3にカレールーを入れて溶かす',
      },
      {
        title: '5. 煮る',
        description: '4を煮る',
      },
    ],
    image: '/assets/dummyImage_200_200.png',
    isPublic: true,
    numLikes: 0,
    numServings: 4,
    links: ['https://www.youtube.com/dummy', 'https://www.google.com/dummy'],
  },
  {
    id: '4',
    ownerId: '1',
    name: 'グラタン',
    description: 'おいしいグラタンの作り方',
    ingredients: [
      {
        name: '玉ねぎ',
        description: '1個',
      },
      {
        name: 'にんじん',
        description: '1本',
      },
      {
        name: 'じゃがいも',

        description: '2個',
      },
      {
        name: '豚肉',
        description: '200g',
      },
    ],
    instructions: [
      {
        title: '1. 材料を切る',
        description: '玉ねぎ、にんじん、じゃがいもを切る',
      },
      {
        title: '2. 焼く',
        description: 'フライパンに油をひいて、豚肉を焼く',
      },
      {
        title: '3. 煮る',
        description: '鍋に水、1の材料、2の豚肉を入れて煮る',
      },
      {
        title: '4. カレールーを入れる',
        description: '3にカレールーを入れて溶かす',
      },
      {
        title: '5. 煮る',
        description: '4を煮る',
      },
    ],
    image: '/assets/dummyImage_200_200.png',
    isPublic: true,
    numLikes: 214,
    numServings: 4,
    links: ['https://www.youtube.com/dummy'],
  },
];

import { dummyChefList as chefList } from '@/app/_data/dummyChef';
import { Recipe } from '@/app/_types';

// 日本語でダミーレシピを作成
export const dummyRecipeList: Recipe[] = [
  {
    id: '1',
    chef: chefList[0],
    chefId: chefList[0].id,
    name: '親子丼',
    overview: '鶏肉と卵が絶妙に絡み合った日本の代表的な丼物です。',
    servingSize: 2,
    status: 'PUBLISHED',
    numLikes: 10,
    recipeImages: [
      {
        id: '1',
        recipeId: '1',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '1',
        recipeId: '1',
        step: 1,
        description: '鶏肉を炒めます。',
      },
      {
        id: '2',
        recipeId: '1',
        step: 2,
        description: '玉ねぎを加えて炒めます。',
      },
      {
        id: '3',
        recipeId: '1',
        step: 3,
        description: '溶き卵を加え、全体を絡めて火を止めます。',
      },
    ],
    recipeIngredients: [
      {
        id: '1',
        recipeId: '1',
        text: '鶏もも肉 200g',
      },
      {
        id: '2',
        recipeId: '1',
        text: '玉ねぎ 1個',
      },
      {
        id: '3',
        recipeId: '1',
        text: '卵 3個',
      },
    ],
    isPublic: true,
  },
  {
    id: '2',
    chef: chefList[1],
    chefId: chefList[1].id,
    name: '長いレシピ名長いレシピ名長いレシピ名長いレシピ名',
    overview: '新鮮なネタを使った伝統的な日本の寿司です。',
    servingSize: 2,
    status: 'PUBLISHED',
    numLikes: 15,
    recipeImages: [
      {
        id: '2',
        recipeId: '2',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '4',
        recipeId: '2',
        step: 1,
        description: '酢飯を作ります。',
      },
      {
        id: '5',
        recipeId: '2',
        step: 2,
        description: 'ネタを切ります。',
      },
      {
        id: '6',
        recipeId: '2',
        step: 3,
        description: '酢飯にネタを載せて握ります。',
      },
    ],
    recipeIngredients: [
      {
        id: '4',
        recipeId: '2',
        text: '寿司飯 300g',
      },
      {
        id: '5',
        recipeId: '2',
        text: 'マグロ 100g',
      },
      {
        id: '6',
        recipeId: '2',
        text: 'サーモン 100g',
      },
    ],
    isPublic: true,
  },
  {
    id: '3',
    chef: chefList[2],
    chefId: chefList[2].id,
    name: '味噌汁',
    overview: '日本料理でよく食べられる伝統的なスープです。',
    servingSize: 4,
    status: 'PUBLISHED',
    numLikes: 8,
    recipeImages: [
      {
        id: '3',
        recipeId: '3',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '7',
        recipeId: '3',
        step: 1,
        description: '出汁を作ります。',
      },
      {
        id: '8',
        recipeId: '3',
        step: 2,
        description: '具材を切ります。',
      },
      {
        id: '9',
        recipeId: '3',
        step: 3,
        description: '出汁に具材を加えて煮込みます。',
      },
    ],
    recipeIngredients: [
      {
        id: '7',
        recipeId: '3',
        text: '出汁 500ml',
      },
      {
        id: '8',
        recipeId: '3',
        text: '豆腐 200g',
      },
      {
        id: '9',
        recipeId: '3',
        text: 'わかめ 10g',
      },
    ],
    isPublic: true,
  },
  {
    id: '4',
    chef: chefList[3],
    chefId: chefList[3].id,
    name: '天丼',
    overview: '海鮮や野菜を天ぷらにしてごはんの上に載せた定食です。',
    servingSize: 1,
    status: 'PUBLISHED',
    numLikes: 12,
    recipeImages: [
      {
        id: '4',
        recipeId: '4',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '10',
        recipeId: '4',
        step: 1,
        description: '天ぷらを揚げます。',
      },
      {
        id: '11',
        recipeId: '4',
        step: 2,
        description: 'ごはんを盛り付けます。',
      },
      {
        id: '12',
        recipeId: '4',
        step: 3,
        description: '天ぷらをごはんの上に載せます。',
      },
    ],
    recipeIngredients: [
      {
        id: '10',
        recipeId: '4',
        text: '海老天ぷら 3尾',
      },
      {
        id: '11',
        recipeId: '4',
        text: 'かぼちゃ天ぷら 2枚',
      },
      {
        id: '12',
        recipeId: '4',
        text: '人参天ぷら 2本',
      },
    ],
    isPublic: true,
  },
  {
    id: '5',
    chef: chefList[4],
    chefId: chefList[4].id,
    name: '焼きそば',
    overview: '中華料理の一つで、麺を焼いて野菜や肉と組み合わせた料理です。',
    servingSize: 2,
    status: 'PUBLISHED',
    numLikes: 20,
    recipeImages: [
      {
        id: '5',
        recipeId: '5',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '13',
        recipeId: '5',
        step: 1,
        description: '麺を茹でます。',
      },
      {
        id: '14',
        recipeId: '5',
        step: 2,
        description: '野菜と肉を炒めます。',
      },
      {
        id: '15',
        recipeId: '5',
        step: 3,
        description: '焼きそばソースと麺を加えて炒め合わせます。',
      },
    ],
    recipeIngredients: [
      {
        id: '13',
        recipeId: '5',
        text: '焼きそば麺 200g',
      },
      {
        id: '14',
        recipeId: '5',
        text: 'キャベツ 1/4個',
      },
      {
        id: '15',
        recipeId: '5',
        text: '豚バラ肉 100g',
      },
    ],
    isPublic: true,
  },
  {
    id: '6',
    chef: chefList[5],
    chefId: chefList[5].id,
    name: 'おでん',
    overview: '日本の代表的な冬の鍋料理で、野菜や魚を出汁で煮込んだ料理です。',
    servingSize: 4,
    status: 'PUBLISHED',
    numLikes: 18,
    recipeImages: [
      {
        id: '6',
        recipeId: '6',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '16',
        recipeId: '6',
        step: 1,
        description: '野菜と魚を切ります。',
      },
      {
        id: '17',
        recipeId: '6',
        step: 2,
        description: '出汁を作ります。',
      },
      {
        id: '18',
        recipeId: '6',
        step: 3,
        description: '野菜と魚を出汁で煮込みます。',
      },
    ],
    recipeIngredients: [
      {
        id: '16',
        recipeId: '6',
        text: '大根 1本',
      },
      {
        id: '17',
        recipeId: '6',
        text: 'こんにゃく 2枚',
      },
      {
        id: '18',
        recipeId: '6',
        text: 'ゆで卵 4個',
      },
    ],
    isPublic: true,
  },
  {
    id: '7',
    chef: chefList[6],
    chefId: chefList[6].id,
    name: 'カレーライス',
    overview: 'スパイスを使ったルーとごはんの組み合わせで、日本で人気のある料理です。',
    servingSize: 3,
    status: 'PUBLISHED',
    numLikes: 25,
    recipeImages: [
      {
        id: '7',
        recipeId: '7',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '19',
        recipeId: '7',
        step: 1,
        description: '具材を切ります。',
      },
      {
        id: '20',
        recipeId: '7',
        step: 2,
        description: 'ルーを作ります。',
      },
      {
        id: '21',
        recipeId: '7',
        step: 3,
        description: '具材とルーを煮込みます。',
      },
    ],
    recipeIngredients: [
      {
        id: '19',
        recipeId: '7',
        text: '牛肉 200g',
      },
      {
        id: '20',
        recipeId: '7',
        text: 'じゃがいも 2個',
      },
      {
        id: '21',
        recipeId: '7',
        text: 'にんじん 1本',
      },
    ],
    isPublic: true,
  },
  {
    id: '8',
    chef: chefList[7],
    chefId: chefList[7].id,
    name: '寿司',
    overview: '日本を代表する料理で、酢飯と生魚を組み合わせた巻き寿司や握り寿司があります。',
    servingSize: 2,
    status: 'PUBLISHED',
    numLikes: 30,
    recipeImages: [
      {
        id: '8',
        recipeId: '8',
        imageUrl: '/assets/dummyImage_200_200.png',
      },
      // Add more images if needed
    ],
    recipeSteps: [
      {
        id: '22',
        recipeId: '8',
        step: 1,
        description: '酢飯を作ります。',
      },
      {
        id: '23',
        recipeId: '8',
        step: 2,
        description: '生魚を切ります。',
      },
      {
        id: '24',
        recipeId: '8',
        step: 3,
        description: '酢飯に生魚をのせて巻き寿司や握り寿司を作ります。',
      },
    ],
    recipeIngredients: [
      {
        id: '22',
        recipeId: '8',
        text: '寿司飯 200g',
      },
      {
        id: '23',
        recipeId: '8',
        text: '鮭 100g',
      },
      {
        id: '24',
        recipeId: '8',
        text: 'マグロ 100g',
      },
    ],
    isPublic: true,
  },
];

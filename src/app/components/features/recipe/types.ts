export type Recipe = {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  image: string;
  numLikes: number;
  numServings: number;
  isPublic: boolean;
  links: string[];
}

export type Instruction = {
  title: string;
  description: string;
}

export type Ingredient = {
  name: string;
  description: string;
  // quantity: number;
  // unit: string;
}

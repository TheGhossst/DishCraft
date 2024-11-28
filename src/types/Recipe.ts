export interface Recipe {
    title: string;
    description: string;
    ingredients: {
      item: string;
      amount: string;
    }[];
  }
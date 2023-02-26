export enum CATEGORY_ACTION_TYPES {
  FETCH_CATEGORY_START = "categor/FETCH_CATEGORY_START",
  FETCH_CATEGORY_SUCCESS = "category/FETCH_CATEGORY_SUCCESS",
  FETCH_CATEGORY_FAILIURE = "category/FETCH_CATEGORY_FAILIURE",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
};

export type Category = {
  imageUrl: string;
  title: string;
  items: CategoryItem[];
};


export type CategoryMap = {
    [key:string]: CategoryItem[]
}
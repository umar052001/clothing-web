import { AnyAction } from "redux";
import {
  fetchCategoriesFaliure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./category.action";
import { Category } from "./category.types";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesFaliure.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }
  return state;
};

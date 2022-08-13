import {
  Action,
  ActionWithPayLoad,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer";
import { CATEGORY_ACTION_TYPES, Category } from "./category.types";

export type FetchCategoriesStart =
  Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START>;

export type FetchCategoriesSuccess = ActionWithPayLoad<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS,
  Category[]
>;

export type FetchCategoriesFaliure = ActionWithPayLoad<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILIURE,
  Error
>;
export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray)
);

export const fetchCategoriesFaliure = withMatcher(
  (error: Error): FetchCategoriesFaliure =>
    createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILIURE, error)
);

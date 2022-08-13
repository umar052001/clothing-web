import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFaliure,
} from "./category.action";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoryArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoryArray));
  } catch (error) {
    yield* put(fetchCategoriesFaliure(error as Error));
  }
}
export function* onFetchCategories() {
  yield* takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}

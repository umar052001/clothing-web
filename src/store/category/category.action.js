import { createAction } from "../../utils/reducer/reducer";
import { CATEGORY_ACTION_TYPES } from "./category.types";
export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray);

export const fetchCategoriesFaliure = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILIURE);

// When we worked with thunks
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoryArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriesSuccess(categoryArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFaliure(error));
//   }
// };

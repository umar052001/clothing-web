import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Carousel from "../../components/carousel/carousel.component";
import { fetchCategoriesStart } from "../../store/category/category.action";
import CategoryPreview from "../category-preview/category-preview";
import Category from "../category/category";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Fragment>
      <Carousel />
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </Fragment>
  );
};

export default Shop;

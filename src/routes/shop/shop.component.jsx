import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../category-preview/category-preview";
import Category from "../category/category";
import "./shop.styles.scss";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview/>}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
    );
};

export default Shop;

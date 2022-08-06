import {
  BackgroundImage,
  DirectoryBodyContainer,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const NavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={NavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

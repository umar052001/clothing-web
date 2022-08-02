import { Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import SignInAndSignUp from "./routes/sign-in-and-sign-up/sign-in-and-sign-up.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Route>
    </Routes>
  );
};

export default App;

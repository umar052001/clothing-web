import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useDispatch } from "react-redux/es/exports";
import {
  LogoContainer,
  LogoText,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles";
import { signOutStart } from "../../store/user/user.action";

// interface Location {
//   lat: number;
//   lng: number;
// }

// interface Address {
//   city: string;
//   country: string;
// }

// interface GeocodeResult {
//   types: string[];
//   long_name: string;
// }

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

  //Location APi handling

  // const [location, setLocation] = useState<Location>({ lat: 0, lng: 0 });
  // const [address, setAddress] = useState<Address>({ city: "", country: "" });

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     const lat = position.coords.latitude;
  //     const lng = position.coords.longitude;
  //     setLocation({ lat, lng });

  //     const response = await fetch(
  //       "https://geo-services-by-mvpc-com.p.rapidapi.com/sun_positions?location=43%2C5&date=2019-10-14",
  //       {
  //         method: "GET",
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "0eb6e51a59mshffb536c0892486bp196e76jsn1016f6912388",
  //           "X-RapidAPI-Host": "geo-services-by-mvpc-com.p.rapidapi.com",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     const cityComponent = data.results[0].address_components.find(
  //       (component: GeocodeResult) => component.types[0] === "locality"
  //     );
  //     const countryComponent = data.results[0].address_components.find(
  //       (component: GeocodeResult) => component.types[0] === "country"
  //     );
  //     const city = cityComponent ? cityComponent.long_name : "";
  //     const country = countryComponent ? countryComponent.long_name : "";
  //     setAddress({ city, country });
  //   });
  // }, []);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
          <LogoText>Kaaf Fabrics</LogoText>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/stats">STATS</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {/* if both are true return the last thing in this case CartDropdown */}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

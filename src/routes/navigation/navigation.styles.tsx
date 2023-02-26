import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  height: 55px;
  width: 100%;
  display: flex;
  margin: 10px 0px;
  justify-content: space-between;
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
  );
  border-radius: 25px;
  padding-right: 10px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
`;
export const LogoText = styled.span`
  margin: 3px;
  text-align: center;
  font-family: Cursive;
  font-size: 18px;
  margin-left: 10px;
`;
export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #ffff;
  font-family: sans-serif;
`;

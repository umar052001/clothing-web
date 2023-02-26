import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 25px;
  }

  button {
    width: 60%;
    opacity: 0.8;
    position: absolute;
    top: 255px;
    display: none;
    @media screen and (max-width: 800px) {
      display: flex;
      flex-wrap: wrap;
    }
    border: none;
    background-color: black;
    color: white;

    &:active {
      background-color: #4bb543;
      color: black;
    }
  }

  &:hover {
    img {
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 0.5;
      transition: 0.3s;
      box-shadow: 10px 2px 5px black;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  background-color: black;
  border-radius: 12px;
  padding: 10px;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.9);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.8);
`;
export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  font-family: helvetica;
  font-size: 15px;
`;

export const Price = styled.span`
  width: 10%;
  font-family: helvetica;
  font-size: 15px;
`;

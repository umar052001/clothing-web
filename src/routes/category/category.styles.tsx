import styled from "styled-components";
export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 20px;
`;

export const CategoryTitle = styled.h1`
  font-family: sans-serif;
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

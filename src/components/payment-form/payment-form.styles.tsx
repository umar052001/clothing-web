import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 500px;
  background-color: white;
  border-radius: 25px;
  padding: 10px 10px 5px;
  box-shadow: 5px 4px 2px rgba(0, 0, 0, 0.7);
`;
export const PaymentButton = styled(Button)`
    margin-left:auto;
    margin-top:30px;
`
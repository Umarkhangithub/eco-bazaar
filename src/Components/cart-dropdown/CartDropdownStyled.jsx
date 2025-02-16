import styled from "styled-components";
import Button from "../custom button/Button";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;
export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const ButtonContainer = styled(Button)`
  margin-top: auto;
`;

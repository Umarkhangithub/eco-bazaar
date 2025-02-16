import styled from "styled-components";
import Button from "../custom button/Button";

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;
export const ButtonContainer = styled(Button)`
 width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

`;


export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
      border: 2px solid orange;
    }

    ${ButtonContainer} {
      opacity: 0.85;
      display: flex;
    }
  }
`;



export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const PriceContainer = styled.span`
  width: 10%;
`;



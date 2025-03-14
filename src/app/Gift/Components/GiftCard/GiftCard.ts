import styled from "styled-components";

const GiftCard = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;

  img {
    width: 100%;
    border-radius: 8px;
  }

  h3 {
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: bold;
  }
`;

export default GiftCard;
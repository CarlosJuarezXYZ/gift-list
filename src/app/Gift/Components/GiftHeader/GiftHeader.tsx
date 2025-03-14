import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 420px; /* Altura del header */
  background-image: url("/public/photo-header.jpg");
  background-size: cover;
 background-position: center 25%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;

  /* Capa oscura para mejorar la legibilidad del texto */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Oscurece un poco la imagen */
  }

  h1 {
    font-size: 28px;
    font-weight: bold;
    z-index: 1;
  }

  @media (max-width: 768px) {
     width: 100%;
     height: 250px;
    h1 {
      font-size: 20px;
    }
  }
`;

const GiftHeader = () => {
  return (
    <HeaderContainer>
      <h1>Carlos & Carolina - Lista de regalos</h1>
    </HeaderContainer>
  );
};

export default GiftHeader;

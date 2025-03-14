import styled from "styled-components";

const MessageContainer = styled.div`
  max-width: 800px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #555;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const GiftMessage = () => {
  return (
    <MessageContainer>
      <h2>Gracias por ser parte de este momento especial</h2>
      <p>Hemos seleccionado estos obsequios con mucho cariño. Si deseas colaborar, elige el que más te guste y sigue las instrucciones. ¡Tu apoyo significa mucho para nosotros!</p>
    </MessageContainer>
  );
};

export default GiftMessage;

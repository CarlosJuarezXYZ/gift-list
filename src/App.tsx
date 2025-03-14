import { styled } from "styled-components";
import GiftList from "./app/Gift/Components/GifList/GiftList";
import GiftHeader from "./app/Gift/Components/GiftHeader/GiftHeader";
import GiftMessage from "./app/Gift/Components/GiftMessage/GiftMessage";
import Footer from "./app/Gift/Components/Footer/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f5f5;
  text-align: center;

  @media (max-width: 768px) {
    padding: 10px;
    height:100%;
  }
`;


function App() {
  return <Container>
    <GiftHeader/>
    <GiftMessage/>
    <GiftList/>
    <Footer/>
  </Container>;
}

export default App;

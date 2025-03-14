import { styled } from "styled-components";
import GiftCard from "../GiftCard/GiftCard";
import { GiftListStub } from "../../Stubs/GiftListStub";
import { useState } from "react";
import GiftFilter from "../GiftFilter/Giffilter";

// Estilos con styled-components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GiftGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
  flex: 1;
  max-width: 800px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const GiftList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredGifts = selectedCategory
    ? GiftListStub.filter((gift) => gift.category === selectedCategory)
    : GiftListStub;

  return (
      <Container>
        <GiftFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <GiftGrid>
          {filteredGifts.map((gift) => (
            <GiftCard key={gift.id}>
              <img src={gift.image} alt={gift.name} />
              <h3>{gift.name}</h3>
              <p>{gift.price}</p>
            </GiftCard>
          ))}
        </GiftGrid>
      </Container>
  );
};

export default GiftList;

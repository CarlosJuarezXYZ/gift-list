import styled from "styled-components";

interface GiftFilterProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap; /* Permite que los botones se acomoden en varias líneas */
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow-x: auto; /* Permite desplazamiento horizontal si hay muchos filtros */
  }
`;

const FilterButton = styled.button<{ isSelected: boolean }>`
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.primary : theme.colors.cardBackground};
  color: ${({ isSelected, theme }) =>
    isSelected ? "#fff" : theme.colors.text};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const categories = ["Todos", "Dormitorio", "Cocina", "Electrodomésticos"];

const GiftFilter = ({
  selectedCategory,
  setSelectedCategory,
}: GiftFilterProps) => {
  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterButton
          key={category}
          isSelected={
            selectedCategory === category ||
            (category === "Todos" && !selectedCategory)
          }
          onClick={() =>
            setSelectedCategory(category === "Todos" ? null : category)
          }
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default GiftFilter;

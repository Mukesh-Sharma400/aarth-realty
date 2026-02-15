import styled from "styled-components";

export const SearchBar = ({
  category,
  setCategory,
  type,
  setType,
  budget,
  setBudget,
  handleClearFilters,
}) => {
  return (
    <SearchWrapper>
      {/* Buy / Rent */}
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Category</option>
        <option value="Buy">Buy</option>
        <option value="Rent">Rent</option>
      </Select>

      {/* Property Type */}
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Property Type</option>
        <option value="1 BHK">1 BHK</option>
        <option value="2 BHK">2 BHK</option>
        <option value="3 BHK">3 BHK</option>
        <option value="Office">Office</option>
      </Select>

      {/* Budget */}
      <Input
        type="number"
        placeholder="Max Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <SlantedPrimaryButton onClick={handleClearFilters}>
        Clear
      </SlantedPrimaryButton>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  height: 50px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid #e5e7eb !important;
  font-size: 14px;
  transition: all 0.5s ease-in-out;
`;

const Select = styled.select`
  height: 50px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  transition: all 0.5s ease-in-out;
`;

const SlantedPrimaryButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #cc1e15, #c01209ff);
  border: none;
  cursor: pointer;

  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);

  position: relative;
  transition: transform 0.3s ease;
  overflow: visible;

  &:hover {
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    left: 1%;
    bottom: 1px;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition:
      width 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  &:hover::after {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

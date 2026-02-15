import styled from "styled-components";

export const SearchBar = () => {
  return (
    <SearchWrapper>
      <Input placeholder="Search here..." />
      <Select>
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>House</option>
      </Select>
      <Input placeholder="Max Budget" />
      <SlantedPrimaryButton>Search</SlantedPrimaryButton>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr auto;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 700px) {
    display: none;
  }

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
  width: 200px;
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

  @media (max-width: 1024px) {
    width: 170px;
    height: 40px;
    font-size: 15px;
  }

  @media (max-width: 426px) {
    width: 130px;
    height: 34px;
    font-size: 14px;
  }
`;

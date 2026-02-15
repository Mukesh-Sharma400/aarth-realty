import styled from "styled-components";

export const SectionDivider = () => {
  return <DisplayWrapper />;
};

const DisplayWrapper = styled.div`
  width: 90%;
  height: 1.5px;
  margin: 0 auto;
  background-color: #efefef;
  transition: all 0.5s ease-in-out;
`;

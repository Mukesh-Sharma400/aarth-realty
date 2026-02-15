import CountUp from "react-countup";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Counting = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const sectionData = {
    clients: 20,
    sales: 30,
    clientSatisfaction: 99,
    years: currentYear - 2001,
  };

  return (
    <DisplayWrapper ref={ref}>
      <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.clients} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>Clients</Label>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.sales} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>Sales</Label>
      </ContentWrapper>
      <Divider />
      {/* <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.clientSatisfaction} duration={5} />
          ) : (
            "0"
          )}
          %
        </Number>
        <Label>Client Satisfaction</Label>
      </ContentWrapper>
      <Divider /> */}
      <ContentWrapper>
        <Number data-aos="fade-up">
          {isVisible ? (
            <CountUp start={0} end={sectionData.years} duration={5} />
          ) : (
            "0"
          )}
          +
        </Number>
        <Label>Years</Label>
      </ContentWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 0;
  background-color: white;
  transition: all 0.5s ease-in-out;
`;

const Divider = styled.div`
  width: 1.5px;
  height: 100px;
  background-color: #efefef;
  transition: all 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in-out;
`;

const Number = styled.p`
  font-size: 40px;
  color: #cc1e15;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 27px;
  }
  @media (max-width: 321px) {
    font-size: 25px;
  }
`;

const Label = styled.p`
  font-size: 20px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    font-size: 18px;
  }
  @media (max-width: 376px) {
    font-size: 16px;
  }
  @media (max-width: 321px) {
    font-size: 15px;
  }
`;

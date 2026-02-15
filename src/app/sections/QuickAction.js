import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import cta_bg from "../../../public/assets/cta_bg.jpg";

export const QuickAction = () => {
  const sectionData = {
    heading: "Let’s Help You Find the Right Home",
    description:
      "Tell us what you’re looking for and our team will guide you every step of the way—from shortlisting to final possession.",
  };

  return (
    <SectionWrapper>
      <CTASection>
        <Overlay />
        <Content data-aos="fade-up">
          <h2>{sectionData.heading}</h2>
          <p>{sectionData.description}</p>
          <SlantedPrimaryButton href="/contact">
            <span className="transition"></span>
            <span className="label">Get in Touch →</span>
          </SlantedPrimaryButton>
        </Content>
      </CTASection>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  width: 100%;
  padding: 50px 5%;
  background: #ffffff;
  transition: all 0.5s ease-in-out;
`;

const CTASection = styled.section`
  position: relative;
  height: 520px;
  width: 100%;
  background-image: url(${cta_bg.src});
  background-size: cover;
  background-position: center;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 520px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  transition: all 0.5s ease-in-out;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  padding: 10px;
  transition: all 0.5s ease-in-out;

  color: #fff;

  h2 {
    font-size: 55px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px !important;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }
`;

const SlantedPrimaryButton = styled.button`
  width: 200px;
  height: 44px;
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
`;

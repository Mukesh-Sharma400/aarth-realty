import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import agent1 from "../../../public/assets/agent1.jpg";
import agent2 from "../../../public/assets/agent2.jpg";
import agent3 from "../../../public/assets/agent3.jpg";
import agent4 from "../../../public/assets/agent4.jpg";
import backgroundImage from "../../../public/assets/hero-background.jpg";

export const Testimonials = () => {
  return (
    <TestimonialsSection>
      <SectionHeader>
        <SectionLabel>
          <span>TESTIMONIALS</span>
          <i />
        </SectionLabel>

        <SectionInfo>
          <h2>What Our Client Are Saying</h2>

          {/* <p>
            Comprehensive legal services, expertly delivered. We provide through
            support and guidance for all your legal matter, handled with utmost
            care.
          </p> */}
        </SectionInfo>
      </SectionHeader>

      <CardsWrapper>
        <TestimonialCard>
          <ImageBox data-aos="fade-left">
            <Image src={agent1} alt="" />
          </ImageBox>
          <Content>
            <span className="left-quote">“</span>
            <p>
              Aarth Realton communicated outstandingly, keeping us informed
              throughout our property search and sale. Their friendly approach
              made a stressful time manageable. Highly recommend!
            </p>
            <h4>- Yono Bakrie</h4>
            <span className="right-quote">“</span>
          </Content>
        </TestimonialCard>
      </CardsWrapper>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  width: 100%;
  padding: 50px 5%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: #ffffff;
  transition: all 0.5s ease-in-out;
`;

const SectionHeader = styled.div`
  // margin-bottom: 60px;
  transition: all 0.5s ease-in-out;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.5s ease-in-out;

  margin-bottom: 20px;

  span {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #cc1e15;
    text-transform: uppercase;
  }

  i {
    width: 60px;
    height: 1px;
    background-color: #cc1e15;
  }

  i {
    animation: expand 0.8s ease forwards;
  }

  @keyframes expand {
    from {
      width: 0;
    }
    to {
      width: 60px;
    }
  }
`;

const SectionInfo = styled.div`
  display: grid;
  // grid-template-columns: 1.5fr 1fr;
  align-items: center;
  gap: 40px;
  transition: all 0.5s ease-in-out;

  h2 {
    font-size: 36px;
    font-weight: 400;
    color: #111827;
    line-height: 1.2;
  }

  p {
    font-size: 15px;
    line-height: 1.7;
    color: #6b7280;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;

    h2 {
      font-size: 26px;
    }
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  transition: all 0.5s ease-in-out;
`;

const TestimonialCard = styled.div`
  min-width: 580px;
  display: flex;
  gap: 30px;
  padding: 30px;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  transition: all 0.5s ease-in-out;

  background: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 100%;
  }
`;

const ImageBox = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;
  transition: all 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  position: relative;
  transition: all 0.5s ease-in-out;

  .left-quote {
    font-size: 60px;
    color: #111827;
    line-height: 1;
  }

  .right-quote {
    position: absolute;
    bottom: 0;
    right: 0;
    rotate: 180deg;
    font-size: 60px;
    color: #111827;
    line-height: 1;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px !important;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
  }
`;

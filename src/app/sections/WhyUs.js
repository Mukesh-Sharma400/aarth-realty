import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const WhyUs = () => {
  const values = [
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in everything.",
      icon: <i className="bi bi-shield-check" />,
    },
    {
      title: "Client Focus",
      description: "Your needs always remain our highest priority.",
      icon: <i className="bi bi-person-check" />,
    },
    {
      title: "Innovation",
      description: "We leverage technology to enhance experiences.",
      icon: <i className="bi bi-lightbulb" />,
    },
    {
      title: "Community",
      description: "We actively support communities we serve.",
      icon: <i className="bi bi-building" />,
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionLabel>
          <span>Why Us</span>
          <i />
        </SectionLabel>

        <SectionInfo>
          <h2>What We Believe In</h2>
        </SectionInfo>
      </SectionHeader>
      <ValuesSection>
        <ValuesGrid>
          {values.map((item, index) => (
            <ValueCard key={index} data-aos="fade-up">
              <IconWrapper>{item.icon}</IconWrapper>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
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
  margin-bottom: 20px;
  transition: all 0.5s ease-in-out;

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
  transition: all 0.5s ease-in-out;

  gap: 40px;

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

const ValuesSection = styled.section`
  width: 100%;
  background: #ffffff;
  transition: all 0.5s ease-in-out;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 36px 28px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease-in-out;

  h4 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #cc1e15;
  }

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #6b7280;
  }

  &:hover {
    transform: translateY(-6px);
    border-bottom: 1px solid #cc1e15;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #cc1e15;
  transition: all 0.5s ease-in-out;
`;

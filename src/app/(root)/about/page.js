"use client";

import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { WhyUs } from "@/app/sections/WhyUs";
import BaseLayout from "../../components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";
import agent1 from "../../../../public/assets/agent1.jpg";
import aboutUs from "../../../../public/assets/real-aboutus.jpg";
import { SectionDivider } from "@/app/components/SectionDivider";
import missionImage from "../../../../public/assets/real-mission.jpeg";

export default function About() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pageHeader = {
    heading: "About",
    description:
      "We are a trusted real estate company focused on quality, transparency, and long-term value.\nHelping homebuyers and investors make confident property decisions.",
  };

  const sectionData0 = {
    heading: "Tannu Sharma",
    description:
      "Meet the driving force behind Aarth Realtor, Tannu  Sharma. With deep market knowledge and a strong commitment to transparency, he has built the company on trust, integrity, and long-term value. His practical approach and attention to detail ensure every client receives honest guidance and reliable real estate solutions.",
  };

  const sectionData1 = {
    smallHeading: "How we Started",
    heading: "Modern Living Thoughtfully Designed",
    description:
      "Founded in 2001, Aarth Realtor began with a simple vision—to make property buying and investing clear, reliable, and stress-free. From local home buyers to seasoned investors, we’ve grown by delivering genuine advice and dependable service across Navi Mumbai.",
  };

  const sectionData2 = {
    smallHeading: "What We Aim For",
    heading: "Our Mission",
    description:
      "Our mission is to help people find the right homes and investment opportunities with confidence. Through transparency, local expertise, and customer-first service, we strive to create long-term value for every client we work with.",
  };

  return (
    <BaseLayout>
      <PageHeader pageHeader={pageHeader} />
      <ContentWrapper>
        <SectionWrapper className="section-first">
          <RightSide data-aos={screenWidth > 768 ? "fade-left" : "fade-right"}>
            <SectionLabel>
              <span>{sectionData1.smallHeading}</span>
              <i />
            </SectionLabel>
            <SectionHeading>{sectionData1.heading}</SectionHeading>
            <SectionDescription>{sectionData1.description}</SectionDescription>
          </RightSide>
          <LeftSide>
            <SectionImage src={aboutUs} alt="" />
          </LeftSide>
        </SectionWrapper>
        <SectionWrapper className="section-second">
          <LeftSide>
            <SectionImage src={missionImage} alt="" />
          </LeftSide>
          <RightSide data-aos="fade-right">
            <SectionLabel>
              <span>{sectionData2.smallHeading}</span>
              <i />
            </SectionLabel>
            <SectionHeading>{sectionData2.heading}</SectionHeading>
            <SectionDescription>{sectionData2.description}</SectionDescription>
          </RightSide>
        </SectionWrapper>
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <OwnerSectionWrapper>
          <SectionLabel>
            <span>OUR Founder</span>
            <i />
          </SectionLabel>
          <SectionInfo>
            <h2>Meet the Person Behind</h2>
          </SectionInfo>
          <BigSectionWrapper>
            <OwnerImage src={agent1} alt="" data-aos="fade-up" />
            <div>
              <SectionHeading>{sectionData0.heading}</SectionHeading>
              <SectionDescription>
                {sectionData0.description}
              </SectionDescription>
            </div>
          </BigSectionWrapper>
        </OwnerSectionWrapper>
      </ContentWrapper>
    </BaseLayout>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const OwnerImage = styled(Image)`
  width: 250px;
  height: 250px;
  border-radius: 5%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 230px;
    height: 230px;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 550px) {
    padding: 40px 30px;
  }
  @media (max-width: 426px) {
    padding: 30px 20px;
  }
`;

const SectionImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 40px;
    height: fit-content;
  }
  @media (max-width: 550px) {
    padding: 40px 30px;
  }
  @media (max-width: 426px) {
    padding: 30px 20px;
  }
  @media (max-width: 376px) {
    gap: 30px;
  }
  @media (max-width: 321px) {
    gap: 25px;
  }
`;

const SmallHeading = styled.p`
  font-size: 20px;
  color: #cc1e15;
  text-transform: uppercase;
  letter-spacing: 2px;
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

const SectionHeading = styled.h1`
  font-size: 40px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const SectionDescription = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  color: grey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 376px) {
    font-size: 14px;
  }
`;

const BigSectionWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 100px;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  background: #fff;
  transition: all 0.5s ease-in-out;

  // background-image: repeating-linear-gradient(
  //   to right,
  //   #1d1d1d,
  //   #1d1d1d 0.5px,
  //   transparent 0.5px,
  //   transparent
  // );
  // background-size: 200px 200px;
  // background-color: #0c0e17;
  border-radius: 20px;

  ${SectionHeading} {
    margin-bottom: 0.5rem !important;
    color: #cc1e15;
  }

  @media (max-width: 1024px) {
    gap: 50px;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
    gap: 20px;
    flex-direction: column;

    ${SectionHeading} {
      margin-bottom: 1rem !important;
    }
  }
  @media (max-width: 550px) {
    margin: 0 10px;
  }
  @media (max-width: 426px) {
    margin: 0 0;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
  height: 500px;
  max-height: 500px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  // &.section-first {
  //   background-image: repeating-linear-gradient(
  //     to right,
  //     #1d1d1d,
  //     #1d1d1d 0.5px,
  //     transparent 0.5px,
  //     transparent
  //   );
  //   background-size: 200px 200px;
  //   background-color: #0c0e17;

  //   ${SmallHeading} {
  //     color: white;
  //   }
  //   ${SectionHeading} {
  //     color: white;
  //   }
  // }

  @media (max-width: 768px) {
    padding: 0;
    &.section-second {
      flex-direction: column-reverse;
    }
    flex-direction: column;
    height: 100%;
    max-height: unset;
  }
`;

const OwnerSectionWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;

  padding: 50px 5%;
`;

const SectionInfo = styled.div`
  display: grid;
  align-items: center;
  transition: all 0.5s ease-in-out;

  margin-bottom: 30px;

  h2 {
    font-size: 36px;
    font-weight: 400;
    color: #111827;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;

    h2 {
      font-size: 26px;
    }
  }
`;

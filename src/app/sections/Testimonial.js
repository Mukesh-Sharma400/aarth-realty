"use client";

import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import agent1 from "../../../public/assets/agent1.jpg";
import agent2 from "../../../public/assets/agent2.jpg";
import agent3 from "../../../public/assets/agent3.jpg";
import agent4 from "../../../public/assets/agent4.jpg";

export const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      id: 1,
      name: "Ashok Chaudhary",
      image: agent1,
      review:
        "Aarth Realton communicated outstandingly, keeping us informed throughout our property search and sale. Their friendly approach made a stressful time manageable. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Mehta",
      image: agent2,
      review:
        "Professional team with excellent market knowledge. They helped us find our dream home quickly and smoothly.",
      rating: 4,
    },
    {
      id: 3,
      name: "Rahul Verma",
      image: agent3,
      review:
        "Very responsive and transparent throughout the entire process. Truly reliable real estate experts.",
      rating: 5,
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      image: agent4,
      review:
        "Exceptional service and attention to detail. They handled everything efficiently and professionally.",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={i <= rating ? "bi bi-star-fill" : "bi bi-star"}
        ></i>,
      );
    }
    return stars;
  };

  return (
    <TestimonialsSection>
      <SectionHeader>
        <SectionLabel>
          <span>TESTIMONIALS</span>
          <i />
        </SectionLabel>

        <SectionInfo>
          <h2>What Our Client Are Saying</h2>
        </SectionInfo>
      </SectionHeader>

      <MySlider {...settings}>
        {testimonials.map((item) => (
          <TestimonialCard key={item.id}>
            <ImageBox>
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageBox>

            <Content>
              <span className="left-quote">“</span>

              <p>{item.review}</p>

              <Ratings>{renderStars(item.rating)}</Ratings>

              <h4>- {item.name}</h4>

              <span className="right-quote">”</span>
            </Content>
          </TestimonialCard>
        ))}
      </MySlider>
    </TestimonialsSection>
  );
};

const TestimonialsSection = styled.section`
  width: 100%;
  padding: 80px 5%;
  background: #ffffff;
`;

const SectionHeader = styled.div`
  margin-bottom: 50px;
`;

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
`;

const SectionInfo = styled.div`
  h2 {
    font-size: 36px;
    font-weight: 400;
    color: #111827;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 26px;
    }
  }
`;

const MySlider = styled(Slider)`
  .slick-slide {
    padding: 0 15px;
  }

  .slick-dots li button:before {
    color: #cc1e15;
  }
`;

const TestimonialCard = styled.div`
  display: flex !important;
  gap: 30px;
  padding: 30px;
  border-radius: 24px;
  border: 1px solid #e5e7eb;
  background: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 260px;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  position: relative;

  .left-quote {
    font-size: 60px;
    color: #111827;
    line-height: 1;
  }

  .right-quote {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 60px;
    color: #111827;
    line-height: 1;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Ratings = styled.div`
  display: flex;
  gap: 5px;
  font-size: 16px;
  color: #fbbc04;
  margin-bottom: 15px;
`;

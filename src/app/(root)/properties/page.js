"use client";

import Image from "next/image";
import styled from "styled-components";
import { useMemo, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { SearchBar } from "../../components/SearchBar";
import { PageHeader } from "@/app/components/PageHeader";
import oneBhkFlatBuy from "../../../../public/assets/1_BHK_Flat_Buy.jpg";
import oneBhkFlatRent from "../../../../public/assets/1_BHK_Flat_Rent.jpg";
import twoBhkFlatBuy from "../../../../public/assets/2_BHK_Flat_Buy.webp";
import twoBhkFlatRent from "../../../../public/assets/2_BHK_Flat_Rent.avif";
import threeBhkFlatBuy from "../../../../public/assets/3_BHK_Flat_Buy.jpg";
import threeBhkFlatRent from "../../../../public/assets/3_BHK_Flat_Rent.avif";
import officeBuy from "../../../../public/assets/Office_Buy.avif";
import officeRent from "../../../../public/assets/Office_Rent.jpg";

export default function Properties() {
  const phoneNumber = "+918976630666";

  const pageHeader = {
    heading: "Properties",
    description:
      "Explore verified residential and commercial properties across prime locations. Find homes and investments that match your needs, budget, and future plans.",
  };

  const properties = [
    {
      id: 1,
      type: "1 BHK",
      category: "Buy",
      price: 4000000,
      image: oneBhkFlatBuy,
    },
    {
      id: 2,
      type: "2 BHK",
      category: "Buy",
      price: 6000000,
      image: twoBhkFlatBuy,
    },
    {
      id: 3,
      type: "3 BHK",
      category: "Buy",
      price: 9000000,
      image: threeBhkFlatBuy,
    },
    {
      id: 4,
      type: "Office",
      category: "Buy",
      price: 10000000,
      image: officeBuy,
    },
    {
      id: 5,
      type: "1 BHK",
      category: "Rent",
      price: 17000,
      image: oneBhkFlatRent,
    },
    {
      id: 6,
      type: "2 BHK",
      category: "Rent",
      price: 60000,
      image: twoBhkFlatRent,
    },
    {
      id: 7,
      type: "3 BHK",
      category: "Rent",
      price: 90000,
      image: threeBhkFlatRent,
    },
    {
      id: 8,
      type: "Office",
      category: "Rent",
      price: 15000,
      image: officeRent,
    },
  ];
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      const matchCategory = category ? item.category === category : true;
      const matchType = type ? item.type === type : true;
      const matchBudget = budget ? item.price <= Number(budget) : true;

      return matchCategory && matchType && matchBudget;
    });
  }, [category, type, budget]);

  const handleClearFilters = () => {
    setCategory("");
    setType("");
    setBudget("");
  };

  const handleOpenDialer = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  return (
    <BaseLayout>
      <PageHeader pageHeader={pageHeader} />
      <SectionWrapper>
        <SearchBar
          category={category}
          setCategory={setCategory}
          type={type}
          setType={setType}
          budget={budget}
          setBudget={setBudget}
          handleClearFilters={handleClearFilters}
        />
        <CardsWrapper>
          {filteredProperties.map((item) => (
            <Card key={item.id} data-aos="fade-up">
              <ImageWrapper>
                <Image src={item.image} alt={item.type} />
              </ImageWrapper>
              <CardFooter>
                <div>
                  <h4>
                    {item.type} - {item.category}
                  </h4>
                  <span>Starting from ₹{item.price.toLocaleString()}</span>
                </div>
                <SlantedPrimaryButton onClick={handleOpenDialer}>
                  <span className="transition"></span>
                  <span className="label">Call Now →</span>
                </SlantedPrimaryButton>
              </CardFooter>
            </Card>
          ))}
        </CardsWrapper>
      </SectionWrapper>
    </BaseLayout>
  );
}

const SectionWrapper = styled.section`
  width: 100%;
  padding: 0px 5% 50px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: #ffffff;
  transition: all 0.5s ease-in-out;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-6px);
    box-shadow: none;
    border-bottom: 1.5px solid #cc1e15;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardFooter = styled.div`
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;

  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #111827;
  }

  span {
    font-size: 14px;
    color: #6b7280;
  }
`;

const SlantedPrimaryButton = styled.button`
  width: 120px;
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #cc1e15, #c01209ff);
  border: none;
  cursor: pointer;
  display: block;

  span {
    font-size: 14px;
    color: #fff;
  }

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

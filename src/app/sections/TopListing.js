import Image from "next/image";
import styled from "styled-components";
import oneBhkFlatBuy from "../../../public/assets/1_BHK_Flat_Buy.jpg";
import twoBhkFlatBuy from "../../../public/assets/2_BHK_Flat_Buy.webp";
import threeBhkFlatBuy from "../../../public/assets/3_BHK_Flat_Buy.jpg";

export const TopListing = () => {
  const phoneNumber = "+918976630666";

  const listings = [
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
  ];

  const handleOpenDialer = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionLabel>
          <span>PROPERTIES</span>
          <i />
        </SectionLabel>

        <SectionInfo>
          <h2>Find Home Listings in Your Area</h2>

          {/* <p>
            Consult with a real estate agent who has experience and in-depth
            knowledge of the market in your area. We are always here for you.
          </p> */}
        </SectionInfo>
      </SectionHeader>

      <CardsWrapper>
        {listings.map((item) => (
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

      <SectionFooter>
        <SlantedPrimaryButton href="/properties">
          <span className="transition"></span>
          <span className="label">View More →</span>
        </SlantedPrimaryButton>
      </SectionFooter>
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

const SectionFooter = styled.div`
  // margin: 40px 0px 40px;
  text-align: center;
  transition: all 0.5s ease-in-out;

  h2 {
    font-size: 32px;
    font-weight: 600;
    color: #1f2937;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 26px;
    }
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
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

const ArrowButton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #cc1e15;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cc1e15;
  font-size: 18px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #cc1e15;
    color: #fff;
  }
`;

const SlantedArrowButton = styled.div`
  width: 44px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #cc1e15, #c01209ff);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  position: relative;

  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);

  transition: transform 0.5s ease;
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
    width: 60%;
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

  clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);

  position: relative;
  transition: transform 0.3s ease;
  overflow: visible;

  span {
    font-size: 14px;
    color: #fff;
  }

  &:hover {
    transform: translateY(-2px);
  }

  /* Underline */
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

"use client";

import Image from "next/image";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Toast } from "@/app/components/Toast";
import BaseLayout from "../../components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";
import HeadOffice from "../../../../public/assets/head-office.jpg";

export default function Contact() {
  const form = useRef();
  const timeoutRef = useRef(null);
  const phoneNumber = "+918976630666";
  const emailAddress = "aarthrealtor@gmail.com";
  const officeAddress =
    "Shree Siddhivinayak CHS Pvt Ltd, Shop No. 02, Plot No. 31, Sector 24, Ulwe, Navi Mumbai - 410206";
  const [toast, setToast] = useState({ visible: false, message: "" });

  const showToastMethod = (message) => {
    setToast({ visible: true, message });
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setToast({ visible: false, message: "" });
    }, 3000);
  };

  const handleOpenDialer = () => {
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  const handleOpenMailer = () => {
    const mailUrl = `mailto:${emailAddress}`;
    window.location.href = mailUrl;
  };

  const handleOpenMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      officeAddress,
    )}`;
    window.open(mapUrl, "_blank");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const isValid = form.current.reportValidity();
    if (isValid) {
      const nameInput = form.current.elements.from_name;
      const emailInput = form.current.elements.from_email;
      const phoneInput = form.current.elements.phone_number;
      const messageInput = form.current.elements.message;
      if (nameInput.value.length <= 5) {
        showToastMethod("Please enter your full name");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showToastMethod("Please enter a valid email address");
        return;
      }
      if (phoneInput.value.trim().length != 10) {
        showToastMethod("Please enter a valid phone number");
        return;
      }
      if (messageInput.value.trim().length <= 20) {
        showToastMethod("Message should be more than 20 characters");
        return;
      }
      emailjs.sendForm("", "", form.current, "").then(
        (result) => {
          showToastMethod("Message sent, Thank you for contacting!");
          e.target.reset();
        },
        (error) => {
          showToastMethod("Oops something went wrong");
        },
      );
    } else {
      showToastMethod("Please fill out all required fields correctly");
    }
  };

  const pageHeader = {
    heading: "Contact",
    description:
      "Have questions or looking for the right property? Get in touch with us and we’ll guide you every step of the way.",
  };

  const officeSectionHeader = {
    heading: "Come Visit Us",
    description: "Welcome to our office",
  };

  const officeSectionData = {
    heading: "Head Office",
    description:
      "Visit our main office and start your journey to the perfect home or workspace. Let’s find the right property for you—together!",
  };

  return (
    <BaseLayout>
      <MainSection>
        <PageHeader pageHeader={pageHeader} />
        <ContactForm ref={form} onSubmit={handleSendMessage} data-aos="fade-up">
          <FieldContainer>
            <Label>Your Full Name</Label>
            <TextBox placeholder="John Doe" name="from_name" required />
          </FieldContainer>
          <EmailPhoneWrapper>
            <FieldContainer>
              <Label>Your Email</Label>
              <TextBox
                placeholder="john.doe@gmail.com"
                name="from_email"
                required
              />
            </FieldContainer>
            <FieldContainer>
              <Label>Your Phone Number</Label>
              <TextBox
                placeholder="+91-0000000000"
                name="phone_number"
                required
              />
            </FieldContainer>
          </EmailPhoneWrapper>
          <FieldContainer>
            <Label>Your Message</Label>
            <TextArea
              placeholder="Type your message here..."
              name="message"
              required
            />
          </FieldContainer>
          <SlantedPrimaryButton type="submit">
            <span className="transition"></span>
            <span className="label">Send Message →</span>
          </SlantedPrimaryButton>
        </ContactForm>
      </MainSection>
      <SmallHeader data-aos="fade-up">
        <SmallHeading>{officeSectionHeader.heading}</SmallHeading>
        <Heading>{officeSectionHeader.description}</Heading>
      </SmallHeader>
      <VisitUsWrapper>
        <LeftSide>
          <AboutUsImage src={HeadOffice} alt="" />
        </LeftSide>
        <RightSide data-aos="fade-right">
          <LightHeading>{officeSectionData.heading}</LightHeading>
          <Description>{officeSectionData.description}</Description>
          <PhoneEmailLocationWrapper>
            <PhoneEmailLocationContainer onClick={handleOpenDialer}>
              <IconWrapper>
                <i className="bi bi-telephone-fill"></i>
              </IconWrapper>
              <IconText>{phoneNumber}</IconText>
            </PhoneEmailLocationContainer>
            <PhoneEmailLocationContainer onClick={handleOpenMailer}>
              <IconWrapper>
                <i className="bi bi-envelope-fill"></i>
              </IconWrapper>
              <IconText>{emailAddress}</IconText>
            </PhoneEmailLocationContainer>
            <PhoneEmailLocationContainer onClick={handleOpenMap}>
              <IconWrapper>
                <i className="bi bi-geo-alt-fill"></i>
              </IconWrapper>
              <IconText>{officeAddress}</IconText>
            </PhoneEmailLocationContainer>
          </PhoneEmailLocationWrapper>
        </RightSide>
      </VisitUsWrapper>
    </BaseLayout>
  );
}

const SmallHeader = styled.div`
  max-width: 900px;
  margin: 50px auto 0;
  text-align: center;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    max-width: 85%;
  }
`;

const Heading = styled.h1`
  color: black;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const SmallHeading = styled.p`
  font-size: 20px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.5s ease-in-out;
`;

const LightHeading = styled.h1`
  color: black;
  font-weight: 400;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 376px) {
    font-size: 25px;
  }
`;

const Description = styled.p`
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

const MainSection = styled.div`
  transition: all 0.5s ease-in-out;
`;

const ContactForm = styled.form`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    max-width: 90%;
  }
  @media (max-width: 768px) {
    padding: 4rem;
  }
  @media (max-width: 700px) {
    padding: 2rem;
  }
  @media (max-width: 376px) {
    padding: 1.5rem;
  }
  @media (max-width: 321px) {
    padding: 1rem;
  }
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.5s ease-in-out;
`;

const Label = styled.label`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 16px;
  }

  @media (max-width: 426px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 0 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  font-size: 20px;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }
`;

const EmailPhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #ab81e8;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: #23c3c4;
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .label {
    position: relative;
    top: -1px;
  }

  &:hover .transition {
    width: 14em;
    height: 14em;
  }

  @media (max-width: 1024px) {
    width: 170px;
    height: 50px;
    font-size: 18px;
  }
  @media (max-width: 376px) {
    width: 150px;
    height: 45px;
    font-size: 16px;
  }
  @media (max-width: 321px) {
    width: 130px;
    height: 40px;
    font-size: 14px;
  }
`;

const VisitUsWrapper = styled.div`
  width: 100%;
  padding: 50px 5%;
  height: 600px;
  max-height: 600px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    max-height: unset;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const AboutUsImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  border-radius: 20px;
`;

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    gap: 40px;
    height: fit-content;
  }
  @media (max-width: 376px) {
    padding: 30px;
    gap: 30px;
  }
  @media (max-width: 321px) {
    padding: 20px;
    gap: 25px;
  }
`;

const PhoneEmailLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const IconWrapper = styled.div`
  font-size: 30px;
  color: #cc1e15;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const IconText = styled.p`
  margin: 0;
  font-size: 18px;
  color: black;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 17px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PhoneEmailLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    ${IconWrapper} {
      color: #cc1e15;
    }

    ${IconText} {
      color: #cc1e15;
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
  display: block;

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

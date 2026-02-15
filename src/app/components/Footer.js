import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";

export const Footer = () => {
  const pathName = usePathname();
  const phoneNumber = "+918976630666";
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]'),
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const sectionData = {
    description:
      "Established in 2025, Aarth Realtor has helped clients find the right homes and investment opportunities across Navi Mumbai, with transparency and trust.",
  };

  const socialLinks = [
    {
      className: "bi bi-whatsapp",
      href: `https://wa.me/${phoneNumber}`,
      tooltip: "WhatsApp",
      ariaLabel: "WhatsApp",
    },
    {
      className: "bi bi-instagram",
      href: "https://www.instagram.com/aarth_realtor",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
  ];

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/terms-and-conditions", label: "Terms & Conditions" },
  ];

  const servicesData = [
    "Property Sales",
    "Property Leasing",
    "Investment Advisory",
    "Property Valuation",
    "Legal Assistance",
    "Property Management",
    "Project Marketing",
    "Tenant Screening",
  ];

  return (
    <DisplayWrapper>
      <ColumnsWrapper>
        <Column1>
          <Logo src={logo} alt="Aarth Realtor" />
          <Description>{sectionData.description}</Description>
          <SocialLinksWrapper>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                className={link.className}
                href={link.href}
                target="_blank"
                data-bs-toggle="tooltip"
                data-bs-title={link.tooltip}
                data-bs-custom-class="custom-tooltip"
                aria-label={link.ariaLabel}
              ></SocialLink>
            ))}
          </SocialLinksWrapper>
        </Column1>
        <Column2>
          <SectionHeading>Pages</SectionHeading>
          <PagesWrapper>
            {routesData
              .filter((page) => page.path !== pathName)
              .map((page) => (
                <Page key={page.path} href={page.path}>
                  {page.label}
                </Page>
              ))}
          </PagesWrapper>
        </Column2>
        <Column3>
          <SectionHeading>Services</SectionHeading>
          <ServicesWrapper>
            {servicesData.map((service, index) => (
              <Service key={index}>
                <i className="bi bi-check2-circle"></i> {service}
              </Service>
            ))}
          </ServicesWrapper>
        </Column3>
      </ColumnsWrapper>
      <BottomWrapper>
        <LeftSide>
          <p>
            © {currentYear} <span>Aarth Realtor</span>. All rights reserved.
          </p>
        </LeftSide>
        <RightSide>
          <p>
            Designed and Developed by{" "}
            <a
              id="mukesh"
              href="https://mukesh-sharma.vercel.app"
              target="_blank"
            >
              Mukesh
            </a>{" "}
            &{" "}
            <a
              id="nitin"
              href="https://nitin-prajapati.vercel.app"
              target="_blank"
            >
              Nitin
            </a>
          </p>
        </RightSide>
      </BottomWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 5%;
  background-image: repeating-linear-gradient(
    to right,
    #000,
    #000 0.5px,
    transparent 0.5px,
    transparent
  );
  background-size: 200px 200px;
  background-color: #100e0eff;
  transition: all 0.5s ease-in-out;
`;

const ColumnsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 100px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Logo = styled(Image)`
  width: auto;
  height: 70px;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 15px;
  color: lightgrey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 50%;
  color: #cc1e15;
  background: #fff;
  transition: all 0.5s ease-in-out;

  &:hover {
    border: 1px solid #cc1e15;
  }
`;

const SectionHeading = styled.p`
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;
`;

const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 35%;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const Page = styled(Link)`
  position: relative;
  width: 100%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: lightgrey;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  border-bottom: 1px solid transparent;

  &:hover {
    color: #cc1e15;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: transparent;
    width: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover::before {
    width: 100%;
    background-color: #cc1e15;
  }

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const Column3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: all 0.5s ease-in-out;
`;

const Service = styled.div`
  width: 50%;
  font-size: 15px;
  display: flex;
  gap: 5px;
  padding: 10px 0px;
  color: lightgrey;
  transition: all 0.5s ease-in-out;

  @media (max-width: 950px) {
    font-size: 13px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const LeftSide = styled.div`
  transition: all 0.5s ease-in-out;

  span {
    font-weight: 600;
    transition: all 0.5s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #cc1e15;
    }
  }
`;

const RightSide = styled.div`
  transition: all 0.5s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    font-weight: 600;
    &#mukesh:hover {
      cursor: pointer;
      color: royalBlue;
    }
    &#nitin:hover {
      cursor: pointer;
      color: orange;
    }
  }
`;

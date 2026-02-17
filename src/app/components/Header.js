import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "./SideMenu";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../../public/assets/logo.png";
import { useRouter } from "next/navigation";


export const Header = () => {
  const pathname = usePathname();
  const { theme } = useSelector(uiState);
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpened, setSideMenuOpened] = useState(false);
  
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSideMenu = () => {
    setSideMenuOpened(!sideMenuOpened);
  };

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/terms-and-conditions", label: "Terms & Conditions" },
  ];

  return (
    <>
      <DisplayWrapper $scrolled={scrolled}>
        <Logo src={logo} alt="Aarth Realtor" $scrolled={scrolled} />
        <RoutesWrapper $scrolled={scrolled}>
          {routesData.map((route) => (
            <Route
              key={route.path}
              className={pathname === route.path ? "active" : ""}
              href={route.path}
              $scrolled={scrolled}
              pathname={pathname}
            >
              {route.label}
            </Route>
          ))}
        </RoutesWrapper>
        <RightActions>
          <SlantedPrimaryButton onClick={() => router.push("/contact")}>
            <span className="transition"></span>
            <span className="label">Get in Touch →</span>
          </SlantedPrimaryButton>
        </RightActions>
        <Button onClick={handleSideMenu} $sideMenuOpened={sideMenuOpened}>
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </Button>
      </DisplayWrapper>
      <SideMenu
        sideMenuOpened={sideMenuOpened}
        setSideMenuOpened={setSideMenuOpened}
      />
    </>
  );
};

const DisplayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0px 5%;
  height: ${(props) => (props.$scrolled ? "70px" : "90px")};
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.$scrolled ? "#ffffff" : "transparent")};
  box-shadow: ${(props) => (props.$scrolled ? "0 1px 4px #ffffff" : "none")};
    props.$scrolled ? "0 1px 4px #ffffff" : "none"};
  backdrop-filter: ${(props) => (props.$scrolled ? "blur(10.1px)" : "none")};
  -webkit-backdrop-filter: ${(props) =>
    props.$scrolled ? "blur(10.1px)" : "none"};
  border-bottom: ${(props) => (props.$scrolled ? "1px solid #e5e5e5" : "none")};
  z-index: 2;
  transition: all 0.5s ease-in-out;
`;

const Logo = styled(Image)`
  width: auto;
  height: ${(props) => (props.$scrolled ? "40px" : "60px")};
  transition: all 0.5s ease-in-out;
`;

const RoutesWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 22px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Route = styled(Link)`
  position: relative;
  font-size: 16px;
  color: ${(props) =>
    props.$scrolled || props.pathname !== "/" ? "#000" : "#fff"};
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  padding-bottom: 3px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }

  &:hover {
    color: ${({ theme }) => theme.globalColors.brandRed};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #cc1e15;
    width: 0;
    transition:
      width 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    color: ${(props) =>
      props.$scrolled || props.pathname !== "/" ? "#cc1e15" : "#ffffff"};
    font-weight: bold;
    &::before {
      width: 100%;
      background-color: ${(props) =>
        props.$scrolled || props.pathname !== "/" ? "#cc1e15" : "#ffffff"};
    }
  }

  &.active::after {
    width: 100%;
    background-color: ${(props) =>
      props.$scrolled || props.pathname !== "/" ? "#cc1e15" : "#ffffff"};
  }
`;

const Button = styled.button`
  padding: 0;
  --gap: 5px;
  --height-bar: 3px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;

  display: none;

  @media (max-width: 700px) {
    display: flex;
  }

  width: 35px;
  min-width: 35px;
  max-width: 35px;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
  background: transparent;

  .bar {
    position: relative;
    height: var(--height-bar);
    width: 100%;
    border-radius: 0.5rem;
    background-color: #cc1e15;
  }

  .bar--1 {
    top: var(--pos-y-bar-one);
    transform: rotate(var(--rotate-bar-one));
    transition:
      top 200ms 100ms,
      transform 100ms;
  }

  .bar--2 {
    transform: scaleX(var(--scale-bar));
    transition: transform 150ms 100ms;
  }

  .bar--3 {
    bottom: var(--pos-y-bar-three);
    transform: rotate(var(--rotate-bar-three));
    transition:
      bottom 200ms 100ms,
      transform 100ms;
  }

  ${(props) =>
    props.$sideMenuOpened &&
    `
    --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
    --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
    --scale-bar: 0;
    --rotate-bar-one: 45deg;
    --rotate-bar-three: -45deg;
  `}
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
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

  @media (max-width: 700px) {
    display: none;
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

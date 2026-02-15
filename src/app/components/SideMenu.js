import Link from "next/link";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const SideMenu = ({ sideMenuOpened, setSideMenuOpened }) => {
  const sideMenuRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        sideMenuOpened &&
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target)
      ) {
        setSideMenuOpened(false);
      }
    };

    const handleScroll = () => {
      setSideMenuOpened(false);
    };

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sideMenuOpened]);

  const routesData = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/terms-and-conditions", label: "Terms & Conditions" },
  ];

  return (
    <DisplayWrapper ref={sideMenuRef} $sideMenuOpened={sideMenuOpened}>
      <RoutesWrapper>
        {routesData.map((route) => (
          <Route
            key={route.path}
            className={pathname === route.path && "active"}
            href={route.path}
          >
            {route.label}
          </Route>
        ))}
      </RoutesWrapper>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.div`
  display: none;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(245, 248, 255, 0.95) 100%
  );
  box-shadow: -8px 0 25px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-left: 1px solid rgba(225, 225, 225, 1);
  padding: 1rem;
  position: fixed;
  top: 0;
  right: ${(props) => (props.$sideMenuOpened ? "0" : "-400px")};
  z-index: 1;
  transition: right 0.45s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 700px) {
    display: initial;
  }
`;

const RoutesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  height: 100%;
  transition: all 0.5s ease-in-out;
`;

// const Route = styled(Link)`
//   font-size: 16px;
//   color: black;
//   background-color: white;
//   width: 100%;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   padding: 0 10px;
//   border-radius: 8px;
//   text-decoration: none;
//   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
//   transition: all 0.5s ease-in-out;

//   &.active {
//     color: white;
//     background-color: #4f7fd3;

//     &:focus {
//       color: white;
//       background-color: #4f7fd3;
//     }
//   }

//   &:focus {
//     color: white;
//     background-color: #3f6fc2;
//   }
// `;

const Route = styled(Link)`
  position: relative;
  font-size: 15px;
  font-weight: 500;
  color: #1f2937;

  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;

  padding: 0 16px;
  border-radius: 12px;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);

  transition: all 0.3s ease;

  &:hover {
    background: #cc1e15;
    color: #fff;
    transform: translateX(4px);
    box-shadow: 0 8px 18px rgba(211, 79, 79, 0.35);
  }

  &.active {
    background: #cc1e15;
    color: #fff;
    font-weight: 600;
    box-shadow: 0 10px 22px rgba(211, 79, 79, 0.35);
  }

  &.active::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    height: 60%;
    width: 4px;
    background: #cc1e15;
    border-radius: 4px;
  }
`;

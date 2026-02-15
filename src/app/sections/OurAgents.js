import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import agent1 from "../../../public/assets/agent1.jpg";
import agent2 from "../../../public/assets/agent2.jpg";
import agent3 from "../../../public/assets/agent3.jpg";
import agent4 from "../../../public/assets/agent4.jpg";

export const OurAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Tannu Sharma",
      role: "Director",
      image: agent1,
    },
    {
      id: 2,
      name: "Shlok Khatri",
      role: "Digital Marketing",
      image: agent2,
    },
    {
      id: 3,
      name: "Tejas Kaushik",
      role: "Sales Executive",
      image: agent3,
    },
    {
      id: 4,
      name: "Kushal Gandhi",
      role: "Sales Executive & IT",
      image: agent4,
    },
  ];

  const socialLinks = [
    {
      className: "bi bi-whatsapp",
      href: ``,
      tooltip: "WhatsApp",
      ariaLabel: "WhatsApp",
    },
    {
      className: "bi bi-instagram",
      href: "",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      className: "bi bi-facebook",
      href: "",
      tooltip: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      className: "bi bi-threads",
      href: "",
      tooltip: "Threads",
      ariaLabel: "Threads",
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionLabel>
          <span>OUR AGENTS</span>
          <i />
        </SectionLabel>

        <SectionInfo>
          <h2>Contact with Our Agents</h2>

          {/* <p>
             Explore the latest project that cater to your needs, whether you're looking for a modern office space or a vibrant community hub.
            </p> */}
        </SectionInfo>
      </SectionHeader>

      <AgentsGrid>
        {agents.map((agent) => (
          <AgentCard key={agent.id} data-aos="fade-up">
            <ImageWrapper>
              <Image src={agent.image} alt={agent.name} fill />
            </ImageWrapper>

            <h4>{agent.name}</h4>
            <span className="role">{agent.role}</span>

            {/* <Socials>
                <a href="#">X</a>
                <a href="#">f</a>
                <a href="#">in</a>
                <a href="#">◎</a>
                </Socials> */}
            {/* <SocialLinksWrapper>
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
            </SocialLinksWrapper> */}
          </AgentCard>
        ))}
      </AgentsGrid>
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

const AgentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const AgentCard = styled.div`
  text-align: center;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  padding: 20px;
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-6px);
    transition: transform 0.3s ease;
    box-shadow: none;
    border-bottom: 1px solid #cc1e15;
  }

  h4 {
    margin: 10px 0px 5px !important;
    font-size: 18px;
    font-weight: 600;
  }

  .role {
    display: block;
    font-size: 14px;
    color: #6b7280;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 10px;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;

  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #cc1e15;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #cc1e15;
      color: #fff;
    }
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 12px;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  border-radius: 50%;
  color: #cc1e15;
  background: rgba(225, 225, 225, 0.3);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(225, 225, 225, 1);
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #cc1e15;
    border: 1px solid #cc1e15;
  }
`;

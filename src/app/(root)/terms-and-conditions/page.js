"use client";

import styled from "styled-components";
import BaseLayout from "../../components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";

export default function TermsAndConditions() {
  const pageHeader = {
    heading: "Terms & Conditions",
    description:
      "Welcome to Aarth Realtor. By accessing our website or using our services, you agree to comply with and be bound by these Terms and Conditions.",
  };

  const termsAndConditions = [
    {
      title: "Services",
      description:
        "We provide real estate services including property listings, marketing, buyer and seller representation, and consulting, subject to availability and written agreements.",
    },
    {
      title: "Property Listings",
      description:
        "All property information, including pricing and availability, is provided for general informational purposes only and may change without notice.",
    },
    {
      title: "No Professional Advice",
      description:
        "Information on this website does not constitute legal, financial, or investment advice. Clients should seek independent professional guidance.",
    },
    {
      title: "Client Responsibilities",
      description:
        "Clients agree to provide accurate information and cooperate throughout the buying, selling, or leasing process.",
    },
    {
      title: "Fees and Commissions",
      description:
        "Our commission structure will be outlined in written agreements. We may charge up to 1% commission from both the buyer and the seller unless otherwise agreed in writing.",
    },
    {
      title: "Intellectual Property",
      description:
        "All website content, including text, images, and branding, is our property and may not be reproduced without permission.",
    },
    {
      title: "Limitation of Liability",
      description:
        "We are not liable for any direct or indirect losses arising from the use of our website or services, except as required by law.",
    },
    {
      title: "Third-Party Links",
      description:
        "We are not responsible for the content or practices of third-party websites linked from our site.",
    },
    {
      title: "Privacy",
      description:
        "Your use of our website is also governed by our Privacy Policy.",
    },
    {
      title: "Changes to Terms",
      description:
        "We reserve the right to update these Terms and Conditions at any time. Continued use of our services indicates acceptance.",
    },
    {
      title: "Governing Law",
      description:
        "These Terms and Conditions are governed by the applicable laws of your state or country.",
    },
  ];

  return (
    <BaseLayout>
      <PageHeader pageHeader={pageHeader} />
      <ContentWrapper>
        <TermsList>
          {termsAndConditions.map((term, index) => (
            <li key={index}>
              <strong>{term.title}:</strong> {term.description}
            </li>
          ))}
        </TermsList>
      </ContentWrapper>
    </BaseLayout>
  );
}

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0px auto 50px;
`;

const TermsList = styled.ul`
  padding: 0 20px 0 40px;
  line-height: 1.7;
  font-size: 16px;
  color: #444;

  li {
    margin-bottom: 18px;
  }

  strong {
    font-weight: 600;
  }
`;

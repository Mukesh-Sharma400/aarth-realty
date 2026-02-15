import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./globals.css";
import { Providers } from "./providers";
// import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Aarth Realtor",
  description:
    "Founded in 2025, Aarth Realtor began with a simple vision—to make property buying and investing clear, reliable, and stress-free. From local home buyers to seasoned investors, we’ve grown by delivering genuine advice and dependable service across Navi Mumbai.",
  keywords:
    "Property Sales, Property Leasing, Investment Advisory, Property Valuation, Legal Assistance, Property Management, Project Marketing, Tenant Screening",
  author: "Nitin Prajapati, Mukesh Sharma",
  image: "./icon.png",
  url: "aarthrealtor.com",
  type: "website",
  ogTitle: "Aarth Realtor",
  ogDescription:
    "Founded in 2025, Aarth Realtor began with a simple vision—to make property buying and investing clear, reliable, and stress-free. From local home buyers to seasoned investors, we’ve grown by delivering genuine advice and dependable service across Navi Mumbai.",
  ogImage: "./icon.png",
  twitterTitle: "Aarth Realtor",
  twitterDescription: "",
  twitterImage: "./icon.png",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.png" type="image/png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        {/* <Analytics /> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

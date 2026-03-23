
import type { Metadata } from "next";

import { Outfit } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
} from "@clerk/nextjs";
//updated the layout to include the header and footer components, and wrapped the content with the QueryProvider for data fetching capabilities.
import HeaderWrapper from "@/components/layout/header-wrapper";
import Footer from "@/components/layout/footer";
import { QueryProvider } from "@/components/providers/query-provider";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Mentix",
  description:
    "Mentix is a ai learning platform to connect with other learners in the community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfitFont.className} antialiased`}>
            {/* <Header /> */}
            <QueryProvider>
            <HeaderWrapper />
            {children}
            <Footer />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}


import type { Metadata } from "next";

import { Outfit } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
} from "@clerk/nextjs";

//added query provider to the root layout so that we can use the query client in any component without having to wrap it in a provider. This is a common pattern for state management libraries like React Query, Redux, etc. It allows us to have a single source of truth for our data and makes it easier to manage and cache our data across the application.
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

import type { Metadata } from "next";
import { Outfit, Geist } from "next/font/google";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800','900'],
});

export const metadata: Metadata = {
  title: "Mentix",
  description: "Mentix is a AI learning platform to connect with other learners in the community and share your learning journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("font-sans", geist.variable)}>
        <body className={`${outfitFont.className} antialiased`}>

          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>

          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}
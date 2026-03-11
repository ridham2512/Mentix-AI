"use client";

import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, TrophyIcon, UsersIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
type HeaderProps = {
  isPro: boolean;
};

export default function Header({ isPro }: HeaderProps) {
  const { isSignedIn } = useUser();
  return (
    <header className="border-b">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Left side: Logo + Nav */}
        <div className="flex items-center gap-6">
          {/* <Link href="/" className="font-bold text-xl space-x-2">
            Mentix
          </Link> */}

          {isSignedIn && (
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                <Button variant={"ghost"} size={"sm"} className="hover:text-red-500">
                  Dashboard
                </Button>
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-gray-900">
                <Button variant={"ghost"} size="sm" className="hover:text-red-500">
                    <UsersIcon className="size-4 text-primary"/>
                  Community
                </Button>
              </Link>
              <Link href="/chat" className="text-gray-600 hover:text-gray-900">
                <Button variant={"ghost"} size="sm" className="hover:text-red-500">
                    <MessageCircle className="size-4 text-primary"/>
                  Chat
                </Button>
              </Link>
            </nav>
          )}
        </div>

        {/* Right side: Auth buttons OR Badge + UserButton */}
        <div className="flex items-center gap-4">
          {!isSignedIn ? (
            <>
              <SignInButton />
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </>
          ) : (
            <div className="flex items-center gap-4">
              {/* Subscription Badge */}
              {isPro ? (
                <Badge variant="outline" className="gap-1">
                  <TrophyIcon className="w-4 h-4 text-primary" /> Pro
                </Badge>
              ) : (
                <Badge variant="outline" className="gap-1">
                  Free
                </Badge>
              )}

              {/* User avatar */}
              <UserButton 
                appearance={{
                  elements: {
                      avatarBox: "size-9",
                  },
                }} 
              />
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
"use client";

import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <>
        <SignInButton />
        <SignUpButton>
          <Button>Sign Up</Button>
        </SignUpButton>
      </>
    );
  }

  return <UserButton />;
}
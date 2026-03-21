"use client";

import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
//update the import paths to match your project structure
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
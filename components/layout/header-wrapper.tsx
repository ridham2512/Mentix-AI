import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Header from "./header";

export default async function HeaderWrapper() {
  const { has } = await auth();

  const isPro = has({ plan: "pro_plan" });

  return (
    <header>
      <div className="layout-container flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl space-x-2">
          Meetsy
        </Link>

        {/* Navigation + Auth UI */}
        <Header isPro={isPro} />

      </div>
    </header>
  );
}
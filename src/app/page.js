import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/Howitworks";
import PricingSection from "@/components/landing/Pricingsection";
import WhatToAsk from "@/components/landing/Whattoask";
import Footer from "@/components/landing/Footer";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  if (await currentUser()) {
    redirect("/dashboard");
  }
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <PricingSection />
      <WhatToAsk />
      <Footer />
    </div>
  );
}

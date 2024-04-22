import HeroSection from "./_components/heroSection";
import WorkSection from "./_components/workSection";
import ContactSection from "./_components/contactSection";
import ResumeSection from "./_components/resumeSection";
import { Toaster } from "@/components/ui/toaster";
import WhatIKnowSection from "./_components/whatIKnowSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <WhatIKnowSection />
      <WorkSection />
      <ContactSection />
      <ResumeSection />
      <Toaster />
    </main>
  );
}

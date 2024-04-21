import HeroSection from "./_components/heroSection";
import WorkSection from "./_components/workSection";
import ContactSection from "./_components/contactSection";
import ResumeSection from "./_components/resumeSection";
import { Toaster } from "@/components/ui/toaster";

export const revalidate = 10;

export default async function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <WorkSection />
      <ContactSection />
      <ResumeSection />
      <Toaster />
    </main>
  );
}

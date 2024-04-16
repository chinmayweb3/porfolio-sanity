import { Contact } from "lucide-react";
import HeroSection from "./_components/heroSection";
import WorkSection from "./_components/workSection";
import ContactSection from "./_components/contactSection";
import ResumeSection from "./_components/resumeSection";

// export const revalidate = 10; // revalidate at most every hour

export default async function Home() {
  // const alldata = await client.fetch(`*[_type=="venue"]`);

  // console.log("get add the data: ", alldata);

  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <WorkSection />
      <ContactSection />
      <ResumeSection />
    </main>
  );
}

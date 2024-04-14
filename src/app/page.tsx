import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanityClient";
import Image from "next/image";
import HeroSection from "./_components/heroSection";

export const revalidate = 10; // revalidate at most every hour

export default async function Home() {
  // const alldata = await client.fetch(`*[_type=="venue"]`);

  // console.log("get add the data: ", alldata);

  return (
    <main className="flex flex-col w-full">
      <HeroSection />
    </main>
  );
}

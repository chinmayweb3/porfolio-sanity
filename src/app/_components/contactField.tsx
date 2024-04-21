"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { writeClient } from "@/lib/sanityClient";
import React from "react";

const ContactField = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <Input
        className="focus-visible:ring-offset-0 msm:text-center"
        type="text"
        placeholder="Name"
      />
      <Input
        className="focus-visible:ring-offset-0 msm:text-center"
        type="email"
        placeholder="Email"
      />
      <Textarea
        rows={5}
        className="focus-visible:ring-offset-0 msm:text-center"
        placeholder="Description"
      />
      <Button
        onClick={async () => {
          const c = await writeClient.create({
            _type: "contact",
            name: "nimesh",
            email: "chinmaysuryav@gmail.com",
            description: "description",
          });
          toast({
            description: "Your contact has been sent.",
          });
        }}
        className="tracking-wider w-fit px-[80px] msm:w-full"
        type="submit"
      >
        SUBMIT
      </Button>
    </div>
  );
};

export default ContactField;

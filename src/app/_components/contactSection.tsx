import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full  contain-in-section py-[75px] mlg:py-[50px]"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-extrabold text-t-lg mlg:text-t-md">Contact</h2>
        <p className="text-t2-lg text-t2-c text-center leading-tight">
          Check my commercial and non commercial projects. <br /> If you have
          any questions feel free to ask me for more information.
        </p>

        <div className="w-full grid grid-cols-[1.3fr_1fr] gap-[50px] items-center pt-[50px] px-[50px]">
          <div className="flex flex-col gap-[20px]">
            <Input
              className="focus-visible:ring-offset-0"
              type="text"
              placeholder="Name"
            />
            <Input
              className="focus-visible:ring-offset-0"
              type="email"
              placeholder="Email"
            />
            <Textarea
              rows={5}
              className="focus-visible:ring-offset-0"
              placeholder="Description"
            />
            <Button className="tracking-wider w-fit px-[80px]" type="submit">
              SUBMIT
            </Button>
          </div>
          <div className=" text-center pb-[60px]">
            <h4 className="text-[36px]">Let's Talk</h4>
            <p className="text-t2-c font-semibold">
              <a
                className="group duration-100"
                href="mailto:chinmaysuryavanshi8@gmail.com"
              >
                chinmaysuryavanshi8@gmail.com{" "}
                <span className="group-hover:ml-[10px] duration-150">
                  -{">"}
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

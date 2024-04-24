"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { IContactForm, contactFormApi } from "@/lib/api";
import React, { useState } from "react";

const ContactField = () => {
  const { toast } = useToast();

  const [form, setForm] = useState<IContactForm>({
    description: "",
    email: "",
    name: "",
  });

  const submit = async () => {
    if (!form.name || !form.email) {
      toast({
        description: "Please fill all the fields.",
        variant: "destructive",
      });
      return;
    }
    await contactFormApi({
      name: form.name,
      description: form.description,
      email: form.email,
    });

    toast({
      description: "Your contact has been sent.",
    });

    setForm({
      description: "",
      email: "",
      name: "",
    });
  };
  return (
    <div className="flex flex-col gap-[20px]">
      <Input
        value={form?.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="focus-visible:ring-offset-0 msm:text-center"
        type="text"
        placeholder="Name"
      />
      <Input
        value={form?.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="focus-visible:ring-offset-0 msm:text-center"
        type="email"
        placeholder="Email"
      />
      <Textarea
        value={form?.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        rows={5}
        className="focus-visible:ring-offset-0 msm:text-center"
        placeholder="Description"
      />
      <Button
        onClick={submit}
        className="tracking-wider w-fit px-[80px] msm:w-full"
        type="submit"
      >
        SUBMIT
      </Button>
    </div>
  );
};

export default ContactField;

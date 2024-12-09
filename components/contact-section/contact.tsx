"use client";
import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

    if (form.current) {
      emailjs
        .sendForm(serviceId ?? "", templateId ?? "", form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      onSubmit={sendEmail}
      className="px-[5%] flex flex-col items-center justify-center dark:text-white"
    >
      <h1 className="text-2xl tablet:text-5xl">Let's Work Together</h1>
      <div className="flex items-center justify-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        voluptates, labore nisi
      </div>
      <form ref={form} className=" flex gap-3 pt-10">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="text-md px-2 w-[20ch] rounded-lg dark:bg-white bg-whitesmoke-200 tablet:w-[40ch] tablet:text-xl"
        />
        <button
          type="submit"
          className="text-xl text-white bg-orangered p-4 rounded-xl text-nowrap cursor-pointer tablet:text-md"
        >
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default ContactSection;

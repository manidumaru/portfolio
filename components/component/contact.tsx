"use client";

import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import linkedin from "../../public/assets/icons/linkedin.svg";
import github from "../../public/assets/icons/github.svg";
import insta from "../../public/assets/icons/insta.svg";
import twitter from "../../public/assets/icons/twitter.svg";
import facebook from "../../public/assets/icons/facebook.svg";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameChangeHandler = (e: any) => {
    setName(e.target.value);
  }

  const emailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  }

  const messageChangeHandler = (e: any) => {
    setMessage(e.target.value);
  }

  const submitHandler = (e: any) => {
    e.preventDefault();
    const userMessage = {
      name: name,
      email: email,
      message: message
    }
    console.log(userMessage)
    setName("")
    setEmail("")
    setMessage("")
  };

  return (
    <section
      className="flex justify-center items-center bg-background-secondary w-full py-12 md:py-24 lg:py-32"
      id="contact"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-background-accent text-white px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Feel free to reach out to me for any inquiries or collaboration
            opportunities.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card>
            <form onSubmit={submitHandler}>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-label-foreground">Name</Label>
                  <Input id="name" onChange={nameChangeHandler} value={name} placeholder="Enter your name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-label-foreground">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={emailChangeHandler}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message" className="text-label-foreground">Message</Label>
                  <Textarea id="message" onChange={messageChangeHandler} value={message} placeholder="Enter your message" />
                </div>
                <Button
                  className="w-full"
                  type="submit"                
                >
                  Send Message
                </Button>
              </CardContent>
            </form>
          </Card>
          <div className="flex flex-col text-muted-foreground items-start gap-4">
            <div className="flex items-center gap-3">
              <MailIcon className="h-6 w-6" />
              <div>manidumaru36@gmail.com</div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6" />
              <div className="">+977 9861494401</div>
            </div>
            <div className="flex items-center gap-3">
              <LocateIcon className="h-6 w-6" />
              <div className="">Bhaktapur, Nepal</div>
            </div>
            <div className="flex">
              <Link
                className="mr-2"
                href="https://www.linkedin.com/in/mani-dumaru-2b3641235/"
              >
                <Image src={linkedin} alt="Linkedin" height={30}></Image>
              </Link>
              <Link className="mr-2" href="https://github.com/manidumaru">
                <Image src={github} alt="Github" height={30}></Image>
              </Link>
              <Link className="mr-2" href="https://www.instagram.com/_mdr01/">
                <Image src={insta} alt="Instagram" height={30}></Image>
              </Link>
              <Link className="mr-2" href="https://x.com/MDR0608">
                <Image src={twitter} alt="Twitter" height={30}></Image>
              </Link>
              <Link
                className="mr-2"
                href="https://www.facebook.com/manee.dumaru/"
              >
                <Image src={facebook} alt="Facebook" height={30}></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

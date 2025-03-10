"use client";
import React, { useRef, useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + "/api/v1/user/signup";

export function SignupFormDemo() {
  const [email, setEmail] = useState("");

  const [firstname, setFirstname] = useState("");

  const [lastname, setLastname] = useState("");

  const [password, setPassword] = useState("");

  const firstNameref = useRef<HTMLInputElement>(null);
  const lastNameref = useRef<HTMLInputElement>(null);
  const emailref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to QPay
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to QPay if you can because we don&apos;t have a login flow yet
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label id="x" htmlFor="firstname">
              First name
            </Label>
            <Input
              ref={firstNameref}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              id="firstname"
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              ref={lastNameref}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              id="lastname"
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            ref={emailref}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            placeholder="firstruleoffightc@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            ref={passwordref}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            placeholder="••••••••"
            type="password"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={async () => {
            try {
              const response = await axios.post(BACKEND_URL, {
                firstName: firstname,
                lastName: lastname,
                userName: email,
                password: password,
              });
              localStorage.setItem("firstname", firstname);
              localStorage.setItem("token", response.data.token);
              if (firstNameref.current) firstNameref.current.value = "";
              if (lastNameref.current) lastNameref.current.value = "";
              if (emailref.current) emailref.current.value = "";
              if (passwordref.current) passwordref.current.value = "";

              alert(response.data.msg);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Sign up
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

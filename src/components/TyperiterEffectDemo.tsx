"use client";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "learn",
    },
    {
      text: "and ",
    },
    {
      text: "explore ",
    },

    {
      text: "transactions .",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-8 ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The future of digital payments starts here.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <div className="w-40 h-10 hover:bg-white  rounded-xl bg-black border text-center justify-center  text-lg  dark:border-white border-transparent text-white ">
          <Link to={"/signup"}>
            <div className="mt-1 hover:text-black">Join now</div>
          </Link>
        </div>
        <div className="w-40 h-10 hover:bg-blue-600 rounded-xl bg-black border text-center justify-center  text-lg  dark:border-white border-transparent text-white ">
          <Link to={"/signin"}>
            <div className="mt-1">Signin</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

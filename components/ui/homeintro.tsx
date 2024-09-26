"use client";
import React from "react";
import Image from "next/image";
import { SocialLink } from "../socialink";
import { HeroBtn } from "../aboutme";
import { NotebookTabs } from "lucide-react";
import { toast, Toaster } from "sonner";
export const HomeIntro = () => {
  return (
    <div className="border-black">
      <section className="md:flex md:items-center md:space-x-8 ">
        <div className="p-10">
          <h1 className="font-meduim text-3xl md:text-5xl mb-4 text-black">
            Hi, I&apos;m
            <span className="text-blue-500"> Venkatesh</span>
            <span className="wave text-black">👋</span>
          </h1>

          <div className="col-span-3 max-w-2xl">
            <p className="px-0  text-lg text-left text-gray-600 md:leading-8 mb-4">
              I&apos;m a software engineer from India, specializing in
              JavaScript, TypeScript, React, and 69 other technologies.
              Passionate about serverless architectures and full-stack
              development, I’m always exploring new technologies. I do fullstack
              and a bit of everything ❤️ All About living life at its best.
            </p>
            <div className="mb-4">
              <SocialLink />
            </div>
            <div className="flex-col justify-between">
              <HeroBtn />
              {/* <Toaster richColors position="top-right" /> */}

              <button
                onClick={() => toast.success("OK")}
                className="inline-flex mt-1 ml-1 py-2 px-2 sm:py-4 md:py-6 sm:px-7 md:px-9 animate-shimmer items-center text-2xl justify-center rounded-md border white:border-slate-800 white:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-2"
              >
                <a href="/blogs" >check out my blog </a> <NotebookTabs />
              </button>
            </div>
          </div>
        </div>

        <Image
          alt="profile pic"
          src="/luffy.jpeg"
          width={300}
          height={50}
          className="p-4 mx-auto  border-black  rounded-md shadow-xl"
        ></Image>
      </section>
    </div>
  );
};

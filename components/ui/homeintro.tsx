import React from "react";
import Image from "next/image";
import SocialLink from "../socialink";
export const HomeIntro = () => {
  return (
    <div className="border-black">
      <section className="md:flex md:items-center md:space-x-8 ">
        <div className="p-10">
          <h1 className="font-meduim text-3xl md:text-5xl mb-4 text-black">
            Hi, I&apos;m
            <span className="text-blue-500"> Venkatesh</span>
          </h1>

          <div className="col-span-3 max-w-2xl">
            <p className="px-0  text-lg text-left text-gray-600 md:leading-8 mb-4">
              I&apos;m a software engineer from India, specializing in JavaScript,
              TypeScript, React, and 69 other technologies. Passionate about
              serverless architectures and full-stack development, I’m always
              exploring new technologies. I do fullstack and a bit of everything
              ❤️ All About living life at its best.
            </p>

            <div className="mb-4">
              <SocialLink />
            </div>
            <div className="space-x-0  sm:space-x-2 sm:space-y-0 ">
              <button className="border mr-4 focus:ring-4 text-blue-600 hover:bg-blue-500 hover:text-white font-bold border-blue-400 p-4 rounded-md  text-bold">
                Learn about me
              </button>
              <button
                className=" border border-blue-400  text-white
              p-4 rounded-md font-bold bg-green-600"
              >
                check out my blog
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

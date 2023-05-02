import { gdgLogo } from "@/Assets";
import { Bg1 } from "@/Assets/team";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="pt-24 ">
      <div className="relative">
        <Image
          className="w-1/2 absolute -top-[350px] right-0 z-0 opacity-30"
          src={Bg1}
          alt="io extended"
        />
      </div>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex items-center justify-center z-[999999]">
          <Image
            className="w-16 h-[80px] object-cover"
            src={gdgLogo}
            alt="GDG"
          />
          <h1 className="font-google text-xl">Google Developer Groups Patna</h1>
        </div>
        <p className="md:w-1/4 px-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </section>
  );
}

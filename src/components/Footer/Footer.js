import { IOExtendedPatna, gdgLogo } from "@/Assets";
import { Bg1 } from "@/Assets/team";
import Image from "next/image";
import React from "react";
import SNS from "../SNS/SNS";

export default function Footer() {
  return (
    <section id="footer" className="pt-24 relative">
      <Image
        className="w-1/2 absolute bottom-0 right-0 z-0 opacity-30"
        src={Bg1}
        alt="io extended"
      />
      <div className="flex flex-col h-full items-center justify-center mb-[30px]">
        <div className="flex items-center justify-center z-[999999]">
          <Image
            className="w-16 h-[80px] object-cover"
            src={gdgLogo}
            alt="GDG"
          />
          <h1 className="font-google text-xl z-[999999]">
            Google Developer Groups Patna
          </h1>
        </div>
        <p className="md:w-1/4 px-3 text-center z-[999999]">
          The Community of Developers, For Developers, By Developers. Our
          ultimate goal is to bring together all developers of Patna to create a
          thriving developer ecosystem.
        </p>
        <SNS />
      </div>
      <div className="w-full sticky bottom-0 flex items-center justify-between p-2 border-t-[1px] z-[999999999] bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px]">
        <div className="flex items-center justify-center">
          <Image
            src={IOExtendedPatna}
            alt="Google IO Extended Patna 2022"
            className="w-[60%] md:w-[30%] inline-block"
          />
        </div>
      </div>
    </section>
  );
}

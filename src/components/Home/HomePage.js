"use client";
import { gdgLogo, leftCircles, main_io, rightCircles } from "@/Assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";

export default function HomePage() {
  const targetTime = moment("2023-06-29T10:00:00Z");
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  // const handleScroll = function (e) {
  //   e.preventDefault();
  //   var href = e.currentTarget.href;
  //   var targetId = href.replace(/.*\#/, "");
  //   var elem = document.getElementById(targetId);
  //   elem === null || elem === void 0
  //     ? void 0
  //     : elem.scrollIntoView({
  //         behavior: "smooth",
  //       });
  // };

  const handleScroll = function (e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    if (href) {
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const monthsLeft = timeBetween.months();
  const daysLeft = timeBetween.days();
  const hoursLeft = timeBetween.hours();
  const minsLeft = timeBetween.minutes();

  return (
    <section
      id="home"
      className="pt-24 min-h-[100vh] bg-homeBg bg-no-repeat bg-cover bg-center"
    >
      <Image
        className="w-1/3 mx-auto md:w-1/4 hidden md:block"
        src={main_io}
        alt="google IO Patna"
      />
      <div className="flex items-center justify-center">
        <Image
          className="w-24 md:w-28 h-[80px] object-cover"
          src={gdgLogo}
          alt="GDG"
        />
        <h1 className="font-google text-xl md:text-2xl">
          Google Developer Groups Patna
        </h1>
      </div>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex w-full gap-4 flex-col items-center md:flex-row justify-evenly mt-4 px-2 md:px-0">
          <div className="w-full md:w-1/2">
            <div className="flex gap-4 flex-row justify-evenly">
              <div className="w-1/2 md:w-1/3 h-48 border-white border-[3px] rounded-[23px] p-2">
                <div className="border-googleYellow border-[3px] rounded-[23px] h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{monthsLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Months
                </p>
              </div>
              <div className="w-1/2 md:w-1/3 h-48 border-white border-[3px] rounded-[23px] p-2">
                <div className="border-googleRed border-[3px] rounded-[23px] h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{daysLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Days
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="flex gap-4 md:flex-row justify-evenly">
              <div className="w-1/2 md:w-1/3 h-48 border-white border-[3px] rounded-[23px] p-2">
                <div className="border-googleBlue border-[3px] rounded-[23px] h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{hoursLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Hours
                </p>
              </div>
              <div className="w-1/2 md:w-1/3 h-48 border-white border-[3px] rounded-[23px] p-2">
                <div className="border-googleGreen border-[3px] rounded-[23px] h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{minsLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Minutes
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 md:mt-[100px] border-2 relative border-googleYellow p-2 rounded-md">
          <Image
            src={leftCircles}
            className="w-10 absolute -left-5 -top-2"
            alt="GDG Patna"
          />
          <Image
            src={rightCircles}
            className="w-10 absolute -right-8 -bottom-2"
            alt="GDG Patna"
          />
          <button
            onClick={handleScroll}
            className="registerButton px-8 py-3 md:mt-0"
          >
            <Link href="#register" className="text-2xl">
              Register
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

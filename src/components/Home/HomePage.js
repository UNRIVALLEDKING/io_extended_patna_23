"use client";
import { gdgLogo, main_io } from "@/Assets";
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
      <div className="flex flex-col h-full items-center justify-center">
        <Image
          className="w-full md:w-1/4 hidden md:block"
          src={main_io}
          alt="google IO Patna"
        />
        <div className="flex items-center justify-center">
          <Image
            className="w-24 md:w-40 h-[80px] object-cover"
            src={gdgLogo}
            alt="GDG"
          />
          <h1 className="font-google text-xl md:text-3xl">
            Google Developer Groups Patna
          </h1>
        </div>
        <div className="flex w-full gap-4 flex-col items-center md:flex-row justify-evenly mt-4 px-2 md:px-0">
          <div className="w-full md:w-1/2">
            <div className="flex gap-4 flex-row justify-evenly">
              <div className="w-1/2 md:w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleYellow border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{monthsLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Months
                </p>
              </div>
              <div className="w-1/2 md:w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleRed border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{daysLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Days
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handleScroll}
              className="bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] text-white whitespace-nowrap px-2 py-4 mt-7 md:mt-0 rounded-md"
            >
              <Link href="#register">Register Now</Link>
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-2 md:mt-0">
            <div className="flex gap-4 md:flex-row justify-evenly">
              <div className="w-1/2 md:w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleBlue border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{hoursLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Hours
                </p>
              </div>
              <div className="w-1/2 md:w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleGreen border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-4xl md:text-8xl">{minsLeft}</p>
                </div>
                <p className="text-center text-2xl md:text-5xl font-google mt-7">
                  Minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

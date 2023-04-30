"use client";
import { gdgLogo, main_io } from "@/Assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import moment from "moment";

export default function HomePage() {
  const targetTime = moment("May 29 2023, 05:00:00 PM");
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  const monthsLeft = timeBetween.months();
  const daysLeft = timeBetween.days();
  const hoursLeft = timeBetween.hours();
  console.log("eventDate", targetTime._i);
  console.log("monthLeft", monthsLeft);
  console.log("DaysLeft", daysLeft);
  console.log("hoursLeft", hoursLeft);
  return (
    <section
      id="home"
      className="pt-24 h-[100vh] bg-homeBg bg-no-repeat bg-cover bg-center"
    >
      <div className="flex flex-col h-full items-center justify-center">
        {/* <input
          type="date"
          className="text-black"
          onChange={(e) => setTargetDate(e.target.value)}
        /> */}
        <Image className="w-1/4" src={main_io} alt="google IO Patna" />
        <div className="flex items-center justify-center">
          <Image
            className="w-40 h-[80px] object-cover"
            src={gdgLogo}
            alt="GDG"
          />
          <h1 className="font-google text-3xl">
            Google Developer Groups Patna
          </h1>
        </div>
        <div className="flex w-full flex-row justify-evenly mt-4">
          <div className="w-1/2">
            <div className="flex justify-evenly">
              <div className="w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleYellow border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-8xl">
                    {daysLeft.toString().length != 1
                      ? daysLeft.toString()
                      : "0"}
                  </p>
                </div>
              </div>
              <div className="w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleRed border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-8xl">
                    {daysLeft.toString().length != 1
                      ? daysLeft.toString()[1]
                      : daysLeft}
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-center text-5xl font-google mt-4">DAYS</h1>
          </div>
          <div className="w-1/2">
            <div className="flex justify-evenly">
              <div className="w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleBlue border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-8xl">
                    {hoursLeft.toString().length != 1
                      ? hoursLeft.toString()[0]
                      : "0"}
                  </p>
                </div>
              </div>
              <div className="w-1/3 h-48 border-white border-4 rounded-2xl p-5">
                <div className="border-googleGreen border-4 rounded-2xl h-full flex items-center justify-center">
                  <p className="text-8xl">
                    {hoursLeft.toString().length != 1
                      ? hoursLeft.toString()[1]
                      : hoursLeft}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-5xl font-google mt-4">
              {monthsLeft ? "Month" : "Hours"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

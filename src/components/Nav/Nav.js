"use client";
import { CloseIcon, IOExtendedPatna, MenuIcon } from "@/Assets";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu.json";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleScroll = function (e) {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    var href = e.currentTarget.href;
    var targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    var elem = document.getElementById(targetId);
    elem === null || elem === void 0
      ? void 0
      : elem.scrollIntoView({
          behavior: "smooth",
        });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <div
        className={`w-full fixed top-0 flex items-center justify-between p-2 border-b-[1px] z-50 ${
          scroll
            ? "bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px]"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <div className="flex items-center justify-start">
          <Image
            src={IOExtendedPatna}
            alt="Google IO Extended Patna 2022"
            className="w-[40%] sm:w-[40%] inline-block"
          />
        </div>
        <ul className="hidden lg:flex justify-evenly">
          {Menu.map((item, id) => (
            <li className="mx-1" key={id}>
              <Link
                onClick={handleScroll}
                href={item.url}
                smooth
                scroll
                className={`min-w-full text-white whitespace-nowrap ${
                  id === 0 ? "bg-primary" : ""
                } px-4 py-2 rounded-full hover:bg-secondary`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Responsive Nav for Mobiles */}
        <div
          onClick={() => setToggle(!toggle)}
          className="lg:hidden flex fles-1 justify-end items-center"
        >
          <Image
            src={toggle ? MenuIcon : CloseIcon}
            alt="Menu"
            className="animate-bounce w-8"
          />
          <div
            className={`fixed right-1 top-[3rem] p-2 rounded bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] z-50 ${
              toggle ? "hidden" : "flex"
            }`}
          >
            <ul
              className={`list-none relative ${
                toggle ? "hidden" : "flex"
              } flex flex-col justify-center item-end`}
            >
              {Menu.map((item, id) => (
                <li className="mx-1 my-2" key={id}>
                  <Link
                    onClick={handleScroll}
                    href={item.url}
                    smooth
                    className={`min-w-full text-white whitespace-nowrap ${
                      id === 0 ? "bg-primary" : ""
                    } px-4 py-2 rounded-full hover:bg-secondary`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

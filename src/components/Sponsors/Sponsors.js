import { gdgLogo } from "@/Assets";
import Image from "next/image";

export default function Sponsors() {
  const sponsorsData = [
    {
      id: 0,
      title: "Google Developer Groups",
      url: "https://gdg.community.dev/",
      border: "googleRed",
    },
    // {
    //   id: 0,
    //   title: "Google Developer Groups",
    //   url: "https://gdg.community.dev/",
    //   border: "googleBlue",
    // },
    // {
    //   id: 0,
    //   title: "Google Developer Groups",
    //   url: "https://gdg.community.dev/",
    //   border: "googleGreen",
    // },
    // {
    //   id: 0,
    //   title: "Google Developer Groups",
    //   url: "https://gdg.community.dev/",
    //   border: "googleYellow",
    // },
  ];
  return (
    <section id="sponsors">
      <h1 className="mt-10 mb-2 text-center capitalize text-2xl z-[999999]">
        Our Sponsors
      </h1>
      <hr className="w-1/2 md:w-1/5 mx-auto" />

      <div className="flex flex-row mt-5 justify-around gap-4 px-4 flex-wrap z-[999999]">
        {sponsorsData.map((item, id) => (
          <a
            href={item.url}
            target="_blank"
            key={id}
            className="w-[45%] md:w-1/6 text-center"
          >
            <Image className="w-full bg-white mb-2" src={gdgLogo} alt="GDG" />
            <h2
              className={`border-t-2 border-b-2 border-${item.border} block text-center text-xl py-2`}
            >
              {item.title}
            </h2>
          </a>
        ))}
      </div>
    </section>
  );
}

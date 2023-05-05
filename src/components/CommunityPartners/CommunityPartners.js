import { hackSlash } from "@/Assets/CommunitPartner";
import Image from "next/image";

export default function CommunityPartners() {
  const communityData = [
    {
      id: 0,
      title: "Hackslash",
      url: "https://hackslash.co.in/",
      logo: hackSlash,
      border: "googleRed",
    },
  ];
  return (
    <section id="partners">
      <h1 className="mt-10 mb-2 text-center capitalize text-2xl z-[999999]">
        Community Partners
      </h1>
      <hr className="w-1/2 md:w-1/5 mx-auto" />

      <div className="flex flex-row mt-5 justify-around gap-4 px-4 flex-wrap z-[999999]">
        {communityData.map((item, id) => (
          <a
            href={item.url}
            target="_blank"
            key={id}
            className={`w-[45%] md:w-1/6 text-center border-2 aspect-square p-4 border-${item.border} rounded-full`}
          >
            <Image className="w-full mb-2" src={item.logo} alt="GDG" />
            {/* <h2
              className={`border-t-2 border-b-2 border-${item.border} block text-center text-xl py-2`}
            >
              {item.title}
            </h2> */}
          </a>
        ))}
      </div>
    </section>
  );
}

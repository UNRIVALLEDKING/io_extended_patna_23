import { hackSlash } from "@/Assets/CommunitPartner";
import {
  fbIcon,
  instaIcon,
  linkedinIcon,
  twitterIcon,
  webIcon,
} from "@/Assets/SNS";
import Image from "next/image";

export default function CommunityPartners() {
  const communityData = [
    {
      id: 0,
      title: "Hackslash NITP",
      url: "https://hackslash.co.in/",
      logo: hackSlash,
      border: "googleRed",
      insta: "https://www.instagram.com/hackslash.nitp/",
      web: "https://hackslash.co.in/",
      facebook: "https://www.facebook.com/hackSlash.nitp/",
      twitter: "https://twitter.com/hackslash_nitp/",
      linkedin: "https://www.linkedin.com/company/hackslash/",
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
          <div
            key={id}
            className={`md:w-1/3 flex bg-${item.border} flex items-center p-4 rounded-s-full rounded-e-full`}
          >
            <div className="w-1/3">
              <Image className="w-full" src={item.logo} alt={item.title} />
            </div>
            <div className="w-2/3">
              <h2 className="text-3xl text-center mb-3">{item.title}</h2>
              <div className="flex justify-center">
                <a
                  href={item.insta}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center aspect-square px-3 border-2 z-[999999999] flex items-center justify-center rounded-full mx-1 hover:text-orange-400 transition-colors hover:border-orange-400"
                >
                  <Image className="w-4" src={instaIcon} alt={item.title} />
                </a>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center aspect-square px-3 border-2 z-[999999999] flex items-center justify-center rounded-full mx-1 hover:text-orange-400 transition-colors hover:border-orange-400"
                >
                  <Image className="w-4" src={linkedinIcon} alt={item.title} />
                </a>
                <a
                  href={item.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center aspect-square px-3 border-2 z-[999999999] flex items-center justify-center rounded-full mx-1 hover:text-orange-400 transition-colors hover:border-orange-400"
                >
                  <Image className="w-4" src={fbIcon} alt={item.title} />
                </a>
                <a
                  href={item.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center aspect-square px-3 border-2 z-[999999999] flex items-center justify-center rounded-full mx-1 hover:text-orange-400 transition-colors hover:border-orange-400"
                >
                  <Image className="w-4" src={twitterIcon} alt={item.title} />
                </a>
                <a
                  href={item.web}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center aspect-square px-3 border-2 z-[999999999] flex items-center justify-center rounded-full mx-1 hover:text-orange-400 transition-colors hover:border-orange-400"
                >
                  <Image className="w-4" src={webIcon} alt={item.title} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

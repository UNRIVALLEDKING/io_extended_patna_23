import {
  fbIcon,
  instaIcon,
  linkedinIcon,
  telegramIcon,
  twitterIcon,
  youtubeIcon,
} from "@/Assets/SNS";
import Image from "next/image";

export default function SNS() {
  const SNSLinks = [
    {
      title: "linkedin",
      icon: linkedinIcon,
      url: "https://www.linkedin.com/company/gdg-patna",
    },
    {
      title: "Telegram",
      icon: telegramIcon,
      url: "https://t.me/gdgpatna",
    },
    {
      title: "Facebook",
      icon: fbIcon,
      url: "https://www.facebook.com/gdgpatna",
    },
    {
      title: "Instagram",
      icon: instaIcon,
      url: "https://www.instagram.com/gdgpatna",
    },
    {
      title: "Twitter",
      icon: twitterIcon,
      url: "https://twitter.com/gdgpatna",
    },
    {
      title: "Youtube",
      icon: youtubeIcon,
      url: "https://www.youtube.com/c/GDGPatna",
    },
  ];

  return (
    <>
      <div className="flex gap-1 justify-center lg:mt-2 mt-3 mb-2">
        {SNSLinks.map((item, id) => {
          return (
            <a
              key={id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-center aspect-square px-3 border-2 z-[999999999] flex items-center justify-center rounded-full w-full mx-1 hover:text-orange-400 transition-colors hover:border-orange-400"
            >
              <Image className="w-4" src={item.icon} alt={item.title} />
            </a>
          );
        })}
      </div>
    </>
  );
}

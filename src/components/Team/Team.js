import {
  Bg1,
  Bg2,
  InstagramIcon,
  TeamTri,
  TwitterIcon,
  linkedinIcon,
  team1,
} from "@/Assets/team";
import Image from "next/image";
import { TeamData } from "./Teamdata";

export default function Team() {
  return (
    <section id="team" className="relative">
      <h1 className="mt-10 mb-2 text-center capitalize text-2xl z-[999999]">
        Our Team
      </h1>
      <hr className="w-1/5 mx-auto" />
      <div className="relative">
        <Image
          className="w-1/2 absolute top-0 right-0 z-0 opacity-50"
          src={Bg1}
          alt="io extended"
        />
        <Image
          className="w-1/2 absolute -top-8 rotate-90 -left-[20%] -z-10 opacity-50"
          src={Bg2}
          alt="io extended"
        />
      </div>
      <div className="flex flex-row mt-[150px] flex-wrap z-[999999]">
        {TeamData.map((item, id) => (
          <div className="w-full md:w-1/4 py-4 z-[999999]" key={id}>
            <div className="flex flex-row items-start my-10 justify-center">
              <div
                className={`w-2/3 md:w-1/2 bg-transparent text-center relative`}
              >
                <div className="w-[105%] -translate-x-[2.5%] absolute bottom-6">
                  <Image className="w-full" src={TeamTri} alt="io extended" />
                </div>
                <div
                  className={`${item.color} -translate-y-[30%] p-2 rounded-t-full rounded-b-full pb-10 md:pb-24`}
                >
                  <Image
                    src={team1}
                    alt="io extended"
                    className="w-full rounded-full aspect-square border-black border-2 object-cover"
                  />
                  <h2 className="text-4xl">{item.name}</h2>
                  <p className="text-xl">designation</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 px-3 ">
                <div className="">
                  <a href={item.linkedin} target="_blank" className="w-[50px]">
                    <Image
                      src={linkedinIcon}
                      className="w-[30px] md:w-[50px] aspect-sqaure h-auto"
                      alt="io extended"
                    />
                  </a>
                </div>
                <div className="">
                  <a href={item.linkedin} target="_blank" className="w-[50px]">
                    <Image
                      src={InstagramIcon}
                      className="w-[30px] md:w-[50px] aspect-sqaure h-auto"
                      alt="io extended"
                    />
                  </a>
                </div>
                <div className="">
                  <a href={item.linkedin} target="_blank" className="w-[50px]">
                    <Image
                      src={TwitterIcon}
                      className="w-[30px] md:w-[50px] aspect-sqaure h-auto"
                      alt="io extended"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

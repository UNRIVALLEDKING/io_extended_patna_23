import { instaIcon, linkedinIcon, twitterIcon } from "@/Assets/SNS";
import { Bg1, Bg2, TeamTri, team1 } from "@/Assets/team";
import Image from "next/image";
import { speakersData } from "./SpeakersData";

export default function Speakers() {
  return (
    <section id="speakers">
      <h1 className="mt-10 mb-2 text-center capitalize text-2xl z-[999999]">
        Speakers
      </h1>
      <hr className="w-1/2 md:w-1/5 mx-auto" />
      <div className="relative">
        <Image
          className="w-1/2 absolute -top-8 rotate-90 -left-[20%] -z-10 opacity-50"
          src={Bg2}
          alt="io extended"
        />
      </div>
      <div
        className="flex flex-row 
     mt-[120px]
       flex-wrap z-[999999] md:min-h-[50vh] justify-center items-center"
      >
        {speakersData.map((item, id) => (
          <div
            className="w-full mt-5 md:mt-0 md:w-1/4 py-4 md:py-10 z-[999999]"
            key={id}
          >
            <div className="flex flex-row items-start my-10 justify-center">
              <div className={`w-2/3 bg-transparent text-center relative`}>
                <div className="w-[105%] -translate-x-[2.5%] absolute bottom-6">
                  <Image className="w-full" src={TeamTri} alt="io extended" />
                </div>
                <div
                  className={`${item.color} -translate-y-[30%] p-2 rounded-t-full rounded-b-full pb-10 md:pb-24 min-h-[50vh] md:min-h-[40vh]`}
                >
                  <Image
                    src={item.image}
                    alt="io extended"
                    className="w-full rounded-full aspect-square border-black border-2 object-cover"
                  />
                  <h2 className="text-3xl">{item.name}</h2>
                  <p className="text-lg">{item.team}</p>
                </div>
              </div>
              <div className="px-3 gap-2 flex flex-col">
                <div className="border-white rounded-full p-3 border-2">
                  <a href={item.linkedin} target="_blank" className="w-[50px]">
                    <Image
                      src={linkedinIcon}
                      className="w-[15px] md:w-[20px] aspect-sqaure h-auto m-auto"
                      alt="io extended"
                    />
                  </a>
                </div>
                {item.insta ? (
                  <>
                    <div className="border-white rounded-full p-3 border-2">
                      <a href={item.insta} target="_blank" className="w-[50px]">
                        <Image
                          src={instaIcon}
                          className="w-[15px] md:w-[20px] aspect-sqaure h-auto m-auto"
                          alt="io extended"
                        />
                      </a>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                {item.twitter ? (
                  <>
                    <div className="border-white rounded-full p-3 border-2">
                      <a
                        href={item.twitter}
                        target="_blank"
                        className="w-[50px]"
                      >
                        <Image
                          src={twitterIcon}
                          className="w-[15px] md:w-[20px] aspect-sqaure h-auto m-auto"
                          alt="io extended"
                        />
                      </a>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* <p className="md:w-2/3 w-[90%] text-center md:text-2xl">
          Brace yourselves for an epic lineup of tech visionaries and industry
          leaders at Google I/O Extended Patna! We&apos;re currently fine-tuning
          the final details and preparing to unveil the star-studded roster of
          speakers who will take the stage. Get ready to be inspired, informed,
          and blown away by their expertise and insights. Keep an eye on our
          website as we&apos;ll be announcing the lineup very soon! Stay tuned
          for an unforgettable experience that will ignite your passion for all
          things tech. It&apos;s time to level up! 💫 #GoogleIOExtendedPatna
          #SpeakersRevealComingSoon #TechEnthusiastsUnite
        </p> */}
      </div>
    </section>
  );
}

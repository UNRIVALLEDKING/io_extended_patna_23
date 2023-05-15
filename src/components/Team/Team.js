import { Bg1, Bg2, TeamTri, team1 } from "@/Assets/team";
import Image from "next/image";
import {
  DesignTeam,
  LeadList,
  OperationTeam,
  TeamData,
  TechTeam,
} from "./Teamdata";
import { githubIcon, instaIcon, linkedinIcon, twitterIcon } from "@/Assets/SNS";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <section id="team" className="relative">
      {/* New Card */}

      <h2 className="text-5xl mt-10 text-center">Meet Our Team</h2>
      <div className="flex items-center w-screen mt-7">
        <div className="container px-8 flex flex-wrap justify-center ml-auto mr-auto gap-8 items-start">
          {LeadList.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center w-3/4 sm:w-2/5 md:w-3/5 lg:w-2/12"
            >
              <div
                className="relative flex justify-center items-center bg-cover bg-no-repeat w-full rounded-full"
                style={{ backgroundImage: `url(${item.image.src})` }}
              >
                <Image
                  className="rounded-full aspect-square w-full object-cover z-30"
                  src={item.frame}
                  alt={item.name}
                />
              </div>
              <div className="mt-3 text-center cursor-default">
                <h3 className="text-xl">{item.name}</h3>
                <h4 className="text-gray-400">{item.desc}</h4>
              </div>
              <div className="flex flex-row justify-evenly w-full mt-2">
                <div className="flex flex-row justify-evenly w-full mt-2">
                  {item.github ? (
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <Image
                        src={githubIcon}
                        alt="github"
                        className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                      />
                    </a>
                  ) : (
                    <></>
                  )}
                  {item.linkedin ? (
                    <>
                      <a href={item.linkedin} target="_blank" rel="noreferrer">
                        <Image
                          src={linkedinIcon}
                          alt="linkedin"
                          className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                        />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {item.twitter ? (
                    <>
                      <a href={item.twitter} target="_blank" rel="noreferrer">
                        <Image
                          src={twitterIcon}
                          alt="twitter"
                          className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                        />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tech Team */}
      <TeamCard data={TechTeam} title="Tech Team" />

      {/* Operation Lead */}
      <TeamCard data={OperationTeam} title="Operation Team" />
      {/* Design Lead */}
      <TeamCard data={DesignTeam} title="Design Team" />
    </section>
  );
}

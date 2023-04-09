import { Bg1, Bg2, InstagramIcon, TwitterIcon, linkedinIcon, team1 } from "@/Assets/team";
import Image from "next/image";
import { TeamData } from "./Teamdata";

export default function Team() {
return <section id="team">Our Team

<h1 className="mt-10 mb-2 text-center capitalize text-2xl">Our Team</h1>
<hr className="w-1/5 mx-auto"/>

<div className="flex flex-row flex-wrap">
    {TeamData.map((item,id)=>(
        <div className="w-1/3 py-4" key={id}>
    <div className="flex items-center justify-center ">
        <div className={`w-1/2 bg-black ${item.topborder} border-t-2 p-2 rounded-t-full rounded-b-full pb-24 text-center `} >
            <div className={`${item.color} p-2 rounded-t-full rounded-b-full pb-24`}><Image src={team1}
            alt="name"
            className="w-full rounded-full aspect-square border-black border-2 object-cover "
            />
            <h2 className="text-4xl">{item.name}</h2>
            <p className="text-xl">
                designation
            </p></div>
        </div>
        <div className="flex flex-col gap-4 px-3">
            <div className="">
           <a href={item.linkedin} target="_blank" className="w-[50px]"> <Image src={linkedinIcon } 
            className="w-[50px] aspect-sqaure h-auto" /></a>
            </div>
            <div className="" >
            <Image src={InstagramIcon } 
            className="w-[50px] aspect-sqaure h-auto" />
            </div>
            <div className="">
            <Image src={TwitterIcon }
            className="w-[50px] aspect-sqaure h-auto"  /></div>
        </div>
        
        </div></div>
    ))}
    
{/* <div className="py-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img src="https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg" 
            alt="abc" 
            className="rounded-full max-w-xs"
            ></img>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 "><b>abc</b></div>
                <p1 className="text-gray-400">designation</p1>
            </div>

        </div>
    </div> */}

</div>
</section>;
}



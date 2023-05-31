import { Blue, Green, Red, Yellow } from "@/Assets/Frames";
import {
  Aditya,
  AdityaDesign,
  AnuragVerma,
  BarkhaAgarwal,
  Hritik,
  Priyanshu,
  Shekhar,
  Shruti,
} from "@/Assets/TeamMembers";

export const LeadList = [
  {
    name: "Anurag Verma",
    desc: "Organizer",
    image: AnuragVerma,
    frame: Red,
    linkedin: "https://www.linkedin.com/in/anuragver/",
    twitter: "https://twitter.com/anuragceg",
  },
  {
    name: "Barkha Agarwal",
    desc: "Co-Organizer",
    frame: Blue,
    image: BarkhaAgarwal,
  },
];

const TechTeam = [
  {
    name: "Aditya Kumar",
    desc: "Technical Lead",
    image: Aditya,
    frame: Blue,
    linkedin: "https://www.linkedin.com/in/unrivalledking/",
    github: "https://github.com/UNRIVALLEDKING",
    twitter: "https://twitter.com/UNRIVALLED_KING",
  },
];
const OperationTeam = [];
const DesignTeam = [
  {
    name: "Hritik Kumar",
    desc: "Design Lead",
    image: Hritik,
    frame: Red,
    linkedin: "https://www.linkedin.com/in/hritikshiva/",
    twitter: "",
  },
  {
    name: "Shruti Agrawal",
    desc: "Design Team",
    image: Shruti,
    frame: Blue,
    linkedin: "https://www.linkedin.com/in/shruti-agrawal-7bb416243/",
  },
  {
    name: "Aditya Kumar",
    desc: "Design Team",
    image: AdityaDesign,
    frame: Yellow,
    linkedin: "https://www.linkedin.com/in/adityagit/",
    website: "https://www.behance.net/igraphixstudio/",
    github: "https://github.com/rootaditya",
  },
];

export { TechTeam, OperationTeam as OperationTeam, DesignTeam as DesignTeam };

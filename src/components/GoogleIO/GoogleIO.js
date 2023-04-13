import { crowd, io_extended } from "@/Assets";
import Image from "next/image";

export default function GoogleIO() {
  const io_data = [
    {
      id: 1,
      heading: "Technical Content",
      para: "At Google I/O extended 2023, developers from diverse domains will share their experiences and knowledge on the latest Google technology and announcements through self-directed code-labs and presentations. This will be a great opportunity for individuals to gain technical content and insights on planning their own journey and working on their plans. As Google's mission is to organize the world's information and make it accessible to everyone, attending events like these can be beneficial for those looking to stay up-to-date with the latest developments in the tech field.",
      color: "bg-googleRed",
    },
    {
      id: 2,
      heading: "Codelabs",
      para: "Codelabs worth working upon awaits you on the event . Come and acquire some tips and tricks from the speakers . Initiate your journey towards a new technology and get to learn it from experts.",
      color: "bg-googleBlue",
    },
    {
      id: 3,
      heading: "Networking",
      para: "Enlarge your connections by meeting more techy friends like you . In today’s world , your network is your net-worth. Here , GDG brings you an opportunity to interact and connect to like-minded and masters of the tech world.",
      color: "bg-googleGreen",
    },
    {
      id: 4,
      heading: "heading 4",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas ducimus nisi reprehenderit, iusto dolores provident molestias voluptate corporis. Debitis culpa impedit minus, necessitatibus quibusdam nisi quae repudiandae asperiores dicta.",
      color: "bg-googleYellow",
    },
  ];
  return (
    <section id="google-io" className="text-center">
      <h2 className="text-3xl">What is Google IO Extended ?</h2>
      <div className="flex gap-6 flex-col md:flex-row px-4">
        <div className=" w-full md:w-1/2">
          <Image className="w-full h-100" src={crowd} alt="io extended" />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div>
            <Image className="w-full" src={io_extended} alt="io extended" />
          </div>
          <div>
            <p>
              Google I/O extended 2023 – a place to meet developers and tech
              enthusiasts who are interested in Google products and APIs. This
              day-long event will offer updates on Google&apos;s latest products
              and features, presented by Googlers themselves. The event is an
              extension of the annual Google I/O conference, which is focused on
              innovation in the open and exploring new technologies. With a
              format similar to Google Developer Day, attendees of Google I/O
              extended will get to participate in discussions, Q&A sessions, and
              network with like-minded individuals. GDG Patna is committed to
              providing a platform for individuals to learn and grow their
              skills, and Google I/O extended is an excellent opportunity to do
              so.
            </p>
          </div>
        </div>
      </div>

      <div className="flex my-2 gap-4 flex-col md:flex-row">
        {io_data.map((item, id) => (
          <div className="w-full md:w-1/4 px-4" key={id}>
            <h1 className={`${item.color} py-3 rounded-full`}>
              {item.heading}
            </h1>
            <p className="p-2">{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

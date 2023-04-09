import Nav from "@/components/Nav/Nav";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Google I/O Extended Patna 2023",
  description:
    "Google I/O extended 2023 – a place to meet developers and tech enthusiasts who are interested in Google products and APIs. This day-long event will offer updates on Google's latest products and features, presented by Googlers themselves. The event is an extension of the annual Google I/O conference, which is focused on innovation in the open and exploring new technologies. With a format similar to Google Developer Day, attendees of Google I/O extended will get to participate in discussions, Q&A sessions, and network with like-minded individuals. GDG Patna is committed to providing a platform for individuals to learn and grow their skills, and Google I/O extended is an excellent opportunity to do so.",
  icons: {
    icon: "/IO_Extended_Patna_2023.png",
    shortcut: "/IO_Extended_Patna_2023.png",
    apple: "/IO_Extended_Patna_2023.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/IO_Extended_Patna_2023.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-google text-white">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

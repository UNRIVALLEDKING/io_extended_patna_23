import HomePage from "@/components/Home/HomePage";
import styles from "./page.module.css";
import GoogleIO from "@/components/GoogleIO/GoogleIO";
import Speakers from "@/components/Speakers/Speakers";
import Team from "@/components/Team/Team";
import Sponsors from "@/components/Sponsors/Sponsors";
import CommunityPartners from "@/components/CommunityPartners/CommunityPartners";
import FAQ from "@/components/FAQ/FAQ";
import Registrations from "@/components/Registrations/Registrations";

export default function Home() {
  return (
    <main>
      <HomePage />
      <GoogleIO />
      <Speakers />
      <Sponsors />
      <Team />
      <CommunityPartners />
      <Registrations />
      <FAQ />
    </main>
  );
}

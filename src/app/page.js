import HomePage from "@/components/Home/HomePage";
import GoogleIO from "@/components/GoogleIO/GoogleIO";
import Speakers from "@/components/Speakers/Speakers";
import Sponsors from "@/components/Sponsors/Sponsors";
import CommunityPartners from "@/components/CommunityPartners/CommunityPartners";
import FAQ from "@/components/FAQ/FAQ";
import Registrations from "@/components/Registrations/Registrations";

export default function Home() {
  return (
    <main className="bg-googleIoBg bg-repeat bg-center">
      <HomePage />
      <GoogleIO />
      <Speakers />
      <Sponsors />
      <CommunityPartners />
      <Registrations />
      <FAQ />
    </main>
  );
}

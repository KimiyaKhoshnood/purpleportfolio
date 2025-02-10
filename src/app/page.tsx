import Contact from "@/Components/Contact/Contact";
import ExperienceAndEducation from "@/Components/ExperienceAndEducation/ExperienceAndEducation";
import HeroSection from "@/Components/HeroSection/HeroSection";
import QualityServices from "@/Components/QualityServicesBox/QualityServices";
import RecentWorks from "@/Components/RecentWorks/RecentWorks";
import Skills from "@/Components/Skills/Skills";
import StatusNumbersBox from "@/Components/StatusNumbersBox/StatusNumbersBox";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <StatusNumbersBox/>
      <QualityServices/>
      <RecentWorks/>
      <ExperienceAndEducation/>
      <Skills/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
}

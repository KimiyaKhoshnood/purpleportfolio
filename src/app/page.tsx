import Contact from "@/Sections/Home/Contact/Contact";
import ExperienceAndEducation from "@/Sections/Home/ExperienceAndEducation/ExperienceAndEducation";
import HeroSection from "@/Sections/Home/HeroSection/HeroSection";
import QualityServices from "@/Sections/Home/QualityServicesBox/QualityServices";
import RecentWorks from "@/Sections/Home/RecentWorks/RecentWorks";
import Skills from "@/Sections/Home/Skills/Skills";
import StatusNumbersBox from "@/Sections/Home/StatusNumbersBox/StatusNumbersBox";


export default function Home() {
  
  return (
    <div className="">
      <HeroSection />
      <StatusNumbersBox/>
      <ExperienceAndEducation/>
      <RecentWorks/>
      <QualityServices/>
      <Skills/>
      <Contact/>
    </div>
  );
}

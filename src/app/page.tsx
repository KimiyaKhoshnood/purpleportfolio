import Contact from "@/Sections/Home/Contact/Contact";
import ExperienceAndEducation from "@/Sections/Home/ExperienceAndEducation/ExperienceAndEducation";
import HeroSection from "@/Sections/Home/HeroSection/HeroSection";
import QualityServices from "@/Sections/Home/QualityServicesBox/QualityServices";
// import RecentWorks from "@/Sections/Home/RecentWorks/RecentWorks";
import Skills from "@/Sections/Home/Skills/Skills";
import StatusNumbersBox from "@/Sections/Home/StatusNumbersBox/StatusNumbersBox";
import Reveal from "@/Sections/Layout/Reveal";


export default function Home() {

  return (
    <div className="">
      <HeroSection />
      <Reveal><StatusNumbersBox/></Reveal>
      <Reveal><ExperienceAndEducation/></Reveal>
      {/* <RecentWorks/> */}
      <Reveal><QualityServices/></Reveal>
      <Reveal><Skills/></Reveal>
      <Reveal><Contact/></Reveal>
    </div>
  );
}

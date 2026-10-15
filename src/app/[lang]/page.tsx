import type { Metadata } from "next";
import Contact from "@/Sections/Home/Contact/Contact";
import ExperienceAndEducation from "@/Sections/Home/ExperienceAndEducation/ExperienceAndEducation";
import HeroSection from "@/Sections/Home/HeroSection/HeroSection";
import QualityServices from "@/Sections/Home/QualityServicesBox/QualityServices";
// import RecentWorks from "@/Sections/Home/RecentWorks/RecentWorks";
import Skills from "@/Sections/Home/Skills/Skills";
import StatusNumbersBox from "@/Sections/Home/StatusNumbersBox/StatusNumbersBox";
import Reveal from "@/Sections/Layout/Reveal";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type PageProps = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  return {
    alternates: {
      canonical: localePath(isLocale(lang) ? lang : defaultLocale, "/"),
      languages: { en: "/", fa: "/fa" },
    },
  }
}

export default async function Home({ params }: PageProps) {
  const { lang: param } = await params
  const dict = getDictionary(isLocale(param) ? param : defaultLocale)

  return (
    <div className="">
      <HeroSection dict={dict.hero} />
      <Reveal><StatusNumbersBox stats={dict.stats}/></Reveal>
      <Reveal><ExperienceAndEducation dict={dict.timeline}/></Reveal>
      {/* <RecentWorks/> */}
      <Reveal><QualityServices dict={dict.services}/></Reveal>
      <Reveal><Skills dict={dict.skills}/></Reveal>
      <Reveal><Contact dict={dict.contact}/></Reveal>
    </div>
  );
}

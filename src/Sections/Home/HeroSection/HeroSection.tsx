import Image from "next/image";
import purplePerson from "../../../../public/undraw_mobile-development_tjxm.svg"
import DownloadResumeBtn from "./DownloadResumeBtn";
import SocialLinks from "@/Sections/Layout/SocialLinks";
import { Dictionary } from "@/i18n/dictionaries";

// ----------------------------------------------------------------------

const HeroActions = ({ downloadCV }: { downloadCV: string }) => (
  <div className="flex w-full h-fit flex-wrap items-center md:justify-start justify-center gap-4">
    <DownloadResumeBtn label={downloadCV} />
    <SocialLinks />
  </div>
)

// ----------------------------------------------------------------------

const HeroSection = ({ dict }: { dict: Dictionary["hero"] }) => {
  const { badge, title, tagline, downloadCV, outline } = dict

  return (
    <div className="relative overflow-hidden -mt-20 pt-20 flex flex-col bg-gradient-to-tr rtl:bg-gradient-to-tl from-white via-white to-brand-light">
      <div
        className="absolute top-0 right-0 w-full h-full xl:text-[400px] lg:text-[300px] md:text-[250px] text-[0] opacity-20 text-transparent font-extrabold font-mono flex justify-center items-center"
        id="textOutline"
      >
        <div>{outline}</div>
      </div>
      <div className="flex flex-1 md:flex-row flex-col items-center z-10 md:py-16 pb-12">
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center gap-5 md:ps-20 md:pe-0 px-7 md:text-start text-center md:items-start items-center">
          <span className="inline-flex items-center gap-2 w-fit rounded-full bg-white/70 ring-1 ring-brand/20 px-4 py-1.5 text-sm font-medium text-brand-dark backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {badge}
          </span>
          <h1
            className="xl:text-7xl lg:text-6xl text-5xl font-bold tracking-tight leading-[1.05] rtl:leading-[1.3] pb-2"
            id="textGradiant"
          >
            {title[0]}<br className="md:block hidden" /> {title[1]}
          </h1>
          <p className="md:block hidden lg:text-xl text-lg text-[#140C1C]/70 max-w-[480px] leading-relaxed">
            {tagline}
          </p>
          <div className="md:flex hidden pt-3">
            <HeroActions downloadCV={downloadCV} />
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex justify-center items-center py-8">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-brand/30 blur-3xl" aria-hidden />
            <div className="relative bg-gradient-to-br from-brand-dark via-[#3b1d78] to-brand rounded-[2rem] lg:w-[380px] lg:h-[450px] md:w-[320px] w-[290px] md:h-[400px] h-[360px] rotate-6 hover:rotate-0 transition-transform duration-500 ease-out shadow-2xl shadow-brand-dark/30 ring-1 ring-white/10 flex">
              <Image src={purplePerson} width={380} className="p-10" alt="" priority={true} />
            </div>
          </div>
        </div>
        <p className="md:hidden block px-7 pb-6 text-lg text-center text-[#140C1C]/70">
          {tagline}
        </p>
        <div className="md:hidden flex px-7">
          <HeroActions downloadCV={downloadCV} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

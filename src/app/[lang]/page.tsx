import type { Metadata } from "next";
import Contact from "@/Sections/Home/Contact/Contact";
import ExperienceAndEducation from "@/Sections/Home/ExperienceAndEducation/ExperienceAndEducation";
import HeroSection from "@/Sections/Home/HeroSection/HeroSection";
import QualityServices from "@/Sections/Home/QualityServicesBox/QualityServices";
import Skills from "@/Sections/Home/Skills/Skills";
import StatusNumbersBox from "@/Sections/Home/StatusNumbersBox/StatusNumbersBox";
import Works from "@/Sections/Home/Works/Works";
import Reveal from "@/Sections/Layout/Reveal";
import { defaultLocale, isLocale, Locale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { formatDate, getProjects, getSiteContent, localizeDigits, pick } from "@/content";
import { skillIcons } from "@/content/skillIcons";

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
  const lang: Locale = isLocale(param) ? param : defaultLocale
  const dict = getDictionary(lang)
  const { profile, resume, skills, home } = await getSiteContent()
  const projects = await getProjects()

  const socials = { github: profile.github, linkedin: profile.linkedin, email: profile.email, telegram: profile.telegram }

  // newest first; an empty end date means "still here"
  const timeline = (items: typeof resume.experience) => [...items]
    .sort((a, b) => (b.start ?? "").localeCompare(a.start ?? ""))
    .map(item => ({
      date: `${formatDate(item.start ?? "", lang, item.precision)} - ${item.end ? formatDate(item.end, lang, item.precision) : dict.timeline.present}`,
      title: pick(item.title, lang),
      span: pick(item.place, lang),
      description: pick(item.description, lang),
      current: !item.end,
    }))

  return (
    <div className="">
      <HeroSection
        badge={pick(profile.badge, lang)}
        title={pick(profile.role, lang)}
        tagline={pick(profile.tagline, lang)}
        outline={dict.hero.outline}
        downloadCV={dict.hero.downloadCV}
        resumeHref={(lang === "fa" && profile.resumeFa) || profile.resume}
        socials={socials}
      />
      <Reveal>
        <StatusNumbersBox stats={home.stats.map(s => ({ num: localizeDigits(s.value, lang), label: pick(s.label, lang) }))}/>
      </Reveal>
      <Reveal>
        <ExperienceAndEducation
          experience={{ heading: dict.timeline.experienceHeading, items: timeline(resume.experience) }}
          education={{ heading: dict.timeline.educationHeading, items: timeline(resume.education) }}
        />
      </Reveal>
      {projects.length > 0 && (
        <Reveal>
          <Works
            dict={dict.works}
            items={projects.map(({ slug, entry }) => ({
              href: localePath(lang, `/project/${slug}`),
              title: (lang === "fa" && entry.titleFa.trim()) || entry.title,
              summary: pick(entry.summary, lang),
              cover: entry.cover,
              tags: entry.tags,
            }))}
          />
        </Reveal>
      )}
      <Reveal>
        <QualityServices
          heading={dict.services.heading}
          intro={pick(home.servicesIntro, lang)}
          items={home.services.map((s, i) => ({
            num: localizeDigits(String(i + 1).padStart(2, "0"), lang),
            h3: pick(s.title, lang),
            p: pick(s.description, lang),
          }))}
        />
      </Reveal>
      <Reveal>
        <Skills
          heading={dict.skills.heading}
          intro={pick(skills.intro, lang)}
          items={skills.items.map(({ name, icon, image }) => {
            const known = icon !== "none" ? skillIcons[icon] : null
            if (known && "img" in known) return { skillName: name, img: known.img }
            if (known) return { skillName: name, Icon: known.Icon, iconColor: known.color }
            return { skillName: name, img: image ?? undefined }
          })}
        />
      </Reveal>
      <Reveal>
        <Contact
          dict={dict.contact}
          text={pick(home.contactText, lang)}
          email={profile.email}
          phone={profile.phone || null}
          address={pick(profile.address, lang)}
          socials={socials}
        />
      </Reveal>
    </div>
  );
}

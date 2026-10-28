import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetails from '@/Sections/Project/ProjectDetails'
import { defaultLocale, isLocale, Locale, localePath, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { formatDate, getProjects, paragraphs, pick, ProjectEntry } from '@/content'

type PageProps = { params: Promise<{ lang: string, slug: string }> }

// only published projects get a page; anything else is a 404
export const dynamicParams = false

export async function generateStaticParams() {
  const projects = await getProjects()
  return locales.flatMap(lang => projects.map(({ slug }) => ({ lang, slug })))
}

const projectTitle = (project: ProjectEntry, lang: Locale) =>
  (lang === "fa" && project.entry.titleFa.trim()) || project.entry.title

const load = async ({ params }: PageProps) => {
  const { lang: param, slug } = await params
  const lang = isLocale(param) ? param : defaultLocale
  const projects = await getProjects()
  const index = projects.findIndex(p => p.slug === slug)
  return { lang, projects, index }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { lang, projects, index } = await load(props)
  const project = projects[index]
  if (!project) return {}
  return {
    title: projectTitle(project, lang),
    description: pick(project.entry.summary, lang),
    alternates: {
      canonical: localePath(lang, `/project/${project.slug}`),
      languages: { en: `/project/${project.slug}`, fa: `/fa/project/${project.slug}` },
    },
  }
}

const page = async (props: PageProps) => {
  const { lang, projects, index } = await load(props)
  const project = projects[index]
  if (!project) notFound()

  const dict = getDictionary(lang)
  const { entry } = project
  // projects are sorted newest first, so "previous" is the older one
  const toLink = (p: ProjectEntry | undefined) => p ? { href: localePath(lang, `/project/${p.slug}`), title: projectTitle(p, lang) } : null

  return (
    <ProjectDetails
      dict={dict.project}
      backHref={localePath(lang, "/#worksID")}
      title={projectTitle(project, lang)}
      summary={pick(entry.summary, lang)}
      paragraphs={paragraphs(pick(entry.description, lang))}
      cover={entry.cover}
      date={formatDate(entry.date, lang)}
      client={pick(entry.client, lang)}
      tags={entry.tags.map(tag => dict.works.tags[tag])}
      stack={entry.stack}
      liveUrl={entry.liveUrl}
      repoUrl={entry.repoUrl}
      prev={toLink(projects[index + 1])}
      next={toLink(projects[index - 1])}
    />
  )
}

export default page

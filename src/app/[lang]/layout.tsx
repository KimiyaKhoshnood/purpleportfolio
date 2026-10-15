import type { Metadata } from "next";
import { Baloo_Bhaijaan_2, Geist, Geist_Mono, Lalezar } from "next/font/google";
import "../globals.css";
import Header from "@/Sections/Layout/Header/Header";
import Footer from "@/Sections/Layout/Footer/Footer";
import { defaultLocale, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Persian: rounded body font + playful display font for headings
const baloo = Baloo_Bhaijaan_2({
  variable: "--font-fa-body",
  subsets: ["arabic", "latin"],
});

const lalezar = Lalezar({
  variable: "--font-fa-display",
  weight: "400",
  subsets: ["arabic", "latin"],
});

type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>

export function generateStaticParams() {
  return locales.map(lang => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params
  const { meta } = getDictionary(isLocale(lang) ? lang : defaultLocale)
  return {
    metadataBase: new URL("https://kimiyakhoshnood.vercel.app"),
    title: meta.title,
    description: meta.description,
  }
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang: param } = await params
  const lang = isLocale(param) ? param : defaultLocale
  const dict = getDictionary(lang)

  return (
    <html
      lang={lang}
      dir={dict.dir}
      className={`${geistSans.variable} ${geistMono.variable} ${lang === "fa" ? `${baloo.variable} ${lalezar.variable}` : ""}`}
    >
      <body className="font-sans antialiased">
        <Header lang={lang} dict={dict.nav}/>
        {children}
        <Footer lang={lang} dict={dict}/>
      </body>
    </html>
  );
}

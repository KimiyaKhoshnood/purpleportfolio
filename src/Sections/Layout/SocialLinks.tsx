import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import Link from "next/link";

// ----------------------------------------------------------------------

export type Socials = {
    github: string | null,
    linkedin: string | null,
    email: string | null,
    telegram: string | null,
}

// ----------------------------------------------------------------------

const SocialLinks = ({ links, dark = false }: { links: Socials, dark?: boolean }) => {
    const socials = [
        { label: "GitHub", href: links.github, Icon: FaGithub },
        { label: "LinkedIn", href: links.linkedin, Icon: FaLinkedinIn },
        { label: "Email", href: links.email && `mailto:${links.email}`, Icon: TbMailFilled },
        { label: "Telegram", href: links.telegram, Icon: FaTelegramPlane },
    ].filter((s): s is typeof s & { href: string } => !!s.href)

    return (
        <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
                <Link
                    key={label}
                    aria-label={`Link to ${label}`}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-[42px] h-[42px] flex items-center justify-center rounded-full border transition-all duration-200 ease-out hover:-translate-y-0.5 ${dark
                        ? "border-white/20 text-white/80 hover:bg-white hover:text-brand-dark"
                        : "border-brand/40 text-brand hover:bg-brand hover:border-brand hover:text-white hover:shadow-lg hover:shadow-brand/30"}`}
                >
                    <Icon size={18} />
                </Link>
            ))}
        </div>
    )
}

export default SocialLinks

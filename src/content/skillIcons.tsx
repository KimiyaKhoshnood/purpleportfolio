import { IconType } from "react-icons"
import {
    SiBootstrap, SiCss3, SiDocker, SiFigma, SiGraphql, SiHtml5, SiJest, SiKubernetes, SiLinux, SiMongodb, SiMysql,
    SiNestjs, SiNodedotjs, SiPostgresql, SiPrisma, SiPython, SiRabbitmq, SiRedis, SiTailwindcss,
} from "react-icons/si"
import { TbTopologyStar3 } from "react-icons/tb"
import { SkillIconKey } from "./skillIconOptions"

// ----------------------------------------------------------------------

// Either a full-colour logo from /public or a react-icon with its brand colour
export type SkillIcon = { img: string } | { Icon: IconType, color: string }

export const skillIcons: Record<Exclude<SkillIconKey, "none">, SkillIcon> = {
    react: { img: "/ReactLogo.svg" },
    nextjs: { img: "/NextLogo.svg" },
    typescript: { img: "/TsLogo.svg" },
    javascript: { img: "/JsLogo.svg" },
    redux: { img: "/ReduxLogo.svg" },
    git: { img: "/GitLogo.svg" },
    nestjs: { Icon: SiNestjs, color: "#E0234E" },
    nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
    postgresql: { Icon: SiPostgresql, color: "#4169E1" },
    prisma: { Icon: SiPrisma, color: "#2D3748" },
    redis: { Icon: SiRedis, color: "#FF4438" },
    docker: { Icon: SiDocker, color: "#2496ED" },
    microservices: { Icon: TbTopologyStar3, color: "#8650F6" },
    tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
    bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
    html: { Icon: SiHtml5, color: "#E34F26" },
    css: { Icon: SiCss3, color: "#1572B6" },
    python: { Icon: SiPython, color: "#3776AB" },
    mongodb: { Icon: SiMongodb, color: "#47A248" },
    mysql: { Icon: SiMysql, color: "#4479A1" },
    graphql: { Icon: SiGraphql, color: "#E10098" },
    figma: { Icon: SiFigma, color: "#F24E1E" },
    linux: { Icon: SiLinux, color: "#FCC624" },
    kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
    rabbitmq: { Icon: SiRabbitmq, color: "#FF6600" },
    jest: { Icon: SiJest, color: "#C21325" },
}

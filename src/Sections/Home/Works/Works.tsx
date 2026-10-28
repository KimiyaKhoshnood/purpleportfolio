import WorksGrid, { WorkCard } from "./WorksGrid"
import { Dictionary } from "@/i18n/dictionaries"

// ----------------------------------------------------------------------

const Works = ({ dict, items }: { dict: Dictionary["works"], items: WorkCard[] }) => {
    return (
        <div id="worksID" className="flex flex-col items-center gap-8 md:p-20 px-5 py-16">
            <h2 className="font-bold md:text-5xl text-3xl tracking-tight p-2" id="textGradiant">{dict.heading}</h2>
            <WorksGrid items={items} allLabel={dict.all} tagLabels={dict.tags} />
        </div>
    )
}

export default Works

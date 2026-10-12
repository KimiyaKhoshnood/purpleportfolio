import ExperienceAndEducationEach, { ExperienceAndEducationEachProp } from "./ExperienceAndEducationEach"
import { PiStudentBold } from "react-icons/pi";
import { PiMedal } from "react-icons/pi";

// ----------------------------------------------------------------------

const ExperienceAndEducation = () => {
    const ExperienceProps: ExperienceAndEducationEachProp[] = [
        { date: "Jun 2024 - Aug 2024", title: "Manual QA Intern", span: "SD Studio, Tehran" },
        { date: "Mar 2025 - Dec 2025", title: "Front-end Developer", span: "Hazareh Sevom (HZ3), Tehran" },
        { date: "Dec 2025 - Present", title: "Software Engineer", span: "Orchid Pharmed, Tehran" },
    ];
    const EducationProps: ExperienceAndEducationEachProp[] = [
        { date: "2022 - 2025", title: "Statistics", span: "University of Tehran" },
        { date: "2025 - Present", title: "Software Engineering", span: "Islamic Azad University" },
    ];


    const columns = [
        { heading: "My Experience", Icon: PiMedal, items: ExperienceProps },
        { heading: "My Education", Icon: PiStudentBold, items: EducationProps },
    ]

    return (
        <>
            <div className="bg-brand-soft lg:px-20 px-5 py-20 gap-10 flex md:flex-row flex-col">
                {
                    columns.map(({ heading, Icon, items }) => (
                        <div className="md:w-1/2 w-full" key={heading}>
                            <h2 className="flex items-center gap-3 pb-8 font-bold lg:text-4xl text-3xl tracking-tight">
                                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-brand shadow-sm ring-1 ring-brand-dark/5">
                                    <Icon size={26} />
                                </span>
                                <span id="textGradiant">{heading}</span>
                            </h2>
                            {/* newest first */}
                            <ol className="relative ms-2 flex flex-col gap-5 border-s-2 border-brand-light">
                                {
                                    [...items].reverse().map((elem) => {
                                        return (<ExperienceAndEducationEach date={elem.date} title={elem.title} span={elem.span} key={elem.title} />)
                                    })
                                }
                            </ol>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ExperienceAndEducation
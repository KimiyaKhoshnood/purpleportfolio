import Link from "next/link"
import Image, { StaticImageData } from "next/image"

export type RecentWorksEachProps = {
    img : StaticImageData
    title: string
    about: string
    id : number
}

const RecentWorksEach = ({img, title, about, id}:RecentWorksEachProps) => {
    return(
        <>
        <Link id="eachWork" href={`/project/${id}`} className="md:w-[48%] w-full h-auto relative bg-black rounded-3xl">
            {/* <img className="rounded-2xl w-fit" src={img} alt="" /> */}
            <Image src={img} alt="sth" className="rounded-2xl w-full h-full opacity-70"></Image>
            <div className="absolute bottom-0 p-1 transition duration-300 opacity-0">
              <div className="bg-purple-600 shadow-lg md:p-5 p-4 text-white rounded-lg">
                <h3 className="lg:text-3xl text-lg font-bold md:leading-loose">{title}</h3>
                <span className="line-clamp-1 text-sm md:leading-loose">{about}</span>
              </div>
            </div>
        </Link>
        </>
    )
}

export default RecentWorksEach
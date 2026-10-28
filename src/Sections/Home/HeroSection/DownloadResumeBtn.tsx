import { FiDownload } from "react-icons/fi";

// ----------------------------------------------------------------------

const DownloadResumeBtn = ({ label, href }: { label: string, href: string }) => {
  return (
    <a href={href} download="KimiaKhoshnoodResume.pdf" className="group py-3 px-7 flex items-center gap-2 w-fit rounded-full font-medium text-white bg-gradient-to-r rtl:bg-gradient-to-l from-brand to-brand-dark shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-pointer">
      {label}
      <FiDownload className="transition-transform duration-200 group-hover:translate-y-0.5" size={18} />
    </a>
  )
}

export default DownloadResumeBtn

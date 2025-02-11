import { RecentWorksEachProps } from "./RecentWorksEach";
import example1 from "../../../public/ScreenshotDigikala2.png"
import example2 from "../../../public/ScreenshotFilimo.png"
import example3 from "../../../public/ScreenshotIdeaControl3.png"
import example4 from "../../../public/ScreenshotPortfolio2.png"

type Tag = "Company" | "UiUx" | "Clone";
export type ExtendedRecentWorksProps = RecentWorksEachProps & {
  tags: ("All"|"Company" | "UiUx" | "Clone")[];
  StartDate: string
  client: string
  description: string
  link?: string
};
export const RecentWorksEachProp: ExtendedRecentWorksProps[] = [
  {
    img: example1,
    title: "Digikala",
    about:
      "I developed a Digikala clone as my first project using TypeScript and Redux. This fully responsive web app includes a home page, product page, and login section, built with React, Redux, Tailwind CSS, and Vite for fast development.",
    description: "In this project, I created a Digikala clone featuring a home page, product page, and a login section. I used React with TypeScript for type-safe development and managed state efficiently with Redux. The project integrates APIs using JSON Server and Axios for smooth data fetching. I implemented dynamic routing with React Router and form handling with React Hook Form, especially for the login section. Skeleton loading enhances the user experience during data fetching, while Tailwind CSS ensures a responsive, modern UI. Built with Vite for optimized performance, this project helped me strengthen my skills in front-end development, state management, and responsive design.",
    tags: ["Clone"],
    StartDate: "October 29, 2024",
    client: "-",
    link: "https://github.com/KimiyaKhoshnood/digikalaTS",
    id: 1,
  },
  {
    img: example2,
    title: "Filimo",
    about:
      "I developed a Filimo clone as my first project using JavaScript. It features a fully responsive home page, built with Tailwind CSS, JSON Server for API integration, and Axios for data fetching.",
    description: "In this project, I created a Filimo clone focusing on the home page. I used vanilla JavaScript with modern ES6+ features like arrow functions, template literals, and destructuring to enhance code readability and efficiency. JSON Server was integrated as a mock API for dynamic data handling, while Axios facilitated smooth data fetching. The UI is styled with Tailwind CSS, ensuring a clean, fully responsive design across all devices. This project helped me strengthen my core JavaScript skills, API integration, and responsive web design techniques.",

      tags: ["Clone"],
    StartDate: "August 2, 2024",
    client: "-",
    link: "https://github.com/KimiyaKhoshnood/filimoKimia",
    id: 2,
  },
  {
    img: example3,
    title: "Idea Control",
    about:
      "I developed a corporate website for Idea Control Company as my first company project. The website includes around 8 fully responsive pages, built with React, React Router, Tailwind CSS, and Vite, with a UI entirely designed by me.",
    description: "In this project, I created a multi-page website for Idea Control Company, featuring sections like Home, Services, About Us, Projects, Articles, Industries, and more. I built the site using React, managing content with JavaScript objects instead of APIs. I used useState and useEffect hooks for state management and organized the code with reusable components for better maintainability. For smooth navigation, I implemented routing with React Router and optimized performance with lazy loading. The UI was fully designed by me, focusing on both aesthetics and user experience. I also wrote all the website’s content and selected images to align with the company’s branding. Tailwind CSS ensured a clean, modern, and fully responsive design, while Vite provided a fast development environment. The project hasn’t been deployed yet but will be live soon.",

      tags: ["Company", "UiUx"],
    StartDate: "November 19, 2024",
    client: "Idea Control",
    id: 3,
  },
  {
    img: example4,
    title: "Portfolio",
    about:
      "I designed my first personal portfolio website using Bootstrap. It’s a fully responsive, multi-page website showcasing my skills and projects.",
    description: "In this project, I created a multi-page personal portfolio website to showcase my work and skills. I used Bootstrap to design a clean, responsive layout that adapts seamlessly to different screen sizes. The website features sections like Home, About Me, Projects, and Contact, providing a comprehensive overview of my background and experience.",
      tags: ["Clone", "UiUx"],
    StartDate: "April 8, 2023",
    client: "-",
    link: "https://github.com/KimiyaKhoshnood/KimiaKhoshnoodBootstrap",
    id: 4,
  },
];

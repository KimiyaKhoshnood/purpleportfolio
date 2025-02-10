import { RecentWorksEachProps } from "./RecentWorksEach";
import example1 from "../../../public/ScreenshotDigikala2.png"
import example2 from "../../../public/ScreenshotFilimo.png"
import example3 from "../../../public/ScreenshotIdeaControl3.png"
import example4 from "../../../public/ScreenshotPortfolio2.png"


export type ExtendedRecentWorksProps = RecentWorksEachProps & {
  tags: number[];
  StartDate: string
  client: string
  description: string
};
export const RecentWorksEachProp: ExtendedRecentWorksProps[] = [
  {
    img: example1,
    title: "Digikala",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",
    tags: [1, 2, 3],
    StartDate: "August 20, 2023",
    client: "Artboard Studio",
    id: 1,
  },
  {
    img: example2,
    title: "Digikala",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",

      tags: [2, 3],
    StartDate: "August 20, 2023",
    client: "Artboard Studio",
    id: 2,
  },
  {
    img: example3,
    title: "Digikala",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",

      tags: [1],
    StartDate: "August 20, 2023",
    client: "Artboard Studio",
    id: 3,
  },
  {
    img: example4,
    title: "Digikala",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid natus expedita, temporibus maxime atque, dolorem labore vero eum eius aliquam asperiores aperiam tempore hic eveniet ea autem minus iusto.",

      tags: [3],
    StartDate: "August 20, 2023",
    client: "Artboard Studio",
    id: 4,
  },
];

// "use client";

// import DisplayCards from "@/components/ui/display-cards";
// import { Sparkles } from "lucide-react";

// const defaultCards = [
//   {
//     icon: <Sparkles className="size-4 text-blue-300" />,
//     title: "Featured",
//     description: "Discover amazing content",
//     date: "Just now",
//     iconClassName: "text-blue-500",
//     titleClassName: "text-blue-500",
//     className:
//       "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
//   },
//   {
//     icon: <Sparkles className="size-4 text-blue-300" />,
//     title: "Popular",
//     description: "Trending this week",
//     date: "2 days ago",
//     iconClassName: "text-blue-500",
//     titleClassName: "text-blue-500",
//     className:
//       "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
//   },
//   {
//     icon: <Sparkles className="size-4 text-blue-300" />,
//     title: "New",
//     description: "Latest updates and features",
//     date: "Today",
//     iconClassName: "text-blue-500",
//     titleClassName: "text-blue-500",
//     className:
//       "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
//   },
// ];

// function DisplayCardsDemo() {
//   return (
//     // <div className="flex">
//     <div className="max-w-3xl">
//       <DisplayCards cards={defaultCards} />
//     </div>
//     // </div>
//   );
// }

// export { DisplayCardsDemo };
"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[20rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

import Approach from "@/components/Approach";
import { PinContainer } from "@/components/ui/3d-pin";
import { CardDemo } from "@/components/ui/Animatedcard";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Compare } from "@/components/ui/compare";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { Timeline } from "@/components/ui/timeline";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Home, User, FolderKanban, Mail } from "lucide-react";

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiAuth0,
  SiClerk,
  SiFirebase,
  SiGithub,
  SiVercel,
  SiRedux,
  SiHtml5,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
];
const skills2 = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  {
    name: "Tanstack Query",
    icon: (
      <img src="/Tanstack.png" width={20} height={20} alt="Tanstack query" />
    ),
  },
];

const skills3 = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Prisma", icon: <SiPrisma className="text-blue-600" /> },
  { name: "Clerk", icon: <SiClerk key="clerk" className="text-purple-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
];

const timelineData = [
  {
    title: "ClasSync",
    content: (
      <div>
        <div>
          <h3 className="text-lg font-semibold white">ClasSync</h3>
          <p className="text-sm text-gray-300 mt-1">
            ClasSync is an intuitive web platform designed to streamline
            classroom collaboration. It enables mentors to create study groups,
            host video conferences, share assignments and resources, and track
            submissions, while students can join groups, participate in
            discussions, and submit assignments seamlessly. ClasSync focuses on
            enhancing engagement, simplifying communication, and fostering an
            organized learning environment for both educators and learners.
          </p>
          <div className="flex flex-wrap gap-4 my-1">
            {skills2.map((skill) => (
              <HoverBorderGradient key={skill.name} duration={1.5} clockwise>
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              </HoverBorderGradient>
            ))}
          </div>
        </div>
        <PinContainer
          title="ClasSync"
          href="https://clas-sync-nwie.vercel.app/"
        >
          <div className="flex z-0 flex-col items-center text-center text-white bg-zinc-900/80 rounded-xl shadow-lg w-64 p-4">
            <img
              src="/clasync.png"
              alt="ClasSync"
              className="w-full h-32 object-contain rounded-md"
            />
          </div>
        </PinContainer>
      </div>
    ),
  },
  {
    title: "SparkDeck",
    content: (
      <div>
        <div>
          <h3 className="text-lg font-semibold text-purple-400">SparkDeck</h3>
          <p className="text-sm text-gray-300 mt-1">
            SenseAI is a comprehensive career growth platform that provides job
            market insights, helps users build tailored resumes, enables them to
            take practice tests, and delivers skill analytics to track strengths
            and areas for improvement. It’s designed to guide job seekers in
            presenting themselves effectively and making informed career
            decisions.
          </p>
          <div className="flex flex-wrap gap-4 my-1">
            {skills.map((skill) => (
              <HoverBorderGradient key={skill.name} duration={1.5} clockwise>
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              </HoverBorderGradient>
            ))}
          </div>
        </div>
        <PinContainer
          title="SparkDeck"
          href="https://spark-deck-tnq9.vercel.app/"
        >
          <div className="flex z-0 flex-col items-center text-center text-white bg-zinc-900/80 rounded-xl shadow-lg w-64 p-4">
            <img
              src="/SparkDeck.png"
              alt="SparkDeck"
              className="w-full h-32 object-contain rounded-md"
            />
          </div>
        </PinContainer>
      </div>
    ),
  },
  {
    title: "SenseAI",
    content: (
      <div>
        <div>
          <h3 className="text-lg font-semibold text-blue-400">SenseAI</h3>
          <p className="text-sm text-gray-300 mt-1">
            A pitch deck sharing platform built with Next.js, allowing users to
            upload, view, and share startup pitch decks seamlessly. Features
            include user authentication, responsive UI, and smooth navigation
            for quick access to presentations.
          </p>
          <div className="flex flex-wrap gap-4 my-1">
            {skills3.map((skill) => (
              <HoverBorderGradient key={skill.name} duration={1.5} clockwise>
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              </HoverBorderGradient>
            ))}
          </div>
        </div>
        <PinContainer title="SenseAI" href="https://sense-ai-phi.vercel.app/">
          <div className="flex z-0 flex-col items-center text-center text-white bg-zinc-900/80 rounded-xl shadow-lg w-64 p-4">
            <img
              src="/senseai.png"
              alt="SenseAI"
              className="w-full h-32 object-contain rounded-md"
            />
          </div>
        </PinContainer>
      </div>
    ),
  },
];

export const dockItems = [
  {
    title: "Home",
    icon: <Home className="w-5 h-5" />,
    href: "#home",
  },
  {
    title: "Tech Stack",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    href: "#techstack",
  },
  {
    title: "Projects",
    icon: <FolderKanban className="w-5 h-5" />,
    href: "#projects",
  },

  {
    title: "Contact",
    icon: <User className="w-5 h-5" />,
    href: "#contact",
  },
];

export const products = [
  {
    title: "Vercel",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://res.cloudinary.com/dxvqusbka/image/upload/v1758890394/Vercel_final_czq7k6.avif",
  },
  {
    title: "Next.js",
    link: "https://gomoonbeam.com",
    thumbnail: "/Next.png",
  },
  {
    title: "React.js",
    link: "https://gomoonbeam.com",
    thumbnail: "/react.png",
  },
  {
    title: "JS",
    link: "https://gomoonbeam.com",
    thumbnail: "/JS_mono.png",
  },
  {
    title: "NodeJS",
    link: "https://gomoonbeam.com",
    thumbnail: "https://wallpaperaccess.com/full/3909225.jpg",
  },
  {
    title: "Node.js",
    link: "https://gomoonbeam.com",
    thumbnail: "/nodejs.png",
  },
  {
    title: "GitHub",
    link: "https://gomoonbeam.com",
    thumbnail: "/github.png",
  },
  {
    title: "Shadcn",
    link: "https://gomoonbeam.com",
    thumbnail: "/shadcn.png",
  },
  {
    title: "Node.JS",
    link: "https://gomoonbeam.com",
    thumbnail: "/nodejs.png",
  },
];

const page = () => {
  return (
    <div id="home" className="max-sm:overflow-hidden">
      {/* Floating dock fixed at top center */}
      <div className="fixed mt-5 top-10 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* Hero section below */}
      <HeroParallax products={products} />
      {/* <TypewriterEffect
        words={[
          { text: "Who", className: "who" },
          { text: "Am", className: "Am" },
          { text: "I", className: "I" },
        ]}
      />

      <div className="w-full  p-10 h-screen">
        <div className="border border-zinc-500 rounded-2xl flex max-sm:flex-col gap-0 p-4">
          <div>
            <TextGenerateEffect
              words={
                "I’m Prudhvi Kunche, a Full-Stack Developer specializing in MERN & Next.js, passionate about building sleek, scalable, and user-friendly applications; I write clean code, optimize for performance, focus on user experience, and enjoy turning ideas into real-world projects."
              }
            />
          </div>
          <div>
            <Compare />
          </div>
        </div>
      </div> */}
      <div id="techstack" className="md:mt-11 md:pt-34">
        <TypewriterEffect
          words={[
            { text: "Tech", className: "tech" },
            { text: "Stack", className: "stack" },
          ]}
        />
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 gap-4 my-3 px-1">
          <CardDemo
            title="Frameworks & Libraries"
            description="Technologies I work with"
            icons={[
              <SiJavascript
                key="js"
                className="text-yellow-500 w-[80%] h-[80%]"
              />,
              <SiNodedotjs
                key="node"
                className="text-green-600 w-[80%] h-[80%]"
              />,
              <SiNextdotjs key="next" className="text-black w-[80%] h-[80%]" />, // Center
              <SiReact key="react" className="text-cyan-400 w-[80%] h-[80%]" />,
              <SiTypescript
                key="ts"
                className="text-blue-600 w-[80%] h-[80%]"
              />,
            ]}
            tech={[
              "JavaScript",
              "Node.js",
              "Next.js",
              "React.js",
              "TypeScript",
            ]}
          />

          <CardDemo
            title="Databases"
            description="Databases I work with"
            icons={[
              <img
                src="/mongoose.svg"
                alt="Mongoose"
                className="w-[80%] h-[80%]"
              />,
              <SiPostgresql
                key="postgres"
                className="text-blue-700 w-[80%] h-[80%]"
              />, // left of center
              <SiMongodb
                key="mongodb"
                className="text-green-500 w-[80%] h-[80%]"
              />, // center
              <SiMysql key="mysql" className="text-blue-500 w-[80%] h-[80%]" />, // right of center
              <SiPrisma
                key="prisma"
                className="text-blue-600 w-[80%] h-[80%]"
              />, // right corner
            ]}
            tech={["Moongoose", "Postgrey SQL", "MongoDB", "MySql", "Prisma"]}
          />

          <CardDemo
            title="Authentication & Deployment"
            description="Tools for auth and deployment"
            icons={[
              <SiFirebase
                key="firebase"
                className="text-yellow-400 w-[80%] h-[80%]"
              />,
              <SiClerk
                key="clerk"
                className="text-purple-500 w-[80%] h-[80%]"
              />,
              <img
                src="/AuthJS.png"
                alt="Mongoose"
                className="w-[80%] h-[80%]"
              />,
              <SiGithub key="github" className="white w-[80%] h-[80%]" />,
              <SiVercel key="vercel" className="text-black w-[80%] h-[80%]" />,
            ]}
            tech={["Firebase", "Clerk", "Auth.js", "GitHub", "Vercel"]}
          />
          <CardDemo
            title="State Management"
            description="State libraries I use"
            icons={[
              <SiRedux
                key="redux"
                className="text-purple-700 w-[80%] h-[80%]"
              />,
              <img
                src="/Tanstack.png"
                alt="Mongoose"
                className="w-[80%] h-[80%]"
              />,
              <img
                src="/zustand.ico"
                alt="Mongoose"
                className="w-[80%] h-[80%]"
              />,
            ]}
            tech={["Redux", "Tanstack", "Zustand"]}
          />
        </div>
      </div>
      <div id="projects" className="mt-11 md:pt-34">
        <TypewriterEffect
          words={[{ text: "Projects", className: "Projects" }]}
        />
        <Timeline data={timelineData} />
      </div>
      <div className="mt-11 md:pt-34">
        <TypewriterEffect
          words={[
            { text: "My", className: "my" },
            { text: "Approach", className: "approach" },
          ]}
        />
        {/* <CanvasRevealEffect /> */}
        <Approach />
      </div>
      <div id="contact" className="mt-11 md:pt-34">
        <TypewriterEffect
          words={[
            { text: "Connect", className: "connect" },
            { text: "With", className: "with" },
            { text: "Me", className: "me" },
          ]}
        />
        <div className="flex justify-center gap-6 mt-8 pb-5 text-2xl">
          {/* GitHub */}
          <LinkPreview url="https://github.com/prudhvi-dot">
            <a
              href="https://github.com/prudhvi-dot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-white transition"
            >
              <FaGithub style={{ fontSize: "36px" }} />
            </a>
          </LinkPreview>

          {/* LinkedIn */}
          <LinkPreview
            url="https://www.linkedin.com/in/prudhvikunche/"
            isStatic
            imageSrc="/linkedin.png"
          >
            <a
              href="https://www.linkedin.com/in/prudhvikunche/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition"
            >
              <FaLinkedin style={{ fontSize: "36px" }} />
            </a>
          </LinkPreview>

          {/* Email */}
          <LinkPreview
            url="https://mail.google.com/mail/u/0/?hl=en"
            isStatic
            imageSrc="/mail.png"
          >
            <a
              href="mailto:prudhvisai3772@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-red-400 transition"
            >
              <FaEnvelope style={{ fontSize: "36px" }} />
            </a>
          </LinkPreview>
        </div>
      </div>
    </div>
  );
};

export default page;

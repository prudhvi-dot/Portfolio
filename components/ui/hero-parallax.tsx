"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { TextGenerateEffect } from "./text-generate-effect";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl flex relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <div>
        <h1 className="text-7xl font-street md:text-9xl dark:text-white">
          Hi, I'm Prudhvi
        </h1>
        <p className="max-w-2xl font-bonheur font-thin text-base md:text-xl mt-8 dark:text-neutral-200">
          I am a web developer driven by curiosity and design.
          <br />
          Transforming concepts into impactful digital solutions.
        </p>
        {/* <TextGenerateEffect
        words={`I am a web developer driven by curiosity and design. 
          Transforming concepts into impactful digital solutions.
          `}
      /> */}
      </div>
      {/* <div className="flex justify-center absolute bottom-16 right-40">
        <img
          // Increased max-height from 500px to 580px for a bigger presence
          className=" max-h-[580px] object-contain"
          src="/hero_final.png" // Assuming this is your updated file!
          alt="Creative portrait for portfolio" // Added a descriptive alt tag for accessibility
        />
      </div> */}
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="
        group/product relative shrink-0
        w-48 h-48       /* mobile default */
        sm:w-64 sm:h-64 /* small screens */
        md:w-72 md:h-72 /* medium screens */
        lg:w-[30rem] lg:h-96 /* keep original large screen size */
      "
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 
                     text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white"
      >
        {product.title}
      </h2>
    </motion.div>
  );
};

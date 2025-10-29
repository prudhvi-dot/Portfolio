"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { LayoutTextFlip } from "./layout-text-flip";

export interface CardProps {
  title: string;
  description: string;
  icons: React.ReactNode[];
  className?: string;
  tech: string[];
}

function getIconSizes(count: number, minSize = 48, maxSize = 74) {
  if (count === 1) return [maxSize];
  const sizes: number[] = [];
  const mid = Math.floor(count / 2);
  for (let i = 0; i < count; i++) {
    const distance = Math.abs(mid - i);
    const size = maxSize - ((maxSize - minSize) / mid) * distance;
    sizes.push(size);
  }
  return sizes;
}

export function CardDemo({
  title,
  description,
  icons,
  className,
  tech,
}: CardProps) {
  return (
    <Card className={className}>
      <CardSkeletonContainer>
        <Skeleton icons={icons} />
      </CardSkeletonContainer>
      <CardTitle>
        <LayoutTextFlip text={title} words={tech} />
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}

const Skeleton = ({ icons }: { icons: React.ReactNode[] }) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = icons.map((_, i) => [
    `.circle-${i}`,
    { scale, transform },
    { duration: 0.8 },
  ]);

  const sizes = getIconSizes(icons.length);

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        {icons.map((icon, i) => (
          <Container
            key={i}
            className={`circle-${i}`}
            style={{ width: sizes[i], height: sizes[i] }}
          >
            {icon}
          </Container>
        ))}
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
         shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        `,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

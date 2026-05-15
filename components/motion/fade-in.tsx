"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  /** Delay in seconds */
  delay?: number;
  /** Y-axis offset to start from */
  y?: number;
  /** Custom duration */
  duration?: number;
  /** Animate only once when in view (default true) */
  once?: boolean;
  /** className passed to wrapping element */
  className?: string;
  /** Render as a different element (default div) */
  as?: "div" | "section" | "header" | "footer" | "article" | "li";
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  y = 20,
  duration = 0.6,
  once = true,
  className,
  as: Tag = "div",
}: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: easeOut },
    },
  };

  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/** Wrapper that staggers its children — use with FadeIn-like children */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Child of a Stagger — uses parent's orchestration */
export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/* =================================================================
   RevealHeading — cinematic 3D-style entrance for section headings.
   - rotateX from -30deg → 0
   - scale 0.88 → 1
   - translateY 50 → 0
   - blur 16px → 0
   - perspective container so rotation reads as 3D depth
   ================================================================= */
interface RevealHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Use immediate animation instead of whileInView (for above-the-fold heroes) */
  immediate?: boolean;
  /** Animate only once (default true) */
  once?: boolean;
}

export function RevealHeading({
  children,
  className,
  delay = 0,
  immediate = false,
  once = true,
}: RevealHeadingProps) {
  const hidden = {
    opacity: 0,
    y: 50,
    rotateX: -30,
    scale: 0.88,
    filter: "blur(16px)",
  };
  const visible = {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
  };

  const transition = {
    duration: 1.1,
    delay,
    ease: easeOut,
    filter: { duration: 0.7, delay },
    opacity: { duration: 0.7, delay },
  };

  return (
    <div
      className={className}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={hidden}
        {...(immediate
          ? { animate: visible }
          : {
              whileInView: visible,
              viewport: { once, margin: "-10% 0px -10% 0px" },
            })}
        transition={transition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center bottom",
          willChange: "transform, opacity, filter",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* =================================================================
   ParallaxFloat — subtle vertical drift on scroll for orbs/glows.
   Position the wrapped element absolutely; this just nudges Y.
   ================================================================= */
export function ParallaxFloat({
  children,
  className,
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

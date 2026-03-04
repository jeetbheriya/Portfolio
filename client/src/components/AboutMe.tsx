"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { IAppData } from '../types';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutMeProps {
}

const AboutMe = ({ }: AboutMeProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // ONE timeline to rule them all
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom", // Starts when top of section hits bottom of screen
        end: "bottom top",    // Ends when bottom of section hits top of screen
        scrub: true,
      }
    });

    // 1. Entrance: Elements slide up and fade in
    tl.from(".slide-up-and-fade", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power2.out"
    })
    // 2. The "Stay" phase: Elements stay visible while you scroll through the section
    .to(".slide-up-and-fade", {
      opacity: 1, 
      duration: 5 
    }) 
    // 3. Exit: Elements slide further up and fade out
    .to(".slide-up-and-fade", {
      y: -100,
      opacity: 0,
      stagger: 0.05,
      duration: 2,
      ease: "power2.in"
    });

  }, { scope: container });

  return (
    <section className="py-16 md:py-24 overflow-hidden" id="about-me">
      <div className="container" ref={container}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up-and-fade">
            <h2 className="text-4xl md:text-5xl font-anton text-primary mb-8 uppercase">About Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              I am a passionate Fullstack Developer with a focus on building interactive and responsive web applications. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or solving challenges on LeetCode. I am always eager to learn and take on new challenges.
            </p>
          </div>
          <div className="slide-up-and-fade flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-primary rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               <div className="absolute inset-0 bg-primary/20 hover:bg-transparent transition-all duration-500"></div>
               <img 
                 src="/Jeet.jpg" 
                 alt="Jeet Bheriya" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
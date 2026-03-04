"use client"; // Removed, but leaving for context from original file
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger, useGSAP); // Already registered in Banner.tsx

const AboutMe = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-and-fade", {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container },
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h2>

        <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
          This is me.
        </p>

        <div className="grid md:grid-cols-12 mt-9">
          <div className="md:col-span-5">
            <p className="text-5xl slide-up-and-fade">Hi, I&apos;m Jeet.</p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg text-muted-foreground max-w-[450px]">
              <p className="slide-up-and-fade">
                Third-year B.Tech CSE (AI) student specializing in full-stack
                MERN development and algorithmic problem solving. Proven track
                record of building scalable applications, including a real-time
                professional ecosystem (ColdStart), a restaurant management
                system (QuickSEAT), and an Airbnb clone. Skilled in React,
                Node.js, and Socket.IO, actively
                seeking web development internships.
              </p>
              <p className="mt-3 slide-up-and-fade">
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

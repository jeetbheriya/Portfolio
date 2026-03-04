'use client'; // Removed, but leaving for context from original file
import SectionTitle from './SectionTitle'; // Adjusted path
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import React, { useRef } from 'react';

// gsap.registerPlugin(ScrollTrigger, useGSAP); // Already registered in Banner.tsx

interface SkillsProps {
  myStack: any; // Define a proper type for myStack if available
}

const Skills: React.FC<SkillsProps> = ({ myStack }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'power3.out',
                stagger: {
                    amount: 0.5,
                    from: 'start',
                    grid: 'auto',
                },
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="py-16 md:py-24">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {myStack && Object.entries(myStack).map(([key, value]: [string, any]) => ( // Use myStack prop
                        <div className="grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {key}
                                </p>
                            </div>

                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                {value && Array.isArray(value) && value.map((item: any) => (
                                    <div
                                        className="slide-up flex gap-3.5 items-center leading-none"
                                        key={item.name}
                                    >
                                        <div>
                                            {item.icon && <item.icon size={40} className="text-primary" />}
                                        </div>
                                        <span className="text-2xl capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

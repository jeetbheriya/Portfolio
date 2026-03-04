import { IProject } from '../types';
import { ArrowUpRight, Github } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react'; // Import useState

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
    project: IProject;
    index: number;
}

const Project = ({ project, index }: Props) => {
    const projectRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false); // State for hover effect

    useGSAP(
        () => {
            gsap.from(projectRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: projectRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        },
        { scope: projectRef, dependencies: [project] },
    );

    return (
        <div 
            ref={projectRef} 
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-10 border-b border-gray-200 relative group" // Added 'relative group' for hover effect
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
            <div className="md:col-span-1">
                <span className="text-3xl text-gray-400 font-anton">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>
            <div className="md:col-span-5">
                <h3 className="text-4xl font-anton text-primary">{project.title}</h3>
            </div>
            <div className="md:col-span-6">
                <div
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                ></div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-6 flex items-center gap-6">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:underline"
                        >
                            <ArrowUpRight size={20} />
                            <span>Live Demo</span>
                        </a>
                    )}
                    {project.sourceCode && (
                        <a
                            href={project.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-primary"
                        >
                            <Github size={20} />
                            <span>Source Code</span>
                        </a>
                    )}
                </div>
            </div>
            {/* Project Image on Hover */}
            {project.thumbnail && (
                <div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-auto pointer-events-none z-10 transition-all duration-500 ease-out ${
                        isHovered 
                        ? 'opacity-100 scale-100 rotate-2' 
                        : 'opacity-0 scale-95 rotate-0'
                    }`}
                >
                    <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-lg shadow-2xl border-2 border-white/20"
                    />
                </div>
            )}
        </div>
    );
};

export default Project;

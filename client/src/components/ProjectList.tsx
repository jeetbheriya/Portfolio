'use client'; 
import SectionTitle from './SectionTitle';
import React, { useRef } from 'react';
import Project from './Project';
import { IProject } from '../types';

interface ProjectListProps {
  projects: IProject[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="MY PROJECTS" />

                <div className="group/projects relative" ref={containerRef}>
                    <div
                        className="flex flex-col gap-10"
                    >
                        {projects.map((project, index) => (
                            <Project
                                project={project}
                                index={index}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;

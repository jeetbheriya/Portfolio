import { useState, useEffect } from 'react';
import { getProjects, getStack, getAppData } from '../services/api';
import { IProject, IAppData } from '../types'; // Import IAppData
import { PROJECTS, MY_STACK, GENERAL_INFO } from '../lib/data'; // Import local fallback data

// Placeholder components - these will be replaced with actual migrated components later
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import ProjectList from '../components/ProjectList';


const Home = () => {
  const [projects, setProjects] = useState<IProject[]>(PROJECTS as any);
  const [myStack, setMyStack] = useState<any | null>(MY_STACK); // Added type for myStack, can be refined later
  const [appData, setAppData] = useState<IAppData | null>(GENERAL_INFO as any); // Use IAppData
  const [loading, setLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);

  useEffect(() => {
                    const fetchData = async () => {
                        try {
                            const [projectsData, stackData, appDataData] = await Promise.all([
                                getProjects(),
                                getStack(),
                                getAppData(),
                            ]);
                            
                            if (projectsData && projectsData.length > 0) setProjects(projectsData);
                            if (stackData) setMyStack(stackData);
                            if (appDataData) setAppData(appDataData);
                        } catch (err: any) {
                            console.error("API Fetch Error, using local data:", err);
                            // We already have local data in state
                        } finally {
                            setLoading(false);
                        }
                    };    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="page-">
      <Banner appData={appData} />
      <AboutMe />
      <Skills myStack={myStack} />
      <ProjectList projects={projects} />
      <footer className="py-section text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-anton text-primary mb-4">Have a project in mind?</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            <a href="mailto:jbheriya11@gmail.com" className="text-primary hover:underline">jbheriya11@gmail.com</a>
          </p>
          <p className="text-sm text-gray-500">Design & built by Jeet Bheriya</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
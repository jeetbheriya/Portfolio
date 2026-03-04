import { useEffect, useState } from 'react';
import { getProjects, getStack, getAppData } from '../services/api';
import { IProject } from '../types'; // Assuming IProject is defined

// Placeholder components - these will be replaced with actual migrated components later
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import ProjectList from '../components/ProjectList';


const Home = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [myStack, setMyStack] = useState(null);
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
                    const fetchData = async () => {
                        try {
                            const [projectsData, stackData, appDataData] = await Promise.all([
                                getProjects(),
                                getStack(),
                                getAppData(),
                            ]);
                            setProjects(projectsData);
                            setMyStack(stackData);
                            console.log('myStack after API call:', stackData);
                            setAppData(appDataData);
                        } catch (err: any) {
                            setError(err.message);
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
      <AboutMe appData={appData} />
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
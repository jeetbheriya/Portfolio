import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Assuming your Express server runs on port 5000

const api = axios.create({
  baseURL: API_URL,
});

export const getProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getProjectBySlug = async (slug) => {
  try {
    const response = await api.get(`/projects/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
};

export const getStack = async () => {
  try {
    const response = await api.get('/stack');
    return response.data;
  } catch (error) {
    console.error('Error fetching stack:', error);
    return null;
  }
};

export const getAppData = async () => {
  try {
    const response = await api.get('/appdata');
    return response.data;
  } catch (error) {
    console.error('Error fetching app data:', error);
    return null;
  }
};

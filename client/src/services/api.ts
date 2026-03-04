import axios from 'axios';
import { IProject, IAppData, IExperience } from '../types';

const API_URL = 'http://localhost:5000/api'; // Assuming your Express server runs on port 5000

const api = axios.create({
  baseURL: API_URL,
});

export const getProjects = async (): Promise<IProject[]> => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const getProjectBySlug = async (slug: string): Promise<IProject | null> => {
  try {
    const response = await api.get(`/projects/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
};

export const getStack = async (): Promise<any | null> => { // Adjust 'any' to specific type if available
  try {
    const response = await api.get('/stack');
    return response.data;
  } catch (error) {
    console.error('Error fetching stack:', error);
    return null;
  }
};

export const getAppData = async (): Promise<IAppData | null> => {
  try {
    const response = await api.get('/appdata');
    return response.data;
  } catch (error) {
    console.error('Error fetching app data:', error);
    return null;
  }
};

export const getExperiences = async (): Promise<IExperience[]> => {
    try {
        const response = await api.get('/experiences');
        return response.data;
    } catch (error) {
        console.error('Error fetching experiences:', error);
        return [];
    }
};

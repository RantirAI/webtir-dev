// src/services/apiService.ts
import axios from 'axios';
import { API_URL } from "@/utils/constants";

export const saveProject = async (projectData: any) => {
    const response = await axios.post(`${API_URL}/saveProject`, projectData);
    return response.data;
};

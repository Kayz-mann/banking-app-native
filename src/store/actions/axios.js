import axios from "axios"
import { API_URI } from './types';

const instance = axios.create({
    baseURL: `${API_URI}`,
});

export default instance

// the axios is created to fetch the api fron the backend
// when app is already deployed the base URL has to be changed
import axios from 'axios';
import { API_URL_SHOW, API_URL_EPISODES } from './constants';

export const fetchShow = () => axios.get(API_URL_SHOW);
export const fetchEpisodes = () => axios.get(API_URL_EPISODES);
export const fetchEpisodeById = (id) => axios.get(`${API_URL_EPISODES}/${id}`);

import axios from 'axios';
import {
  API_URL_SHOW,
  API_URL_SHOW_EPISODES,
  API_URL_EPISODE
} from './constants';

export const fetchShow = () => axios.get(API_URL_SHOW);
export const fetchShowEpisodes = () => axios.get(API_URL_SHOW_EPISODES);
export const fetchEpisodeById = id => axios.get(`${API_URL_EPISODE}/${id}`);

import axios from 'axios';
import { API_URL_SHOW, SHOW_ID } from './constants';

export const fetchShow = () => axios.get(`${API_URL_SHOW}/${SHOW_ID}`);

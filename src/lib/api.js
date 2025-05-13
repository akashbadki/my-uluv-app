import axios from 'axios';

export const getUserProfile = () => axios.get('/api/profile');

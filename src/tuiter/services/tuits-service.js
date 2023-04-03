import axios from 'axios';
// local api
// const TUITS_API = 'http://localhost:4000/api/tuits';
// Render api
// const TUITS_API = 'https://tuiter-node-server-app-a9-7wuk.onrender.com/api';
const API_BASE = process.env.REACT_APP_API_BASE_a9;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`);
    return response.data;
}

export const updateTuit = async (tuit) => {
    await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
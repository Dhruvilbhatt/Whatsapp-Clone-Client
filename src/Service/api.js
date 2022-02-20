import axios from 'axios';

const URL = 'https://whatsapp-clone-server-mern.herokuapp.com';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    }
    catch(error){
        console.log('Error while adding new user: ', error.message);
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}/users`);
        return response.data;
    }
    catch(error){
        console.log('Error while fetching user: ', error.message);
    }
}

export const setConversation = async (data) => {
    try {
        return await axios.post(`${URL}/conversations/add`, data);
    }
    catch(error){
        console.log('Error while adding new conversation: ', error.message);
    }
}

export const getConversation = async (data) => {
    try {
        const response = await axios.post(`${URL}/conversations/get`, data);
        return response.data;
    }
    catch(error){
        console.log('Error while adding fetching conversation: ', error.message);
    }
}

export const setMessage = async (data) => {
    try {
        return await axios.post(`${URL}/messages/add`, data);
    }
    catch(error){
        console.log('Error while adding new message: ', error.message);
    }
}

export const getMessage = async (id) => {
    try {
        let response = await axios.get(`${URL}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}
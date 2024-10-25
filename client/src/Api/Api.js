import axios from 'axios';

const postData = async (url,data) => {
    try {
        const response = await axios.post(url,data);
        console.log('Response:', response.data); 
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message); 
    }
};

export {postData};
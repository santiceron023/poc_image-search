import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aa1177498aedf0dd2bd473daacdbc53158e6e2284544e1be12c54816af061a4c'
    }
});

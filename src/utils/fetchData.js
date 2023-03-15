import axios from "axios";

const BASE_URL = "https://aliexpress-datahub.p.rapidapi.com"


 const options = {
    url: BASE_URL,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    console.log(data)
    return data;
} 


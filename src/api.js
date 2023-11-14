import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos",
    {
        headers :{
            Authorization : "Client-ID 7no41hhmXq1SXhuVERZ5PefjMx00rbsrLmQCqxQox_g"
        },
        params:{
            query: "car"
        }
    });

    console.log(response);
    return response.data.results;
};

export default searchImages;


import axios from "axios";

const searchImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos",
    {
        headers :{
            Authorization : "Client-ID 7no41hhmXq1SXhuVERZ5PefjMx00rbsrLmQCqxQox_g"
        },
        params:{
            query: "cars"
        }
    });

    console.log(response);
    return response;
};

export default searchImages;


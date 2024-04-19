import axios from "axios";

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=qdmJlcjVOSRTuTZ4gUWJ6Yb4_xLl04U9reEA_fTYjEY'
    
    const response =  await axios.get(url,{
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response.data.results)

    return response.data.results
}

export default searchImage
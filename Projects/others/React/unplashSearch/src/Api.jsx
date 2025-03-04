import axios from 'axios';

const searchImages = async(term) => {
   if(term) {
     const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers: {
         Authorization: "Client-ID <clientID>"
       },
       params: {
           query: term
       }
   });
   return response?.data?.results
   }  
}

export default searchImages
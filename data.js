const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3llJQPP5eD5iPFXGG2718xco/E7SGuCMTui8LSaSuxYg="

async function search(lat, lng, searchTerms) {
    const response = await axios.get('https://api.foursquare.com/v3/places/search', {
       params: {
           query: encodeURI(searchTerms), //encodeURI function to convert special characters to their encoded eqv so that query will be wellformed
           ll: lat + "," + lng,
           // categories:"13033",  // enable use of categories
           sort:"DISTANCE",
           radius: 5000,
           limit: 50

       },
       headers: {
           Accept: "application/json",
           // Provide the API key here
           Authorization: 'fsq32JqRqo6AHKIhCP2yosAeYOhHUDuoLuKTfgsOQmhStCY='
       }
   })
  return response.data;

   


}
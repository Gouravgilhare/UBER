const axios = require("axios");
require("dotenv").config();

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch Coordinates");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and Destination are required");
  }
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  console.log("Calling Google Maps API:", url); // ✅ ADD THIS
  try {
    const response = await axios.get(url);
    console.log(
      "Google Maps API Raw Response:",
      JSON.stringify(response.data, null, 2)
    ); // 🔍 Add this

    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS")
        throw new Error("NO results found");
      return response.data.rows[0].elements[0];
    } else {
      throw new Error(`Google API Error: ${data.status}`);
    }
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};



module.exports.getAutoCompleteSugessions = async (input) =>{
  if(!input){
    throw new Error ('Query is required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API;
  const url  = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input
  )}&key=${apiKey}`;
  try{
  
    const response  = await axios.get(url);
    if(response.data.status === 'OK'){
      return response.data.predictions;
    }else{
      throw new Error ("Unable to fetch suggestion")
    }


  }catch(err){
    console.error(err.message); throw err;
  }

}
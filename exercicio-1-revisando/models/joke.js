const axios = require('axios');


const URL = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

const getJoke = async () => {
  const getJoke = await axios.get(URL);
  
  return getJoke.data.joke;
}

module.exports = {
  getJoke,
}
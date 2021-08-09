const jokeModel = require('../models/joke');

const getJoke = async (req, res, _next) => {
  const joke = await jokeModel.getJoke();
  
  return res.status(200).render('jokeView', { joke });
}

module.exports = {
  getJoke,
}
const axios = require('axios');

module.exports = (root, args) => {
  return axios.get(`http://api.adviceslip.com/advice/${args.id}`)
  .then(res => {
    console.log('This is the data:', res.data.slip.advice);
    console.log(typeof res.data.slip.advice)
    return res.data.slip.advice;
  });
};

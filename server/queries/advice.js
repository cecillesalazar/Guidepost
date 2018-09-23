const axios = require('axios');

module.exports = (root, args) => {
  return axios.get('http://api.adviceslip.com/advice')
  .then(res => {
    return res.data.slip.advice;
  });
};

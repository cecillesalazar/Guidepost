const axios = require('axios');

module.exports = (root, args) => {
  return axios.get(`http://api.adviceslip.com/advice/${args.id}`)
  .then(res => {
    console.log(res.data);
    return res.data;
  });
};

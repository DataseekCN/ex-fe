import Axios from 'axios';

const API_ENDPOINT = 'https://XXXXX/api/';

export default {
  userSignin() {
    return Axios.post(`${API_ENDPOINT}/user/signin`);
  },

  // get(id) {
  //   return Axios.get(`${API_ENDPOINT}/${id}`);
  // },

  // create(data) {
  //   return Axios.post(API_ENDPOINT, data);
  // },

  // update(id, data) {
  //   return Axios.put(`${API_ENDPOINT}/${id}`, data);
  // },

  // delete(id) {
  //   return Axios.delete(`${API_ENDPOINT}/${id}`);
  // },
};

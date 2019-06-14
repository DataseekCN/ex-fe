import Axios from 'axios';

const API_KEY = '1lsoolvyaayk4ce4evshlabj';

export default {
  getShop(shopName) {
    return Axios.get(`/api_getShopInfo/shops/${shopName}?api_key=${API_KEY}`);
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

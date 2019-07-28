import Axios from 'axios';

const API_ENDPOINT = 'https://etzy.com/api';

export default {
  userSignin(data) {
    return Axios.post(`${API_ENDPOINT}/user/signin`, data);
  },

  userSignup(data) {
    return Axios.post(`${API_ENDPOINT}/user/signup`, data);
  },

  userResetPassword(data) {
    return Axios.post(`${API_ENDPOINT}/user/resetpassword`, data);
  },

  signupEmailVerification(data) {
    return Axios.get(`${API_ENDPOINT}/user/signupemailverification`, data);
  },

  checkEtsyShopName(data) {
    return Axios.post(`${API_ENDPOINT}/setup/etzy/verifyshopname`, data);
  },

  getXeroAccounts(data) {
    return Axios.post(`${API_ENDPOINT}/setup/xero/accounts`, data);
  },
  // update(id, data) {
  //   return Axios.put(`${API_ENDPOINT}/${id}`, data);
  // },

  // delete(id) {
  //   return Axios.delete(`${API_ENDPOINT}/${id}`);
  // },
};

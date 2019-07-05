import Axios from 'axios';

const API_ENDPOINT = 'https://etzy.com/api';

export default {
  userSignin() {
    return Axios.post(`${API_ENDPOINT}/user/signin`);
  },

  userSignup() {
    return Axios.post(`${API_ENDPOINT}/user/signup`);
  },

  userResetPassword() {
    return Axios.post(`${API_ENDPOINT}/user/resetpassword`);
  },

  signupEmailVerification() {
    return Axios.get(`${API_ENDPOINT}/user/signupemailverification`);
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

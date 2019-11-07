import Axios from 'axios';

const API_ENDPOINT = 'http://13.236.146.10:12006';

export default {

  // 用户登陆
  userSignin(data) {
    return Axios.post(`${API_ENDPOINT}/user/signin`, data);
  },

  // 用户注册
  userSignup(data) {
    return Axios.post(`${API_ENDPOINT}/user/signup`, data);
  },

  userEmailVerification(data) {
    return Axios.post(`${API_ENDPOINT}/user/emailverification`, data);
  },

  userResetPassword(data) {
    return Axios.post(`${API_ENDPOINT}/user/resetpassword`, data);
  },

  userChangePassword(data) {
    return Axios.post(`${API_ENDPOINT}/user/changepassword`, data);
  },

  signupEmailVerification(data) {
    return Axios.get(`${API_ENDPOINT}/user/signupemailverification`, data);
  },

  // 验证商店名称
  checkEtsyShopName(data) {
    return Axios.post(`${API_ENDPOINT}/setup/etzy/verifyshopname`, data);
  },

  // 设置xero账号
  getXeroAccounts(data) {
    return Axios.post(`${API_ENDPOINT}/setup/xero/accounts`, data);
  },

  etsyTokenVerify(data) {
    return Axios.post(`${API_ENDPOINT}/connections/etsy/token_verify`, data);
  },

  etsyTokenApply(data) {
    return Axios.post(`${API_ENDPOINT}/connections/etsy/token_apply`, data);
  },

  downloadCsv(data) {
    return Axios.post(`${API_ENDPOINT}/connections/backup/csv`, data);
  },

  updateSettings(data) {
    return Axios.post(`${API_ENDPOINT}/settings/update`, data);
  },

  getSettings(data) {
    return Axios.post(`${API_ENDPOINT}/settings/read`, data);
  },


  // connections 信息
};

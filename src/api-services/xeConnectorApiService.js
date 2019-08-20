import Axios from 'axios';

const API_ENDPOINT = 'https://etzy.com/api';

export default {

  // 用户登陆
  userSignin(data) {
    return Axios.post(`${API_ENDPOINT}/user/signin`, data);
  },

  // 用户注册
  userSignup(data) {
    return Axios.post(`${API_ENDPOINT}/user/signup`, data);
  },

  // 重置密码
  userResetPassword(data) {
    return Axios.post(`${API_ENDPOINT}/user/resetpassword`, data);
  },

  // 注册邮箱验证
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

  // 设置内容提交
  setupSubmit(data) {
    return Axios.put(`${API_ENDPOINT}/setup/submit`, data);
  },

  // 设置用户信息
  setUserInfo(data) {
    return Axios.post(`${API_ENDPOINT}/user/info`, data);
  },
  // 设置用户密码
  setNewPassword(data) {
    return Axios.post(`${API_ENDPOINT}/user/newpassword`, data);
  },

  // update(id, data) {
  //   return Axios.put(`${API_ENDPOINT}/${id}`, data);
  // },

  // delete(id) {
  //   return Axios.delete(`${API_ENDPOINT}/${id}`);
  // },
};

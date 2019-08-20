import Axios from 'axios';

const API_ENDPOINT = 'https://etzy.com/api';

export default {
  // 获取etzy权限URL
  getEtzyAuthUrl(data) {
    return Axios.post(`${API_ENDPOINT}/connections/etzy/auth/url`, data);
  },

  // 获取xero权限URL
  getXeroAuthUrl(data) {
    return Axios.post(`${API_ENDPOINT}/connections/xero/auth/url`, data);
  },

  // 获取所有连接
  getAllConnection(data) {
    return Axios.get(`${API_ENDPOINT}/connections/all`, data);
  },

  // 用户数据和会计账号对接
  connectAccount(data) {
    return Axios.post(`${API_ENDPOINT}/connections/accountmapping`, data);
  },

  // etzy权限连接
  connectEtzyAuth(data) {
    return Axios.post(`${API_ENDPOINT}/connections/etzy/oauthcallback`, data);
  },

  // xero权限连接
  connectXeroAuth(data) {
    return Axios.post(`${API_ENDPOINT}/connections/xero/oauthcallback`, data);
  },

  // etzy断连
  disconnectEtzy(data) {
    return Axios.post(`${API_ENDPOINT}/connections/etzy/disconnect`, data);
  },

  // xero断连
  disconnectXero(data) {
    return Axios.post(`${API_ENDPOINT}/connections/xero/disconnect`, data);
  },
};

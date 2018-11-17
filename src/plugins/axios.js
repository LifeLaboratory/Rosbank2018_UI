import axios from 'axios'

export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}
axios.defaults.baseURL = 'http://90.189.132.25';
  

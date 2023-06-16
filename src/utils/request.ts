import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_HTTP_BASE_URL

export default axios

import axios from 'axios';
import unsplashConfig from './unsplashConfig';

export default axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: `Client-ID ${unsplashConfig.ApiKey}`
  }
})
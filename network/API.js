
import axios from 'axios';

const getInstance = () =>{
    const  instance = axios.create({
        baseURL: 'http://171.244.4.48:6969/api/',
        timeout: 1000,
      });
      return instance;
}
export const API = { instance: getInstance() };
API.getListDevice = (page,size) => {
    return API.instance.get(`device/list?page=${page}&size=${size}`)
}
API.addDevice = (params) => {
    return API.instance.post('device/add',params)
}
API.searchDevice = (querySearch) =>{
    return API.instance.get('api/device/search',querySearch)
}
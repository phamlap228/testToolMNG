
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
    return API.instance.post('device/save',params)
}
API.getListRoom = (page,size) => {
    return API.instance.get(`department/list?page=${page}&size=${size}`)
}
API.addRoom = (params) => {
    return API.instance.post('department/save',params)
}
API.searchDevice = (querySearch) =>{
    return API.instance.get('api/device/search',querySearch)
}
//
API.getRepairDevice = (page,size,deviceId) =>{
    return API.instance.get(`repairHistory/getByDevice?page=${page}&size=${size}&deviceId=${deviceId}`)
}
//
// API.getRepairDevice = (page,size,deviceId) =>{
//     return API.instance.get(`repairHistory/getByDevice?page=${page}&size=${size}&deviceId=${deviceId}`)
// }
//171.244.4.48:6969/api/useHistory/save
API.getDeviceRoom =  (page,size,deviceId) =>{
    return API.instance.get(`device/search?page=${page}&size=${size}&department=${deviceId}`)
}
//171.244.4.48:6969/api/device/delete?deviceId=20///api/department/delete?id=69
API.deleteDevice =  (deviceId) =>{
    return API.instance.get(`device/delete?deviceId=${deviceId}`)
}
API.deleteRoom =  (deviceId) =>{
    return API.instance.get(`department/delete?id=${deviceId}`)
}
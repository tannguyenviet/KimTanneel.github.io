import axiosClient from './axiosClient';
const userApi ={
    login:  (data) =>{
        const url ='/login';
        return  axiosClient.post(url,data);
    },
    logout:  () => {
        const url =`/logout`;
        console.log({url});
        return  axiosClient.post(url);
    }
  
}
export default userApi;
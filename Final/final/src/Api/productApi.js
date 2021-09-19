import axiosCLient from 'Api/axiosClient';
const productApi ={
    getAll:  (params) =>{
        const url ='/product/index';
        return  axiosCLient.get(url, {params});
    },
    get:  (id) => {
        const url =`/product/${id}`;
        return  axiosCLient.get(url);
    },
    post: async (order) =>{{
        const url = `/product/create`;
    }}
}
export default productApi;
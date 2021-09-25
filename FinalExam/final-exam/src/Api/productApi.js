import axiosClient from './axiosClient';
import axiosCLient from './axiosClient';
const productApi ={
    getAll:  (params) =>{
        const url ='/product/index';
        return  axiosCLient.get(url, {params});
    },
    get:  (id) => {
        const url =`/product/${id}`;
        console.log({url});
        return  axiosCLient.get(url);
    },
    create:  (product) =>{{
        const url = `/product/create`;
        return axiosClient.post(url,product);
    }},
    delete: (id) =>{
        const url = `product/delete/${id}`;
        return axiosCLient.get(url)
    },
    update:(newProduct) =>{
        const url = `product/update/${newProduct._id}`;
        return axiosCLient.post(url,newProduct);
    }
}
export default productApi;
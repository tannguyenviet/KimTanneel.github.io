import axiosCLient from './axiosClient';
const orderApi ={
    getAll:  (params) =>{
        const url ='/order/index';
        return  axiosCLient.get(url, {params});
    },
    get:  (id) => {
        const url =`/order/${id}`;
        console.log({url});
        return  axiosCLient.get(url);
    },
    create:  (order) =>{{
        const url = `/order/create`;

        return axiosCLient.post(url,order);
    }},
    delete: (id) =>{
        const url = `order/delete/${id}`;
        return axiosCLient.get(url)
    },
    update:(newOrder) =>{
        const url = `order/update/${newOrder._id}`;
        return axiosCLient.post(url,newOrder);
    }
}
export default orderApi;
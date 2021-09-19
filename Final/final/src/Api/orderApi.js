import axiosCLient from 'Api/axiosClient';
const orderApi ={
    getAll:  (params) =>{
        const url ='/order/index';
        return axiosCLient.get(url, {params});
    },
    get:  (id) => {
        const url =`/order/${id}`;
        return axiosCLient.get(url);
    },
    create: (orders) =>{
        console.log('post orders',orders);
        const orderPost = {
            name_customer: orders.nameCustomer,
            phone: orders.phone,
            email: orders.email,
            products: orders.product,
            employee:orders.userId,            
        }
        const url='order/create';
        return axiosCLient.post(url,orderPost);
    }
}
export default orderApi;
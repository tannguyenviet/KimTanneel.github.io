import photoReducer from 'features/Photo/photoSlice';
import orderReducer from 'features/Order/orderSlice';
import productReducer from 'features/Product/productSlice'
const { configureStore } = require("@reduxjs/toolkit");
const rootReducer ={
    photos: photoReducer,
    orders:orderReducer,
    products:productReducer
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;
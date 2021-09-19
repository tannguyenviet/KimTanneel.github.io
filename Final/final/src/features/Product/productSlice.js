import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from 'Api/orderApi'
import productApi from 'Api/productApi';


// const inititalOrders = orderApi.getAll().then(res => res.data).catch(err => console.log(err));
const initialProducts = [
  {
    id: 91176,
    price: 3000, 
    name:'iphone 13XS',
    product: 'https://picsum.photos/id/532/300/300',
  },
  {
    id: 82605,
    price: 1000,
    name:'Iphone 12',
    product: 'https://picsum.photos/id/43/300/300',
  },
  
];
export const getApiProductList = createAsyncThunk('user/getMe',async(params,thunkAPI) =>{
  const listProduct = await productApi.getAll();
  console.log('orderAPI',orderApi);
  // thunkAPI.dispatch(reloadProductList(listProduct))
  return listProduct;
})
const product = createSlice({
  
  name: 'products',
  initialState: initialProducts,
  reducers: {
    addProduct: (state, action) => {
      // const newProduct = action.payload;
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      console.log('action remove',action.payload);
      const removeProductId = action.payload.id;
      return state.filter(product => product.id !== removeProductId);
    },
    updateProduct: (state, action) => {
      const newProduct = action.payload;
      const productIndex = state.findIndex(product => product.id === newProduct.id);

      if (productIndex >= 0) {
        state[productIndex] = newProduct;
      }
    },
    reloadProductList: (state, action) => {
      const newProductList = action.payload;
      console.log('newProductList',newProductList);
      // return newProductList;
    }
  },
  extraReducers:{
    [getApiProductList.pending] : (state) =>{
      

    },
    [getApiProductList.rejected]: (state, action) =>{
      
     
    },

    [getApiProductList.fulfilled]: (state, action) =>{
      state = action.payload;
     
    }
  }
});

const { reducer, actions } = product;
export const { addProduct, removeProduct, updateProduct,reloadProductList } = actions;
export default reducer;
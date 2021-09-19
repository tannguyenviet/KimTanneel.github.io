import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from 'Api/orderApi'
import productApi from 'Api/productApi';


// const inititalOrders = orderApi.getAll().then(res => res.data).catch(err => console.log(err));
const initialOrders = [
  
];
export const getApiOrderList = createAsyncThunk('user/getApiOrderList',async(params,thunkAPI) =>{
  const listOrder = await orderApi.getAll(params);
  console.log('orderAPI',orderApi);
  // thunkAPI.dispatch(reloadOrderList(listProduct))
  return listOrder;
})
export const getApiOrderById = createAsyncThunk('order/getApiOrderById',async(id,thunkAPI) =>{
  const listOrder = await orderApi.get(id);
  console.log('orderAPI',orderApi);
  // thunkAPI.dispatch(reloadOrderList(listProduct))
  return listOrder;
})
const order = createSlice({
  
  name: 'orders',
  initialState: {
    current:
      [
      
      ] 
    ,
    loading:false,
    error:''
  },
  reducers: {
    addOrder: (state, action) => {
      state.current.push(action.payload);

    },
    removeOrder: (state, action) => {
      console.log('action remove',action.payload);
      const removeOrderId = action.payload.id;
      return state.filter(order => order.id !== removeOrderId);
    },
    updateOrder: (state, action) => {
      const newOrder = action.payload;
      const orderIndex = state.findIndex(order => order.id === newOrder.id);

      if (orderIndex >= 0) {
        state[orderIndex] = newOrder;
      }
    },
    reloadOrderList: (state, action) => {
      const newOrderList = action.payload;
      console.log('newOrderList',newOrderList);
      // return newOrderList;
    }
  },
  extraReducers:{
    [getApiOrderList.pending] : (state) =>{
      state.loading = true;

    },
    [getApiOrderList.rejected]: (state, action) =>{
      state.loading = false;
    },

    [getApiOrderList.fulfilled]: (state, action) =>{
      state.loading = false
      state.current = action.payload; 
    }
  }
});

const { reducer, actions } = order;
export const { addOrder, removeOrder, updateOrder,reloadOrderList } = actions;
export default reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from 'Api/orderApi'
import productApi from 'Api/productApi';


// const inititalOrders = orderApi.getAll().then(res => res.data).catch(err => console.log(err));
const initialPhotos = [
  {
    id: 91176,
    category: 5,
    photo: 'https://picsum.photos/id/532/300/300',
    title: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.'
  },
  {
    id: 82605,
    category: 1,
    photo: 'https://picsum.photos/id/43/300/300',
    title: 'Ad officia magna veniam sunt.'
  },
  
];
// export const getMe = createAsyncThunk('user/getMe',async(params,thunkAPI) =>{
//   const listProduct = await orderApi.getAll();
//   console.log('orderAPI',orderApi);
//   // thunkAPI.dispatch(reloadPhotoList(listProduct))
//   return listProduct;
// })
const photo = createSlice({
  
  name: 'photos',
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      console.log('action remove',action.payload);
      const removePhotoId = action.payload.id;
      return state.filter(photo => photo.id !== removePhotoId);
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex(photo => photo.id === newPhoto.id);

      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
    reloadPhotoList: (state, action) => {
      const newPhotoList = action.payload;
      console.log('newPhotoList',newPhotoList);
      // return newPhotoList;
    }
  }
 
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto,reloadPhotoList } = actions;
export default reducer;
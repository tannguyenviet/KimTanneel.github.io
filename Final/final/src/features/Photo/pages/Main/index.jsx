import PhotoList from 'features/Photo/components/PhotoList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { removePhoto } from 'features/Photo/photoSlice'
import orderApi from 'Api/orderApi';
MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector(state => state.photos);

  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`
    // 
    history.push(editPhotoUrl);
    console.log('Edit: ', photo);
  }
  const handlePhotoRemoveClick = (photo) => {
    console.log({ photo });
    const action = removePhoto(photo);
    dispatch(action);
    // gọi api post delete 
  }

  useEffect(() => {
    console.log('vao usseefefct Main page');
    const fetchOrderList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        }
        const response = await orderApi.getAll(params);
        console.log('data', response);
      }
      catch (err) {
        console.log('Fail to fetch order list');
      }
    }
    fetchOrderList();
  })
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
        <PhotoList photoList={photos} onPhotoEditClick={handlePhotoEditClick} onPhotoRemoveClick={handlePhotoRemoveClick}></PhotoList>
      </Container>
    </div>
  );
}

export default MainPage;
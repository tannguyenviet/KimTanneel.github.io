import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { removePhoto } from 'features/Photo/photoSlice'
import LoginForm from './components/LoginForm';
MainPage.propTypes = {};

function MainPage(props) {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const photos = useSelector(state => state.photos);

  const handleloginClick = (account) => {
    // const editPhotoUrl = `/photos/${photo.id}`
    // history.push(editPhotoUrl);
    // console.log('Edit: ', photo);
  }
  const handleForgotPassWord = (account) => {
      console.log();
    // console.log({ photo });
    // const action = removePhoto(photo);
    // dispatch(action);
  }
  console.log('List pho to', photos);
  return (
    <div className="login-form">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <LoginForm />
        
      </Container>
    </div>
  );
}

export default MainPage;
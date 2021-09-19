// import PhotoForm from 'features/Photo/components/PhotoForm';
import PhotoForom from '../../components/PhotoForm';
import { addPhoto, updatePhoto } from '../../../../features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// import { randomNumber } from 'utils/common';
import './styles.scss';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  console.log('add Edit');
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const editedPhoto = useSelector(state => state.photos).find(x => x.id === +photoId);
  console.log('editPhoto', editedPhoto);
  const initialValues = isAddMode
    ? {
      title: '',
      category: null,
      photo: '',
    }
    : editedPhoto

  const handleSubmit = (values) => {

    return new Promise(resolve => {
      if (isAddMode) {
        setTimeout(() => {
          const action = addPhoto(values);
          dispatch(action);

          resolve(true);
        }, 1500)
      }
      else {
        const action = updatePhoto(values);
        dispatch(action);
      }
      history.push('/photos')
    })

  }

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
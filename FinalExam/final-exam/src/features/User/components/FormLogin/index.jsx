import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

LoginForm.propTypes = {
    loginData: PropTypes.object,
    handleSubmitForm: PropTypes.func,
};
LoginForm.defaultProps = {
    loginData: { username: '', passsword: '' },
    handleSubmitForm: PropTypes.func,
}
function LoginForm(props) {

    const { handleSubmitForm, loginData, errorMessage } = props;
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: loginData });
    const onSubmit = (data) => {
        console.log('vaooo');
        if (!handleSubmitForm) return;
        handleSubmitForm(data);
    };
    if (errorMessage) { console.log({ errorMessage }); }
    return (
        <div className='wrap-form-product mt-5'>
            <form className='form-product' onSubmit={handleSubmit(onSubmit)}>
                <label>UserName</label>
                <input
                    {...register("username", {
                        required: true,
                    })}
                />
                {errors?.username?.type === "required" && <p>This field is required</p>}
                <label>Password</label>
                <input
                    type='password'
                    {...register("password", {
                        required: true,
                    })}
                />
                {errors?.password?.type === "required" && <p>This field is required</p>}
                {errorMessage && <p className='error'>{errorMessage.message}</p>}

                <div className='mt-3'>
                    <button type='submit' className='btn btn-primary pl-4 pr-4'> Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
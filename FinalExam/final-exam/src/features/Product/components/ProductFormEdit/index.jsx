import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import './ProductFormEdit.scss';
import { Link } from 'react-router-dom';
ProductFormEdit.propTypes = {
    handleOnSumitEdit: PropTypes.func,
    product: PropTypes.object,
};

function ProductFormEdit(props) {
    const { product, handleOnSubmitEdit } = props;
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: product });
    const onSubmit = (data) => {
        if (!handleOnSubmitEdit) return;
        handleOnSubmitEdit(data);
    };
    return (

        <div className='wrap-form-product mt-5'>
            <div className='wrap-link-product'>
                <Link className='btn btn-primary mb-3' to='/products'>Return</Link>

            </div>
            <form className='form-product' onSubmit={handleSubmit(onSubmit)}>
                <label>Name Product</label>
                <input
                    {...register("name", {
                        required: true,
                        maxLength: 20,
                    })}
                />
                {errors?.name?.type === "required" && <p>This field is required</p>}
                {errors?.name?.type === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                )}
                {errors?.firstName?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                )}
                {/* Price */}
                <label>Price</label>
                <input {...register("price", { required: true, min: 0, max: 1000000 })} />
                {errors?.price?.type === "required" && <p>This field is required</p>}
                {errors?.price && (
                    <p>Price Must be older then 0 and younger then 100000 $</p>
                )}

                {/* description */}
                <label>Description</label>
                <input {...register("description", { required: true, min: 0, max: 1000000 })} />
                {errors.age && (
                    <p>You Must be older then 18 and younger then 99 years old</p>
                )}
                {errors?.description?.type === "required" && <p>This field is required</p>}
                <button className='btn btn-primary mt-4' type='submit'>Submit</button>
            </form>
        </div>

    );
}

export default ProductFormEdit;
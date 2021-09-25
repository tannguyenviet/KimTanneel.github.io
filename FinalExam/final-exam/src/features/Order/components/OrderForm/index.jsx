import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import ReactSelect from "react-select"
// import './OrderForm.scss';
import { Link, useHistory, useParams } from 'react-router-dom';
OrderForm.propTypes = {
    order: PropTypes.array,
    handelSubmitForm: PropTypes.func,
    productListOption: PropTypes.array,

};
OrderForm.defaultProps = {
    order: [],
    handelSubmitForm: null,
    productListOption: [],
};

function OrderForm(props) {
    const { order, handleSubmitForm, productListOption } = props;
    const history = useHistory();

    const { register, handleSubmit, getValues, setValue, control, watch, formState: { errors } } = useForm({
        defaultValues: {
            products: [],
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "products"
    });
    const handleOnChangeProduct = (id) => {
        console.log({ id })
        console.log('values', getValues());
    }
    const onSubmit = (data) => {
        const products = data.products.map(product => ({ _id: product.value, quantity: product.quantity, price: product.price })).filter(product => product._id)
        const newData = { ...data, products: products, user_id: 2 };

        if (!handleSubmitForm) return;
        handleSubmitForm(newData)
        history.push({ pathname: '/orders', state: { message: 'Add Success' } });
    };
    return (
        <div className='wrap-form-order mt-5'>

            <form className='form-order' onSubmit={handleSubmit(onSubmit)}>
                <label>Name Customer</label>
                <input
                    {...register("name_customer", {
                        required: true,
                        maxLength: 30,
                    })}
                />
                {errors?.name_customer?.type === "required" && <p>This field is required</p>}
                {errors?.name_customer?.type === "maxLength" && (
                    <p>First name cannot exceed 30 characters</p>
                )}

                {/* Price */}
                <label>Phone</label>
                <input {...register("phone", { required: true })} />
                {errors?.phone?.type === "required" && <p>This field is required</p>}

                {/* Email */}
                <label>Email</label>
                <input {...register("email")} />

                <label>Products</label>
                <ul className='form-order-list-product'>
                    {fields.map((item, index) => {
                        return (
                            <>
                                <li key={item.id}>
                                    <Controller
                                        name={`products.${index}`}
                                        isClearable
                                        control={control}
                                        rules={{ required: true, min: 10 }}
                                        render={({ field }) => (
                                            <ReactSelect
                                                className='form-select-order'
                                                {...field}
                                                options={
                                                    productListOption.map(pro => ({ value: pro._id, label: pro.name, ...pro }))
                                                }
                                            />
                                        )}
                                    />

                                    <input min={0} max={100} type='number' defaultValue={1} placeholder='' {...register(`products.${index}.quantity`)} />
                                    <p id={`price${index}`} className='price' min={0} type='number' disabled placeholder=''>2000</p>

                                    <button className='delete-row btn btn-danger' type="button" onClick={() => remove(index)}>
                                        Delete
                                </button>
                                </li>
                                {errors?.gender?.type === "pattern" && (
                                    <p className='error'>This field is required</p>
                                )}
                            </>
                        );
                    })}
                </ul>

                <button
                    className='btn btn-success add-more'
                    type="button"
                    onClick={() => append({})}
                >Add more</button>

                <label>Total Cost</label>
                <input {...register("total_cost")} />
                {errors.age && (
                    <p>You Must be older then 18 and younger then 99 years old</p>
                )}
                <button className='btn btn-primary mt-4' type='submit'>Submit</button>
            </form>
            <div className='wrap-link-order'>
                <Link className='btn btn-secondary mb-3' to='/orders'>Return</Link>
            </div>
        </div>

    );
}

export default OrderForm;
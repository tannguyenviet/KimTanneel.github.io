import React from 'react';
import PropTypes from 'prop-types';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import ReactSelect from "react-select"
// import './OrderFormEdit.scss';
import { Link, useHistory, useParams } from 'react-router-dom';
OrderFormEdit.propTypes = {
    order: PropTypes.object,
    handelSubmitForm: PropTypes.func,
    productListOption: PropTypes.array,

};
OrderFormEdit.defaultProps = {
    order: null,
    handelSubmitForm: null,
    productListOption: [],
};

function OrderFormEdit(props) {
    const { order, handleSubmitForm, productListOption } = props;
    const history = useHistory();

    const { register, handleSubmit, getValues, control, formState: { errors } } = useForm({
        defaultValues: order
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "products"
    });
    const handleOnChangeProduct = (id) => {
        console.log({ id })
        console.log('values', getValues());
    }
    // lấy những product convert sang dạng value và label để làm default select
    const productSelectedList = order.products.map((product) => ({ label: productListOption.find(option => option._id === product._id).name, value: product._id }))
    console.log('first', productSelectedList);
    const productSelected = productSelectedList.find((product) => product.value === order.products[0]._id)
    console.log('first', productSelected);

    // console.log('productSelected', productSelected)
    const onSubmit = (data) => {
        const products = data.products.map(product => ({ _id: product.value, quantity: product.quantity, price: product.price })).filter(product => product._id)
        const newData = { ...data, products: products, user_id: 2 };
        console.log({ newData });
        if (!handleSubmitForm) return;
        // handleSubmitForm(newData)
        // history.push({ pathname: '/orders', state: { message: 'Add Success' } });
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
                            <li key={item.id}>
                                <Controller

                                    name={`products.${index}`}
                                    isClearable
                                    control={control}
                                    rules={{ required: true, min: 10 }}
                                    render={({ field }) => (
                                        <ReactSelect
                                            value={productSelectedList.find((product) => product.value === order.products[index]._id)}
                                            className='form-select-order'
                                            {...field}
                                            options={
                                                productListOption.map(pro => ({ value: pro._id, label: pro.name }))
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
                            //     {errors?.gender?.type === "pattern" && (
                            //         <p className='error'>This field is required</p>
                            //     )}
                            // </>
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

export default OrderFormEdit;
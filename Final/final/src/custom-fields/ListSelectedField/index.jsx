import productApi from 'Api/productApi';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStore } from 'react-redux';
import Select from 'react-select';
import { FormGroup, Label, FormFeedback } from 'reactstrap';

ListSelectedField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

ListSelectedField
    .defaultProps = {
    listProduct: [],
    listProductSelected: [],
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function ListSelectedField(props) {
    // const [listProduct, setListProduct] = useState( () => {
    //     const listProduct = await productApi.getAll();
    //     setListProduct(listProduct)
    //     console.log('listProduct', listProduct);
    // })
    const { field, form, options, label, placeholder, disabled } = props;
    console.log('optionsssss', options);
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name]


    const selectedOption = listProduct.find(option => option._id === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }

    return (
        <div>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}

                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}

                    placeholder={placeholder}
                    isDisabled={disabled}
                    options={options}
                    className={showError ? 'is-invalid' : ''}
                />
                {/* {showError && <FormFeedback></FormFeedback>} */}
                <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
            </FormGroup>
        </div>

    );
}

export default ListSelectedField
    ;
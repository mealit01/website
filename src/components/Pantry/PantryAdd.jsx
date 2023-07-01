import React from 'react'
import Modal from '../Modal/Modal'

import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useAddPantryItemMutation } from '../../state/features/pantry/pantryService'
import { setData } from "../../state/features/pantry/pantrySlice";

const initialValues = {
    name: '',
    quantity: '',
    expiryDate: '',
    category: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
    category: Yup.string().required('Required')
})

function PantryAdd({ close }) {
    const dispatch = useDispatch();

    const [addPantryItem, { isLoading }] = useAddPantryItemMutation();

    const onSubmit = async (values) => {
        try {
            await addPantryItem(values);
            dispatch(setData());
        } catch (error) {
            console.log(error);
        }
        close();
    }

    return (
        <Modal show={true} close={true} onClose={close} title={`Add Item to Pantry`}>
            <div className="list__add--body">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <>
                        <div className="list__add">
                            <Form className="list__add--form">
                                <div className="list__add--form--group">
                                    <Field type="text" name="name" id="name" placeholder="Name" />
                                    <ErrorMessage name="name" />
                                </div>
                                <div className="list__add--form--group">
                                    <Field type="text" name="quantity" id="quantity" placeholder="Quantity (unit)" />
                                    <ErrorMessage name="quantity" />
                                </div>

                                <div className="list__add--form--group">
                                    <Field type="date" name="expiryDate" id="date" placeholder="Select a expiry date" />
                                    <ErrorMessage name="date" />
                                </div>
                                <div className="list__add--form--group">
                                    <Field as="select" name="category" id="category">
                                        <option value="" className="placeholder">Select a category</option>
                                        <option value="meat">Meat</option>
                                        <option value="vegetables & fruits">Vegetables & Fruits</option>
                                        <option value="dairy">Dairy</option>
                                        <option value="grains & nuts">Grains & Nuts</option>
                                        <option value="spices">Spices</option>
                                        <option value="sauces & condiments">Sauces & Condiments</option>
                                        <option value="beverages">Beverages</option>
                                        <option value="snacks">Snacks</option>
                                        <option value="other">Other</option>
                                    </Field>
                                    <ErrorMessage name="category" />
                                </div>
                                <div className="list__add--form--group add">
                                    <button className="add" type="submit">
                                        {isLoading ? "Adding..." : "Add to Pantry"}
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </>
                </Formik>

            </div>

        </Modal>
    )
}

export default PantryAdd
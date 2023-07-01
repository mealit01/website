import React from 'react'
import Modal from '../Modal/Modal'

import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useAddShoppingListItemMutation } from '../../state/features/shoppingList/shoppingListService'
import { setData } from "../../state/features/shoppingList/shoppingListSlice";

const initialValues = {
    name: '',
    quantity: '',
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
})

function ShoppingAdd({ close }) {
    const [addShoppingItem, { isLoading }] = useAddShoppingListItemMutation();
    const dispatch = useDispatch();
    const onSubmit = async (values) => {
        try {
            await addShoppingItem(values);
            dispatch(setData());
        } catch (error) {
            console.log(error);

        }
        close();
    }

    return (
        <Modal show={true} close={true} onClose={close} title={`Add Item to Shoppinglist`}>
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

                                <div className="list__add--form--group add">
                                    <button className="add" type="submit">
                                        {isLoading ? "Adding..." : "Add to Shoppinglist"}
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

export default ShoppingAdd
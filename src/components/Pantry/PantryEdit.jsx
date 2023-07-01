import React from 'react'
import Modal from '../Modal/Modal'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import { useUpdatePantryItemMutation, useDeletePantryItemMutation } from "../../state/features/pantry/pantryService";

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
})


function PantryEdit({ close, item }) {
    const initialValues = {
        name: item.name,
        quantity: item.quantity,
        expiryDate: item.expiryDate,
        category: item.category
    }

    const [updatePantryItem, { isLoading }] = useUpdatePantryItemMutation();
    const [deletePantryItem, { isLoading: isDeleting }] = useDeletePantryItemMutation();

    const onSubmit = async (values) => {
        try {
            console.log({ ...values, _id: item._id });
            await updatePantryItem({ ...values, _id: item._id });
        } catch (error) {
            console.log(error);
        }
        close();
    }

    const handleDeleteItem = async () => {
        try {
            await deletePantryItem(item._id);
        } catch (error) {
            console.log(error);
        }
        close();
    }



    return (
        <Modal show={true} close={true} onClose={close} title={`Edit ${item.name} item`} >
            <div className="list__add">
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
                                    <ErrorMessage name="expiryDate" />
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
                                    <button className="delete" type="button" onClick={handleDeleteItem}>
                                        {isDeleting ? "Deleting..." : "Delete "}
                                    </button>
                                    <Field as="button" type="submit" className="edit" disabled={isLoading}>
                                        {isLoading ? "updating..." : "Update"}
                                    </Field>
                                </div>
                            </Form>
                        </div>
                    </>
                </Formik>
            </div>
        </Modal>
    )
}

export default PantryEdit
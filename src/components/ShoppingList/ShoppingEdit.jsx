import React from 'react'
import Modal from '../Modal/Modal'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { useUpdateShoppingListItemMutation, useDeleteShoppingListItemMutation } from '../../state/features/shoppingList/shoppingListService'

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
})

function PantryEdit({close, item}) {
    const initialValues = {
        name: item.name,
        quantity: item.quantity,
    }
    
    const [updateShoppingListItem, { isLoading }] = useUpdateShoppingListItemMutation();
    const [deleteShoppingListItem, { isLoading: isDeleting }] = useDeleteShoppingListItemMutation();

    const onSubmit = async (values) => {
        try {
            console.log({ ...values, _id: item._id });
            await updateShoppingListItem({ ...values, _id: item._id });
        } catch (error) {
            console.log(error);
        }
        close();
    }

    const handleDeleteItem = async () => {
        try {
            await deleteShoppingListItem(item._id);
        } catch (error) {
            console.log(error);
        }
        close();
    }


    return (
        <Modal show={true} close={true} onClose={close} title={`Edit ${item.name} item`} >
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
import React from 'react'
import Modal from '../Modal/Modal'

import { useSelector } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


let initialValues = {};
let validationSchema = '';

function ListAdd({ handleAddItem, close, title }) {
    const { loading } = useSelector(state => {
        if (title === "Pantry")
            return state.pantry
        else
            return state.shoppingList
    });


    React.useEffect(() => {
        if (title === "Pantry") {
            initialValues = {
                name: '',
                quantity: '',
                date: '',
                category: ''
            }
            validationSchema = Yup.object({
                name: Yup.string().required('Required'),
                quantity: Yup.string().required('Required'),
                date: Yup.string().required('Required'),
                category: Yup.string().required('Required')
            })
        } else {
            initialValues = {
                name: '',
                quantity: '',
            }
            validationSchema = Yup.object({
                name: Yup.string().required('Required'),
                quantity: Yup.string().required('Required'),
            })
        }
    }, [title])

    const onSubmit = (values, onSubmitProps) => {
        handleAddItem(values);
        onSubmitProps.resetForm();
    }

    return (
        <Modal show={true} close={true} onClose={close} title={`Add Item to ${title}`} >
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
                                {title === "Pantry" && (
                                    <>
                                        <div className="list__add--form--group">
                                            <Field type="date" name="date" id="date" placeholder="Select a expiry date" />
                                            <ErrorMessage name="date" />
                                        </div>
                                        <div className="list__add--form--group">
                                            <Field as="select" name="category" id="category">
                                                <option value="" className="placeholder">Select a category</option>
                                                <option value="Fruit">Fruit</option>
                                                <option value="Vegetable">Vegetable</option>
                                                <option value="Meat">Meat</option>
                                                <option value="Dairy">Dairy</option>
                                                <option value="Bakery">Bakery</option>
                                                <option value="Pantry">Pantry</option>
                                                <option value="Frozen">Frozen</option>
                                                <option value="Other">Other</option>
                                            </Field>
                                            <ErrorMessage name="category" />
                                        </div>
                                    </>
                                )}
                            <div className="list__add--footer">
                                {/* <button className="add" onClick={() => handleAddItem()}>Add to {title}</button> */}
                                <button className="add" type="submit">
                                    {loading ? "Adding..." : "Add to " + title}
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

export default ListAdd
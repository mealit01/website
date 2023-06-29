import React from 'react'
import Modal from '../Modal/Modal'

function ListEdit({ handleEditItem, close , title, item}) {
    return (
        <Modal show={true} close={true} onClose={close} title={`Edit ${item.name} item`} >
            <div className="list__add">
                <div className="list__add--body">
                    <form className="list__add--form">
                        <div className="list__add--form--group">
                           
                            <input type="text" name="name" id="name" placeholder="Name" value={item.name} />
                        </div>
                        <div className="list__add--form--group">
                            
                            <input type="text" name="quantity" id="quantity" placeholder="Quantity (unit)" value={item.quantity} />
                        </div>
                        <div className="list__add--form--group">
                            
                            <input type="date" name="date" id="date" placeholder="Select a expiry date" />
                        </div>
                        <div className="list__add--form--group">
                            <select name="category" id="category">
                                <option value="" className="placeholder">Select a category</option>
                                <option value="Fruit">Fruit</option>
                                <option value="Vegetable">Vegetable</option>
                                <option value="Meat">Meat</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Pantry">Pantry</option>
                                <option value="Frozen">Frozen</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className="list__add--footer">
                    <button className="add" onClick={() => handleEditItem()}>Update</button>
                </div>
            </div>
        </Modal>
    )
}

export default ListEdit
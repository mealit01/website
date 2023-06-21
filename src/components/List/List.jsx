import React from 'react'
import ListFilter from './ListFilter'
import ListItems from './ListItems'

const listItems = {
    shoppingList: [
        {
            name: "Milk",
            quantity: "1 gallon"
        },
        {
            name: "Eggs",
            quantity: "1 dozen"
        },
        {
            name: "Bread",
            quantity: "1 loaf"
        },
        {
            name: "Chicken",
            quantity: "1 lb"
        },
        {
            name: "Beef",
            quantity: "1 lb"
        },
        {
            name: "Pork",
            quantity: "1 lb"
        },
        {
            name: "Fish",
            quantity: "1 lb"
        }],
    pantry: [
        {
            name: "Milk",
            quantity: "1 gallon"
        },
        {
            name: "Eggs",
            quantity: "1 dozen"
        },
        {
            name: "Bread",
            quantity: "1 loaf"
        },
        {
            name: "Chicken",
            quantity: "1 lb"
        },
        {
            name: "Beef",
            quantity: "1 lb"
        },
        {
            name: "Pork",
            quantity: "1 lb"
        },
        {
            name: "Fish",
            quantity: "1 lb"
        }],
}

function List({ title }) {
    return (
        <div className="list">
            <div className="list__header">
                <h1 className="list__header--title">{title}</h1>
                <button className="list__header--btn btn-add dark"></button>
            </div>
            
                {title === "Pantry" ? <ListFilter /> : null}

            <div className="list__items">
                {title === "Shopping List" ? <ListItems items={listItems.shoppingList} /> : <ListItems items={listItems.pantry} /> }
            </div>
        </div>
    )
}

export default List
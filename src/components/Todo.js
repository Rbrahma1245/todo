import React, { useState, useEffect } from 'react'
import './Todo.css'
import Buttons from './Buttons'
// import ReactDOM from 'react-dom'


const Todo = () => {

    const [message, setMessage] = useState('')
    const [items, setItems] = useState([])

    const [itemInfo, setItemInfo] = useState({});
    const [toggleEdit, setToggleEdit] = useState(true)
    const [newEdit, setNewEdit] = useState(null)

    let checked = false

    // const todoItem = {
    //     label: "Arun",
    //     id: 20 ,
    //     isCompleted: true,

    // }
    console.log(items)

    const textField = event => {
        setMessage(event.target.value)

    }


    const addList = () => {

        if (message === "") {
            alert("Enter Item List");
            return false;
        }

        else if (message && !toggleEdit) {

            setItems(items.map((elem, i) => {

                console.log(` index : ${i}  newEdit : ${newEdit}`)

                if (i === newEdit) {
                    return message
                }
                return elem
            }))

            setToggleEdit(true)
            setMessage('');
            setNewEdit(null)
        }
        else {
            setItems([...items, message])
            setMessage('')
        }
    };


    const deleteItem = (index) => {

        var newList = items.filter((item, i) => {
            return (i !== index)
        })

        setItems(newList)
    }


    const deleteAll = (item) => {

        if (items === "") {
            alert("No Items to Delete");
            return false;
        }
        let emptyList = []
        setItems(emptyList)

    }


    const updateItem = (index) => {

        let newEditList = items.filter((event, i) => {
            return i === index
        })

        console.log(newEditList)
        setToggleEdit(false)
        setMessage(newEditList)
        setNewEdit(index)
    }







    const handleOnChange = (index) => {

        items.filter((item, i) => {
            if (i === index) {
                setItemInfo((temp) => ({
                    ...temp, [i]: temp[i]
                        ? null
                        : {
                            id: index,
                            textName: item,
                            isCheck: !checked
                        }
                }));
            }
        })
    }

    useEffect(() => {
        console.log(itemInfo);
    }, [itemInfo]);



    return (
        <div className="container">
            <h2>Add Item List</h2>
            <div >
                <input className="itemList" type="text" placeholder=" Enter Item List"
                    onChange={textField} value={message}
                />

                {
                    toggleEdit ? <button className="addButton" onClick={addList} > Add </button> :
                        <button className="toggleEditButton" onClick={addList} > Update </button>

                }
            </div>
            <br />
            <div>
                <ol>
                    {items.map((itemval, index) => {
                        return (
                            <div key={index}>
                                <Buttons text={itemval} id={index}

                                    trueOrFalse={itemInfo[index]}
                                    onSelectDelete={() => deleteItem(index)}
                                    onSelectUpdate={() => updateItem(index)}
                                    onSelectIsCheck={() => handleOnChange(index)}

                                />
                            </div>

                        )
                    })}

                </ol>
                <div>
                    <button className="removeAll" onClick={deleteAll} >  Delete All   </button>
                </div>

            </div>
        </div>

    )

}

export default Todo;
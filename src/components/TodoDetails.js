import React, { useState } from "react";
import './New.css'


let id = 1;

const TodoDetails = () => {



    const [todo, setTodo] = useState({})

    const [todoList, setTodoList] = useState([])

    const [filter, setFilter] = useState('all')




    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setTodo({ ...todo, [key]: value })

        // console.log(todo)


    }

    const handleAdd = () => {

        setTodoList([...todoList, { ...todo, id: id++ }])
        setTodo({})

    }


    // console.log(todoList)





    const handleChecked = (id) => {

        const newList = todoList.map((todo) => {

            // console.log(todo)
            // console.log(`id : ${id} todo.id : ${todo.id}`)

            if (id === todo.id)
                return { ...todo, isDone: !todo.isDone }
        }

        )

        setTodo(newList)
        console.log(newList)
    }



    const handleDelete = (id) => {
        const newList = todoList.filter((todo) => id !== todo.id)
        setTodoList(newList)
    }


    const getFilterList = (list) => {

        switch (filter) {
            case 'all': return list;
            case 'done': return list.filter(item => item.isDone)
            case 'not-done': return list.filter(item => !item.isDone)
        }
    }


    console.log(filter)

    return (
        <div>
            <div >

                <input type="text" onChange={handleChange} name="title" value={todo.title || ''} />
                <input type="text" onChange={handleChange} name="description" value={todo.description || ''} />
                <button onClick={handleAdd}>Submit</button>
            </div>
            <br />
            <div>
                <button onClick={() => setFilter('all')}>show All</button>
                <button onClick={() => setFilter('done')}>show done</button>
                <button onClick={() => setFilter('not-done')}>show not done</button>
            </div>


            <div>

                {getFilterList(todoList).map((itemList, index) => {

                    // console.log(itemList.id)
                    return (

                        <div className="itemList" key={index}>

                            <div>
                                <h4>{itemList.title}  </h4>
                                <p>{itemList.description}</p>

                            </div>

                            <input type="checkbox" onClick={() => handleChecked(itemList.id)} />
                            <button onClick={() => handleDelete(itemList.id)}>Delete</button>

                        </div>

                    )


                })}


            </div>

        </div>
    )
}





export default TodoDetails
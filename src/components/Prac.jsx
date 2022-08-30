import React, { useState, useEffect } from 'react'
import './Todo.css'
import Loading from './Loading'
import axios from 'axios';






const Prac = () => {




    const [users, setUsers] = useState([])


    const [userId, setUserId] = useState()








    const filterUserId = (completed) => {


        const allNew = [...new Set(users.map((currElem) => currElem.completed))];
        console.log(allNew)

        setUserId(allNew)








        console.log(completed)


        const updatedUserId = users.filter((curElem) => {

            return curElem.completed === completed


        })

        console.log(updatedUserId)

        setUsers(updatedUserId)

    }








    // const getuser = async () => {

    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    //     setUsers(await response.json())
    //     // console.log(data)

    // }

    // useEffect(() => { 
    //     getuser();
    // }, [])






    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')

            .then((res) => setUsers(res.data)

            )

    }, [])



    // console.log(userId)







    return (
        <div>

            {/* {userId.map((currElem, index) => {

                console.log(currElem)

                return <button onClick={() => filterUserId(currElem)} >currElem</button>

            })
            } */}



            {
                users.map((currElem, index) => {


                    const { userId, id, title, completed } = currElem

                    // console.log(completed)


                    return (
                        <>

                            <button onClick={() => filterUserId(completed)} >True</button>
                            <button onClick={() => filterUserId(completed)} >False</button>


                            <div className="container" key={index}>

                                <div>
                                    <br />
                                    {id}
                                    <br />
                                    {title}
                                    <br />
                                    {completed}
                                </div>






                            </div>
                        </>

                    )
                })
            }

        </div >

    )



}




export default Prac;
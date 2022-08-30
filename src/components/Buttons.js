import React from 'react'


// import ReactDOM from 'react-dom'


const Buttons = (props) => {

    return (
        <div>
            <div key={props.id}  >

                <li className="listOfItems" > {props.text}  <button className="deleteButton"
                    onClick={props.onSelectDelete}
                > Delete</button>

                    <button className="editButton" onClick={props.onSelectUpdate}
                    >  Update  </button>

                    <input type="checkbox" className="checkBox"
                        checked={props.trueOrFalse}
                        onChange={props.onSelectIsCheck}
                    />

                </li>
            </div>
        </div>
    )

}


export default Buttons;
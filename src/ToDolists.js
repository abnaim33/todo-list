import React from 'react';
import './index.css'
const ToDolists = (props) => {
    return (
        <>
            <div className="todo-style">
                <i className="fa fa-times" aria-hidden="true" />
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default ToDolists;
import React from 'react';
import { Link } from "react-router-dom";
import TodoApp from '../../components/TodoApp/TodoApp';

function Todo() {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Todo App</h1>

            <TodoApp />

            <Link to='/' style={{
                color: 'white',
                display: 'block',
                marginTop: '20px'
            }}>Take me back...</Link>
        </div>
    );
}

export default Todo;
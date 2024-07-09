import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Learning reactJS' },
            { id: 'todo3', title: 'Reading: The Hauting Of Hill House' },
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        }) 

        toast.success("Add successfully!") 
    }

    render() {
        let { listTodos } = this.state
        return (
            <>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo = {this.addNewTodo}
                    />

                    <div className="list-todo-content">
                        { listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <>
                                        <div className="todo-child" key={item.id}>
                                            <span>{index + 1}. {item.title}</span>
                                            <div className="btns">
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </div>     
                                        <hr></hr> 
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

}

export default ListTodo
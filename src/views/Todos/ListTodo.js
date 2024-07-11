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
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add successfully!")
    }

    handleDeleteTodo = (todo) => {
        let currentList = this.state.listTodos
        currentList = currentList.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentList
        })
        toast.success("Delete successfully!")
    }

    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state
        //save
        let isEmpty = Object.keys(editTodo).length === 0
        //console.log(">>> Check empty object: ", editTodo, isEmpty)
        if (isEmpty === false && editTodo.id === todo.id) {
            let isTitleEmpty = editTodo.title.length === 0
            if (isTitleEmpty === false) {
                let listTodosCopy = [...listTodos]
                let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
                listTodosCopy[objIndex].title = editTodo.title
                this.setState({
                    listTodos: listTodosCopy,
                    editTodo: ''
                })
                toast.success("Update successfully!")
                return
            } else {
                toast.error("Title cannot be empty!")
                return
            }
        }

        //edit
        this.setState({
            editTodo: todo
        })


    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
        // } else {
        //     toast.error("Title cannot be empty!")
        //     return
        // }


    }



    render() {
        let { listTodos, editTodo } = this.state
        let isEmpty = Object.keys(editTodo).length === 0

        return (
            <>
                <p>Simple TODO App with ReactJS</p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />

                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmpty === true ?
                                            <span>{index + 1}. {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1}. <input
                                                            className="edit-todo"
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>{index + 1}. {item.title}</span>
                                                }

                                            </>
                                        }
                                        <div className="btns">
                                            <button
                                                onClick={() => this.handleEditTodo(item)}
                                            >
                                                {isEmpty === false && editTodo.id === item.id ?
                                                    "Save" : "Edit"
                                                }
                                            </button>

                                            <button
                                                onClick={() => this.handleDeleteTodo(item)}
                                            >Delete</button>
                                        </div>
                                    </div>
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
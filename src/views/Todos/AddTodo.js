import React from "react";
// import './ListTodo.scss'
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleClickAddTodo = () => {
        if(!this.state.title) {
            //if(undefined/null/empty) =>fasle
            toast.error("Missing title!")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state
        return (
            <div className="list-todo-container">
                <div className="add-todo">
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => this.handleOnChangeTitle(event)}
                    />
                    <button
                        type="button"
                        onClick={() => this.handleClickAddTodo()}
                    >Add</button>
                </div>
            </div>
        )
    }

}

export default AddTodo
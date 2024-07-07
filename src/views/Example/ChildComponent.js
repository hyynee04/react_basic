import React from "react";

class ChildComponent extends React.Component {
    /*
    state is an object {key: value, ...}
    call syntax: this.state.key (this is the class)
    Once state values are changed, JSX will be changed along without refreshing the page
    */
    state = {
        firstName: "",
        lastName: ""
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault() //Prevent reloading page
        console.log('>>> Check data input: ', this.state)
    }
    /*
    JSX allows a function of JS can return a block of html code
    JSX => return block
    */
    render() {
        console.log(">>> check props: ", this.props)
        // let name = this.props.name
        // let age = this.props.age

        let { name, age } = this.props //shortage syntax. Variable names must be the same as object's keys
        return (
            <>
                <div>Child component name: {name} - age: {age}</div>
            </>
        )
    }
}

export default ChildComponent;
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
        console.log(">>> render call: ", this.state)
        return (
            <>
                <div>Child component: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;
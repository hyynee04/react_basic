import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
    /*
    state is an object {key: value, ...}
    call syntax: this.state.key (this is the class)
    Once state values are changed, JSX will be changed along without refreshing the page
    */
    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '500' },
            { id: 'job2', title: 'Tester', salary: '400' },
            { id: 'job3', title: 'Project Manager', salary: '1000' }
        ]
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
        //console.log(">>> render call: ", this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                    <br />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'21'}
                    address={'Ha Noi'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

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

    /*
    JSX allows a function of JS can return a block of html code
    JSX => return block
    */
    render() {
        //console.log(">>> render call: ", this.state)
        return (
            <>
                <AddComponent />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;
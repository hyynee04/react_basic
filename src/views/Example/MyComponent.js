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
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '500' },
            { id: 'job2', title: 'Tester', salary: '400' },
            { id: 'job3', title: 'Project Manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('>>> Check job from parent: ', job)
        // let currentJobs = this.state.arrJobs
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidMount() {
        console.log('Run component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Run component did update: ', 'prevState: ', prevState, 'current state:', this.state)
    }

    /*
    JSX allows a function of JS can return a block of html code
    JSX => return block
    */
    render() {
        console.log(">>> render call: ", this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;
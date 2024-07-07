import React from "react";
/*
class ChildComponent extends React.Component {
    render() {
        console.log(">>> check props: ", this.props)
        // let name = this.props.name
        // let age = this.props.age

        let { name, age, address, arrJobs } = this.props //shortage syntax. Variable names must be the same as object's keys
        return (
            <>
                <div className="job-list">
                    {
                        arrJobs.map((item) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
*/

const ChildComponent = (props) => {
    console.log(">>> check child props: ", props)
    let { arrJobs } = props //shortage syntax. Variable names must be the same as object's keys
    return (
        <div className="job-list">
            {
                arrJobs.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ChildComponent;
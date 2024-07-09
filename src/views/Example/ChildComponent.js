import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleClickDelete = (job) => {
        console.log(`>>> Check handleDelete: `, job)
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props //shortage syntax. Variable names must be the same as object's keys
        let { showJobs } = this.state
        // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        // console.log('>>> Check condition: ', check)
        //Condition using operator (condition? (true)result1: (false)result2)
        return (
            <>
                <div>
                    {showJobs === false ?
                        <input
                            type="button"
                            value={'Show'}
                            className="btn-show"
                            onClick={() => this.handleShowHide()}
                        />
                        :
                        <>
                            <div className="job-list"> {
                                arrJobs.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}$ <></>
                                            <span onClick={() => this.handleClickDelete(item)}>x</span>
                                        </div>

                                    )
                                })
                            }
                            </div>
                            <input
                                type="button"
                                value={'Hide'}
                                onClick={() => this.handleShowHide()}
                            />
                        </>
                    }
                </div>
            </>
        )
    }
}

/*
const ChildComponent = (props) => {
    console.log(">>> check child props: ", props)
    let { arrJobs } = props //shortage syntax. Variable names must be the same as object's keys
    return (
        <div className="job-list">
            {
                arrJobs.map((item) => {
                    if (+item.salary >= 500) {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}$
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
*/
export default ChildComponent;
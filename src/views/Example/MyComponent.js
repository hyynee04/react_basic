import React from "react";

class MyComponent extends React.Component {
    /*
    state is an object {key: value, ...}
    call syntax: this.state.key (this is the class)
    Once state values are changed, JSX will be changed along without refreshing the page
    */
    state = {
        name: '',
        university: 'DUT'
    }

    handleOnChangeName = (event) => {
        //this.state.name = event.target.value //bad code
        //setState will merge with object
        this.setState({
            name: event.target.value
        })
        //it will update state values immidiately
    }
    /*
    parameter (event) used to get target.value
    event is an object of html
    */

    handleClickButton = () => {
        alert('Click me!')
    }

    /*
    JSX allows a function of JS can return a block of html code
    JSX => return block
    */
    render() {
        console.log(`>>> call render: `, this.state)
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    The very first component, {this.state.name}
                </div>
                <div className="second">
                    University: {this.state.university}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>

        )
    }
}

export default MyComponent;
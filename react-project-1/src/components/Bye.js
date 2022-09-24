import React, { Component } from 'react'

class Bye extends Component{
    constructor(props) {
        super(props)
        this.state = {
            people: [
                {name: 'Zheng Yi'},
            ]
        }
    }

    clickHandler = () => {
        this.setState({
            people: [
                {name: 'Xin Hui'},
            ]
        })
    }
    
    render() {
        return (
        <div>
            <button onClick={this.clickHandler}>Change Name</button>
            <h1>Bye {this.state.people[0].name}</h1>
        </div>
        )
    }
}

export default Bye
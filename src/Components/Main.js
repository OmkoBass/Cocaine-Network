import React, { Component } from 'react'
import Generate from './Generate'

export default class Main extends Component {
    state = {
        Posts: []
    }

    getValues = (childData) => {
        this.setState({
            Posts: [...this.state.Posts, childData]
        })
    }

    render() {
        return (
            <div>
                <div className="main">
                    {this.state.Posts}
                </div>
                <hr/>
                <div className="generate">
                    <Generate callBack={this.getValues}/>
                </div>
            </div>
            
        )
    }
}

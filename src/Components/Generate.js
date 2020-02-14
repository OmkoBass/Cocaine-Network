import React, { Component } from 'react'

export default class Generate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: ''
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleDescChange = (event) => {
        this.setState({
            desc: event.target.value
        })
    }

    handleShare = () => {
        console.log(`You submitted:\n
        ${this.state.title}\n${this.state.desc}`)
    }
    render() {
        return (
            <div>
                <div className="userInput">
                    <label>Title:</label>

                    <input type="text" value={this.state.title}
                    onChange={this.handleTitleChange}></input>

                    <label>Description:</label>

                    <textarea value={this.state.desc}
                    onChange={this.handleDescChange}></textarea>

                    <button onClick={this.handleShare}>Generate</button>
                </div>
            </div>
        )
    }
}

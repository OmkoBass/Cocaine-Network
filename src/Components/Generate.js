import React, { Component } from 'react'
import Post from './Post'

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

    sendData = () => {
        if(this.state.title && this.state.desc) {
            this.props.callBack(<Post title={this.state.title} desc={this.state.desc}/>);
            this.setState({
                title: '',
                desc: ''
            })
        }
    };

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

                    <button onClick={this.sendData}>Share</button>
                </div>
            </div>
        )
    }
}

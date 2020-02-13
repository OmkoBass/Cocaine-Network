import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.title = props.title;
        this.desc = props.desc;
    }

    render() {
        return (
            <div className="container">
                <div className="post">
                    <h2>{this.title}</h2>
                    <p>{this.desc}</p>
                </div>
            </div>
        )
    }
}

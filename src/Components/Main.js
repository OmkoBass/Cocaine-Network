import React, { Component } from 'react'
import Post from './Post'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.Posts = props.Posts;
    }

    render() {
        return (
            <div className="main">
                <Post title="Jebo sam kera" desc="Imao sam seksa sa svojim kerom"/>
            </div>
        )
    }
}

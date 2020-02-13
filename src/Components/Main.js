import React, { Component } from 'react'
import Post from './Post'
import Generate from './Generate'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.Posts = props.Posts;
    }

    state = {
        Posts: this.Posts
    }

    render() {
        return (
            <div>
                <div className="main">
                    <Post title="Jebo sam kera" desc="Imao sam seksa sa svojim kerom"/>
                </div>
                <Generate/>
            </div>
            
        )
    }
}

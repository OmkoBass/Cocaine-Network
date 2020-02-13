import React, { Component } from 'react'

export default class Generate extends Component {
    render() {
        function share() {
            
        }

        return (
            <div>
                <div className="userInput">
                    <label>Title:</label>
                    <input type="text"></input>
                    <label>Description:</label>
                    <textarea></textarea>
                    <button onClick={share}>Generate</button>
                </div>
            </div>
        )
    }
}

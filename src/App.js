import React, { Component } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Generate from './Components/Generate'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Generate/>
                <Footer/>
            </div>
        )
    }
}

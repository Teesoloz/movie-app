import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">Type your movie title below</h1>
                <form className="form">
                    <label for="query" className="label">welcome</label>
                    <input className="search" placeholder="search movie here" type="text" name="query"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Form

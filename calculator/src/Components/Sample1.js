import React, { Component } from 'react'
import Sample from './Sample'
import UserContext from './UserContext'

export class Sample1 extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                Component Sample1 {this.context}
                <Sample/>
            </div>
        )
    }
}
// Sample1.contextType = UserContext
export default Sample1

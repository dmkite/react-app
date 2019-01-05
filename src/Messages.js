import React, {Component} from 'react'
import Message from './Message'

export default class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected: []
        }
    }

    

    render(){
        return (
            <div className="container-fluid">
                {this.props.messages.map(msg => <Message key={msg.id} {...msg} handleChange={() => this.props.handleChange(msg.id)} />)}
            </div>
        )
    }
}
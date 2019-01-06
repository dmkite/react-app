import React, {Component} from 'react'
import Message from './Message'

export default class Messages extends Component{
    constructor(props){
        super(props)
        this.state = {
            showMessage: []
        }
    }

    handleClick = (id) => {
        const newShowMessage = [...this.state.showMessage]
        const idx = newShowMessage.findIndex(msgId => msgId === id)
        if(idx === -1){
            newShowMessage.push(id)
        }
        else{
            newShowMessage.splice(idx, 1)
        }
        
        this.setState({
            showMessage: newShowMessage
        })

        this.props.changeMessages({ messageIds: [id], command: 'read', read: true })
    }

    render(){
        return (
            <div className="container-fluid">
                {this.props.messages.map(msg => <Message key={msg.id} {...msg} handleChange={() => this.props.handleChange(msg.id)} starMessage={()=> this.props.starMessage(msg.id)} showMessage={this.state.showMessage.find( ele => ele === msg.id ) ? true : false} 
                handleClick={() => this.handleClick(msg.id)}/>)}
            </div>
        )
    }
}
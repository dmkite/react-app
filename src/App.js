import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import ToolBar from './ToolBar'
import Messages from './Messages'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      errorState:false,
      messages: [{
        "id": 0,
        "subject": "Empty",
        "read": false,
        "selected":false,
        "starred": true,
        "labels": []
      }]
    }
  }

  getMessages = async () => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/messages`)
      const newMessages = response.data.map(msg => {
        if(!msg.selected) msg.selected = false
        if(!msg.read) msg.read = false
        return msg
      })
      this.setState({
        messages: newMessages
      })
    } catch(err){
        this.setState({
          errorState:true
        })
      }
  }

  changeMessages = async (body) => {
    body.messageIds = this.state.messages.reduce((acc, msg) => {
      if (msg.selected) acc.push(msg.id)
      return acc
    }, [])
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/messages`, body)
      this.setState({
        messages: response.data
      })
    } catch (err) {
      this.setState({
        errorState: true
      })
    }
  }

  componentDidMount(){
    this.getMessages()
  }

  handleChange = (id) => {
    const newMessages = [...this.state.messages]
    const idx = newMessages.findIndex(ele => ele.id === id)

    if (idx !== -1) {
      newMessages[idx].selected = !newMessages[idx].selected
      this.setState({
        messages: newMessages
      })
    }
    else {
      this.setState({errorState:true})
    }
  }

  selectAll = () => {
    const newMessages = [...this.state.messages]
    const numSelected = newMessages.reduce((acc, msg) => {
      if(msg.selected) acc++
      return acc
    }, 0)
    if(numSelected === newMessages.length){
      newMessages.forEach(msg => msg.selected = false)
    }
    else{
      newMessages.forEach(msg => msg.selected = true )
    }
    this.setState({
      messages: newMessages
    })
  }

  starMessage = async (id) => {
    try {
      const body = {
        messageIds: [id],
        command: 'star'
      }
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/api/messages`, body)
      this.setState({
        messages: response.data
      })
    } catch (err) {
      this.setState({
        errorState: true
      })
    }
 }

  render() {
    return (
      <div className="wrapper">
        <ToolBar 
          unread={this.state.messages.reduce((acc, message) => {
            if (!message.read) acc++
            return acc
          }, 0)} 
          changeMessages={this.changeMessages}
          selectAll={this.selectAll}
        />
        {this.state.errorState 
          ? <div className="errorState">Something messed up :(</div> 
          : <Messages messages={this.state.messages} handleChange={this.handleChange} starMessage={this.starMessage}/>}
      </div>
    );
  }
}

export default App;

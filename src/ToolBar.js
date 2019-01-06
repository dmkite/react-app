import React, {Component} from 'react'
import NewMessage from './NewMessage'

export default class ToolBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            body: '',
            subject: '',
            openWriteMsg: false
        }
    }

    handleChange = (e, command) => {
        const body = {command, label: e.target.value}
        this.props.changeMessages(body)
    }

    handleClick = () => {
        this.setState({
            openWriteMsg: !this.state.openWriteMsg
        })
    }

    handleWrite = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMessage({
            body: this.state.body,
            subject:this.state.subject
        })
        this.setState({openWriteMsg:false})
    }

   render(){ 
        return (
                <div className="row toolbar">
                    <div className="col-md-12">
                        <p className="pull-right">
                            <span className="badge badge">{this.props.unread}</span>
                            {this.props.unread === 1 ? "unread message" : "unread messages"}
                        </p>

                        <a className="btn btn-danger" onClick={this.handleClick}>
                            <i className="fa fa-plus"></i>
                        </a>

                        <button className="btn btn-default" onClick={this.props.selectAll}>
                        <i className={`fa ${this.props.selected.length === 0 ?  "fa-square-o" : this.props.numMessages === this.props.selected.length ? "fa-check-square-o" : "fa-minus-square-o"} `}></i> 
                        </button> 

                    <button className="btn btn-default" onClick={() => this.props.changeMessages({ command: 'read', read:true })}>Mark As Read</button>

                    <button className="btn btn-default" onClick={() => this.props.changeMessages({ command: 'read', read: false })}>Mark As Unread</button>

                    <select className="form-control label-select" onChange={(e) => this.handleChange(e, 'addLabel')}>
                            <option>Apply label</option>
                            <option value="dev" >dev</option>
                            <option value="personal">personal</option>
                            <option value="gschool">gschool</option>
                        </select>

                    <select className="form-control label-select" onChange={(e) => this.handleChange(e, 'removeLabel')}>
                            <option>Remove label</option>
                            <option value="dev">dev</option>
                            <option value="personal">personal</option>
                            <option value="gschool">gschool</option>
                        </select>

                    <button className="btn btn-default" onClick={() => this.props.changeMessages({ command: 'delete', read: true })}>
                        <i className="fa fa-trash-o" ></i>
                        </button>
                    </div>
                {this.state.openWriteMsg ? <NewMessage handleWrite={this.handleWrite} handleSubmit={this.handleSubmit}/> : ''} 
                </div>
            )
        }
}
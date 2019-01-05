import React, {Component} from 'react'

export default class ToolBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    handleChange = (e, command) => {
        const body = {command, label: e.target.value}
        this.props.changeMessages(body)
    }

   render(){ 
        return (
                <div className="row toolbar">
                    <div className="col-md-12">
                        <p className="pull-right">
                            <span className="badge badge">{this.props.unread}</span>
                            unread messages
                        </p>

                        <a className="btn btn-danger" >
                            <i className="fa fa-plus"></i>
                        </a>

                    <button className="btn btn-default" onClick={this.props.selectAll}>
                            <i className="fa fa-minus-square-o"></i>
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
                </div>
            )
        }
}
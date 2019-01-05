import React, {Component} from 'react'

export default class ToolBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
   render(){ 
        return (
                <div className="row toolbar">
                    <div className="col-md-12">
                        <p className="pull-right">
                            <span className="badge badge">{this.props.unread}</span>
                            unread messages
                        </p>

                        <a className="btn btn-danger">
                            <i className="fa fa-plus"></i>
                        </a>

                        <button className="btn btn-default">
                            <i className="fa fa-minus-square-o"></i>
                        </button>

                    <button className="btn btn-default" onClick={() => this.props.changeReadStatus(true)}>Mark As Read</button>

                    <button className="btn btn-default" onClick={() => this.props.changeReadStatus(false)}>Mark As Unread</button>

                        <select className="form-control label-select">
                            <option>Apply label</option>
                            <option value="dev">dev</option>
                            <option value="personal">personal</option>
                            <option value="gschool">gschool</option>
                        </select>

                        <select className="form-control label-select">
                            <option>Remove label</option>
                            <option value="dev">dev</option>
                            <option value="personal">personal</option>
                            <option value="gschool">gschool</option>
                        </select>

                        <button className="btn btn-default">
                        <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </div>
            )
        }
}
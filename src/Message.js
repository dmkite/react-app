import React from 'react'

export default function Message(props) {
    return (
        <div className="messageWrapper">
            <div className={`${props.read ? 'row message read' : 'row message unread'}
                ${props.selected ? 'selected' : 'unselected'}`}>
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" checked={props.selected ? true : false} onChange={props.handleChange} />

                        </div>
                        <div className="col-xs-2">
                            <i className={props.starred ? "star fa fa-star" : "star fa fa-star-o"} onClick={props.starMessage}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    {props.labels.map(label => <span key={Math.floor(Math.random() * 100)} className="label label-warning">{label}</span>)}

                    <a href="#">
                        {props.subject}
                    </a>
                </div>
            </div>

            {/* <div className="row message-body">
                <div className="col-xs-11 col-xs-offset-1">
                    This is the body of the message.
                </div>
            </div> */}
        </div>
    )
}
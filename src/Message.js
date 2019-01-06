import React from 'react'
import Body from './Body'

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
                <div className="col-xs-11" onClick={props.handleClick}>
                    {props.labels.map(label => <span key={Math.floor(Math.random() * 10000)} className="label label-warning">{label}</span>)}

                    <a href="#">
                        {props.subject}
                    </a>
                </div>
            </div>
            {props.showMessage ? <Body message={props.body}/> : ''}
        </div>
    )
}
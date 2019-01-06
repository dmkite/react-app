import React from 'react'

export default function Body(props){
    return (
        <div className="row message-body">
            <div className="col-xs-11 col-xs-offset-1">
                {props.message}
            </div>
        </div>
    )
    
}
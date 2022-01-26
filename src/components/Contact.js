import React from "react";

export default function Contact(props){
    let textBadge
    if(props.slots === 0){
        textBadge ="Sold Out"
    }
    return (
        <div className="contact">
            <div className="badge">{textBadge}</div>
            <img src={props.img} alt="card-profile"/>
            <div className="info">
                {props.name && <span>name:{props.name}</span>}
                <span>tell:{props.tel}</span>
            </div>
        </div>
    )
}
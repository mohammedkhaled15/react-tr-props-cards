import React from "react";
export default function Contact(props){
    return (
        <div className="contact">
            <img src={props.img} alt="card-profile"/>
            <div className="info">
                <span>{props.name}</span>
                <span>{props.tel}</span>
            </div>
        </div>
    )
}
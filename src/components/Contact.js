import React from "react";
export default function Contact({img,name,tel}){
    return (
        <div className="contact">
            <img src={img} alt="card-profile"/>
            <div className="info">
                <span>{name}</span>
                <span>{tel}</span>
            </div>
        </div>
    )
}
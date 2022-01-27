import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.url} alt="..."/>
            <h4>{props.title}</h4>
        </div>
    )
}
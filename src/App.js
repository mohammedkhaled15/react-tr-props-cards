import React from "react";
import "./App.css"
import items from "./javaScriptData"
import Contact from "./components/Card"



export default function App(){
    const cards = items.map(item =>{
        return <Contact 
        key={item.id}
        {...item}
        />
    })
    return(
        <div className="container">
            {cards}
        </div>
    )
}

import React from "react";
import "./App.css"
import allComponents from "./javaScriptData"
import Contact from "./components/Contact"



export default function App(){
    const components = allComponents.map(compo =>{
        return <Contact 
        img={compo.img} 
        name = {compo.name} 
        tel={compo.tel}
        slots={compo.slots}
        />
    })
    return(
        <div className="container">
            {components}
        </div>
    )
}

/* <Contact
            img={avatar01}
            name= "el wensh"
            tel="012345799"
            />
            <Contact
            img={avatar02}
            name="El shenawy"
            tel={987654321}
            />
            <Contact
            img={avatar03}
            name="hegazy"
            tel="0125254569"
            />
            <Contact
            img={avatar04}
            name="neny"
            tel="01234-585799"
            /> */
import React from "react";
import "./App.css"
import Contact from "./components/Contact"
import avatar01 from "./images/avatar-01.png";
import avatar02 from "./images/avatar-02.png";
import avatar03 from "./images/avatar-03.png";
import avatar04 from "./images/avatar-04.png";


export default function App(){
    return(
        <div className="container">
            <Contact
            img={avatar01}
            name="El wensh"
            tel="012345799"
            />
            <Contact
            img={avatar02}
            name="El shenawy"
            tel="987654321"
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
            />
        </div>
    )
}
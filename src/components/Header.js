import { useState } from "react";

function Header (props){

    const [showSubtitle, setShowSubtitle] = useState (true)
    const [subtitle, setSubtitle] = useState ('Esto es un subtitulooo')

    return (
        <div>
            <h1>{props.text} {props.text2}</h1>
            {showSubtitle && <h2>{subtitle}</h2>}
        </div>
    );
}

export default Header;
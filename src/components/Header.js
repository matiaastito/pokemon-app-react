import { useState } from "react";

const Header = (props) => 
{
    //object destructuring

    const {text, text2} = props

    const [showSubtitle, setShowSubtitle] = useState (true)
    const [subtitle, setSubtitle] = useState ('Esto es un subtitulooo')

    const handleClick = (e) => {
        setShowSubtitle(!showSubtitle)
    }

    return (
        <div>
            <h1>{props.text} {props.text2}</h1>
            <button onClick={handleClick}>Mostrar Subitulos</button>
            {showSubtitle && <h2>{subtitle}</h2>}
        </div>
    );
}

export default Header;
import React from "react";
import "./styles.css"

const InputField = () => {
    return <form className="input">
        <input className="input__box" type="input" placeholder="Type out the task that is bothering you atm! " />
        <button className="input_submit" type="submit">Push</button>
    </form>;
};

export default InputField;

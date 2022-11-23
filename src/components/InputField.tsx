import React from "react";
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
    return <form className="input">
        <input className="input__box" type="input" placeholder="Type out the task that is bothering you atm! "
            value={todo} onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input_submit" type="submit">Push</button>
    </form>;
};

export default InputField;

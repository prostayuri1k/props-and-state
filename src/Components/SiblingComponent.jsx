import {useState} from "react";

const SiblingComponent = () => {
    const [text, setText] = useState('Something text');
    const changeText = () => {
        setText(text === 'Something text' ? 'REDEV' : 'Something text')
    }

    return (
        <div>
            <p>Текущий текст: {text}</p>
            <button onClick={changeText}>Изменить текст</button>
        </div>
    )
}

export default SiblingComponent;
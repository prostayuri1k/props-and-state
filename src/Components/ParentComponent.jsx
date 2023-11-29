import {useState} from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

const ParentComponent = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter > 0 ? counter - 1 : counter);
    }
    const reset = () => {
        setCounter(0)
    }
    const randomValue = () => {
        setCounter(Math.floor(1 + Math.random() * 10))
    }
    return (
        <div>
            <h3>Счетчик: {counter}</h3>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={increment}>Увеличить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={randomValue}>Случайное значение</button>
            <ChildComponent name={'Yury'} counter={counter}/>
            <SiblingComponent />
        </div>
    )
}

export default ParentComponent
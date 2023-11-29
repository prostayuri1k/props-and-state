const ChildComponent = (props) => {

    return (
        <div>
            <p>Привет, {props.name}! Текущий счетчик: {props.counter}</p>
        </div>
    )
}

export default  ChildComponent
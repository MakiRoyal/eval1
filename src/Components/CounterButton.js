import { useState } from "react"

function CounterButton(props) {

    const [counter, setCounter] = useState(0);

    return (

        <button style={{ 
            border: 0,
            borderRadius: "15px",
            padding: "10px 20px",
            backgroundColor: props.bgcolor,
            color: "white"
        }}
        onDoubleClick={() => {
            setCounter(counter * 2);
        }}
        onClick={() => {
            setCounter(counter + 1);
        }}
        >Click {counter}</button>

    )

}

export default CounterButton
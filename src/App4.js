import "./App.css";
import { useState } from 'react';

function App4() {
    // const [inputValue, setInputValue] = useState('');
    // const [showText, setShowText] = useState(true);

    const [textColor, setTextColor] = useState('');

    // const handleInputChange = (event) => {
    //     // console.log(event.target.value)
    //     setInputValue(event.target.value);
    // }

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setTextColor(event.target.value);
    }

    return (
        <div className="App">
            {/* <input type="text"
                placeholder="Insert name"
                onChange={handleInputChange} />
            Hello, {inputValue} */}

            {/* <button onClick={()=>
            setShowText(!showText)}>Show/Hide</button>
            {showText === true && <h1>Hi my name is Amanda</h1>} */}
            <input type="text"
                placeholder="Insert color"
                onChange={handleInputChange} />

            <button onClick={() => {
                 setTextColor(textColor === "black" ? "red" : "black")}
            }
               >Change text color</button>
            <h1 style={{ color: textColor }}>Hi my name is Amanda</h1>
        </div>
    )
}

export default App4;
import "./App.css";
import { useState } from 'react';

function App2() {
    const [age, setAge] = useState(0);

    const increaseAge = () => {
        // age = age + 1;
        // console.log(age);
        setAge(age + 1);
    };

    const decreaseAge = () => {
        setAge(age - 1);
    };

    const resetAge = () => {
        setAge(0);
    };
    return (
        <div className="App">
            Your age: {age}
            <button onClick={increaseAge}>Ingrease age</button>
            <button onClick={decreaseAge}>Degrease age</button>
            <button onClick={resetAge}>Reset age</button>
        </div>
    )
}

export default App2;
import { useState } from 'react';
import './App.css';
import Callback from './callback';


export default function App3() {
    const [UIcolor, setUIColor] = useState(null);

    const getColor = (color) => {
        setUIColor(color);
    };
    return (
        <div className="App">
            <div className="color-container"
                style={{ background: `${UIcolor}` }}
                {...UIcolor}
            ></div>
            <Callback getColor={getColor} />
        </div>
    )
}
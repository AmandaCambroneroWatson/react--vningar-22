import "./App.css";
import { useState, useEffect } from 'react';
import Axios from 'axios'



function App6() {
    // fetch("https://catfact.ninja/fact")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //     })
    const [catFact, setCatFact] = useState('');
    const [name, setName] = useState('');
    const [predictedAge, setPredictedAge] = useState(null);
    // const [generatedExcuse, setGeneratedExcuse] = useState('');
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => {
                setPredictedAge(res.data);
            })
    }

    const fethCatfact = () => {
        Axios.get("https://catfact.ninja/fact")
            .then((res) => {
                setCatFact(res.data.fact)
            });

    }

    // const fetchExcuse = (excuse) => {
    //     Axios.get('https://excuser.herokuapp.com/v1/excuse/${excuse}/')
    //         .then((res) => {
    //             setGeneratedExcuse(res.data[0].excuse)
    //         })
    // }

    // const fetchAstronomy = () =>{
    //     Axios.get(* https://go-apod.herokuap)
    // }
    useEffect(() => {
        fethCatfact();
        fetchData();
        // fetchExcuse();
    }, []);

    return (
        <div className="App">
            <button onClick={fethCatfact}>Generate Cat Fact</button>
            <p>{catFact}</p>
            <input
                onChange={(event) => setName(event.target.value)}
                placeholder="Ex. jessica" />
            <button onClick={fetchData}>Predict Age</button>
            <h1>name: {predictedAge?.name}</h1>
            <h1>Age: {predictedAge?.age}</h1>
            <h1>count: {predictedAge?.count}</h1>

            {/* <h1>Generate an make up brand</h1>
            <button onClick={fetchMakeUp}>Make Up Brand</button>

            <h1> Generate An Excuse </h1>
            <button onClick={() => fetchExcuse("party")}> Party</button>
            <button onClick={() => fetchExcuse("family")}> Family</button>
            <button onClick={() => fetchExcuse("office")}> Office </button>

            <p> {generatedExcuse} </p> */}

        </div>
    )
}

export default App6;
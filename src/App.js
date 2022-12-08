import './App.css';
import { useState, useEffect } from 'react';
import { User } from "./User"



// const Job = (props) => {
//   return (
//     <>
//       <h1>{props.salary}</h1>
//       <h2>{props.position}</h2>
//       <h2>{props.company}</h2>
//     </>)
// }
//Exempel på komponent användning av props
// const Person = (props) => {
//   return (
//     <>
//       <h1>Name :{props.name}
//       </h1>
//       <h2>LastName : {props.LastName}</h2>
//       <h2>Age : {props.age}</h2>
//     </>
//   )
// }


function App() {
  // const name = 'Amanda';
  // const isNameShowing = true;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(7);
  }, []); //[] dependency array it only renders at initial load

  // const age = 19;
  // const isGreen = false;
  // const names = ["Pedro", "Alice", "Bob", "Jess"]

  const users = [
    { name: "pedro", age: 21 },
    { name: "caspian", age: 1 },
  ]
  return (
    <div className='App'>
      {/* {users.map((user, key) => {
        return <><div key={key}> name={user.name} age={user.age}</div></>
      })} */}

      {/* {age => 18 ?  <h1>Over age</h1> : <h1>Under age</h1>} (? if age is) : (else if) */}
      {/* <h1 style={{ color: isGreen ? "green" : "red" }}> COlor change</h1>

      {isGreen  && <button>this is a button</button>} */}
      {/* <h1>Hello,{name}!</h1> */}
      {/* <Person name={'John'} LastName={'Opp'} age={23} />
      <Person name={'Linda'} LastName={'Opp'} age={24} /> */}
      {/* <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" /> */}
      <h1 className='name'>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>decrement - </button>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>increment + </button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'; 
const useCounter=()=>{

  const[cnt,setCnt]=useState(0);
  return [cnt,setCnt];

}

 const myPromise = new Promise((resolve, reject) => {
    axios("https://mock-api-test-y4or.onrender.com/", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  credentials: 'same-origin',
})
  .then((response) => {

    console.log(response.data);
    resolve(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

  
})





const add=(x,y)=>{
  return x+y;
}
function App() {

  const [val,setVal]=useState(0);

  

  

  return (
    <div className="App">
     <h1>Hello</h1>

     <label for="username">Hello2</label>
      <input type='text' id="username"></input>

      <button onClick={()=>{setVal(val+1)}}>Click me</button>
      <button>Click again</button>

      <input placeholder='search'></input>

      <span>Sample Text</span>
      <h2 data-testid="h2">{val}</h2>

    </div>
  );
}

export default App;
export {useCounter,myPromise,add};

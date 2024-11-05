import "./Counter.css";
import {useState, useEffect} from "react";
export default function Counter() {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);
    

    let updateCountX = () => {
        setCountX(() => {
            return countX + 1;
        })
    }

     let updateCountY= () => {
       setCountY(() => {
         return countY + 1;
       });
     };

     useEffect(
       function changes() {
         console.log("updated count number");
       },
       [countX, countY]
     );
    return (
      <>
        <h2>countX = {countX}</h2>
        <button onClick={updateCountX}>+1</button>
        <h2>countY = {countY}</h2>
        <button onClick={updateCountY}>+1</button>
      </>
    );
}
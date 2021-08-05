//import logo from './logo.svg';
import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Bingo from './Bingo';

function App() {
  const [rows, setRows] = useState(5); 

  const [displayedArray, setDisplayedArray] = useState([]);
  const [numArray, setNumArray] = useState([]);
  const [scrambledArray, setScrambledArray] = useState([]);

  const randomSort = (numbers) => {
        let copy = [...numbers];
        let sorted = [];
        for (let item in numbers) {
            let index = Math.floor(Math.random() * copy.length);
            sorted.push(copy[index]);
            copy.splice(index, 1);
        }
        return sorted;
    }

  const toArray = (string) => {
    let returnArr = [];
    const regex = /(?<=\s)[^\s]+(?=\s)/gi; // detect anything between spaces
    returnArr = " " + string + ' ';
    returnArr = returnArr.match(regex);
    //returnArr = string.split(' ');
    console.log(returnArr); // keycode = 48 to 57 and 32
    return returnArr;
  }

  const handleChange = (e) => { // as the user types in the array into the input box
    const arrayData = e.target.value;
    setDisplayedArray(arrayData);
    
  }

  const handleSubmit = (e) => { // when the user clicks enter/presses the button
    e.preventDefault();
    if (displayedArray) {
      setNumArray(toArray(displayedArray));
      setScrambledArray(randomSort(toArray(displayedArray))); // scramble the displayed array and set it to the state val, scrambledArray
      //setDisplayedArray('');
      console.log(numArray);
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bingo Generator</h1>
        <p>press enter to generate a new bingo sheet :)</p>
        <div className="divider"></div>
      </header>


      <article className='inputContainer'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='displayedArray'>Enter the numbers in your bingo, separated by spaces: </label>
            <input 
              className='numInput'
              type='text' 
              id='displayedArray' 
              name='displayedArray' 
              value={displayedArray}
              onChange={handleChange}
              // onChange={()=> {console.log('changed');}}
            />
          </div>
        </form>
      </article>


      <Bingo array={numArray} scrambled={scrambledArray} rows={rows}/>
    </div>
  );
}

export default App;

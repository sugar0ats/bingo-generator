import React, {useState} from 'react';

const Bingo = ({array, scrambled, rows}) => {
    const [bingoTitle, setBingoTitle] = useState('Bingo Title');

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setBingoTitle(newTitle);
    }

    const formatArray = (array) => { // change 3 to actual parameter
        const copyArray = [...array];
        const remainingSpaces = (rows * rows) - array.length;
        for (let i = 0; i < remainingSpaces; i++) {
            copyArray.push('');
        }

        return new Array(rows).fill(new Array(rows))
            .map((_, index) => copyArray.slice(index * rows, (index + 1) * rows));
    }

    //console.log(formatArray(scrambled));

    const displayArray = (array) => {
        let displayedString = '';
        for (let i = 0; i < array.length - 1; i++) {
            displayedString += (array[i] + ", ");
        }
        displayedString += array[array.length-1];

        return displayedString;

    }

    const scrambledFormattedArray = formatArray(scrambled);

    return (
        <div className='bingo-container'>
            <header className='arrayDisplay'>
                <h4>Array of numbers is: {array.length === 0 ? '' : displayArray(array)}</h4>
                <h4>Scrambled array of numbers is: {array.length === 0 ? '' : displayArray(scrambled)}</h4>
            </header>
            
            <input 
              className='titleInput'
              type='text' 
              id='bingoTitle' 
              name='bingoTitle' 
              value={bingoTitle}
              onChange={handleTitleChange}
              // onChange={()=> {console.log('changed');}}
            />

            <table className='bingo'>
                <tbody>
                    {
                        scrambledFormattedArray.map((row) => {
                            return (<tr>
                                {row.map((number, index) => {
                                    return(<td key={index}>{number}</td>);
                                })}
                            </tr>);
                        })
                    }
                </tbody>
            </table>
            {/* <div className="filler"></div> */}
        </div>
    )
}

export default Bingo

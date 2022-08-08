import {useState} from 'react';

function SearchBox({updateList}) {
    const [inputValue , setInputValue] = useState();

    const invokeUpdateRobots = (value) => {
        setInputValue(value);
        updateList(value);
    }

    return (
        <div >
        <input className="bg-light-blue mb3 h2 robo-header black" value={inputValue} onChange={(e) => invokeUpdateRobots(e.target.value)}></input>
        </div>
    )
}

export default SearchBox;
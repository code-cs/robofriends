import React, {useState, useEffect} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import Scroll from './Scroll'


function App() {
   //create a state
    const [robots, setRobots]= useState([])
    const [searchfield, setSearchField] =useState('')

//everytime the app renders, it runs the useEffevt
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)})
    },[]) //componentDidMount is basically and empty arry'[]' in hooks

   const  onSearchChange =(event) =>{
        setSearchField(event.target.value)
    }

    const filterRobots = robots.filter(robots =>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log(robots, searchfield)
        return !robots.length ?
        <h1>Loading</h1>:
        (
                <div className ='tc'>
                <h1> RoboFriends</h1>
                <SearchBox searchChange ={onSearchChange}/>
                {/* <Scroll> */}
                     <CardList robots ={filterRobots}/> 
                {/* </Scroll> */}
                </div>
            );
        }

export default App;

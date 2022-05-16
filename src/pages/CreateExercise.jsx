import React, {useState} from 'react'
import {useHistory} from "react-router-dom"; 
import './CreateExercise.css'


function CreateExercise(){
    const[exercise, setExercise] =useState({ 
        title: '',
    details: '',
});
   

const history = useHistory();
const handleChange = event =>{
    setExercise({
        ...exercise,
        [event.target.name] : event.target.value
    })
}
const handleExerciseCreation = (event) => {
    event.preventDefault();
    const newExercise = {
        title: exercise.title,
        details: exercise.details,
        complete: false,
        id:Math.floor(Math.random() * 10000)
    }
    console.log('here is the new exercise', newExercise);
    fetch('http://localhost:3001/exercises', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' }
         }).then(() => {
        history.push('/home');
     }).catch((error) =>{
        console.log(error);
})
}
return(
        <form onSubmit={handleExerciseCreation}>
            <label>Title</label>
            <input 
            name="title" 
            type="text" 
            onChange={handleChange} 
            value={exercise.title} 
             maxLength="15" 
             required 
             />
            <label>"Details"</label>
            <textarea 
            name="details"  
            cols="30" 
            rows="10"
            value={exercise.details} 
            onChange={handleChange}
            required
            ></textarea>
            <button>Add Exercise</button>
        </form>
    );
}
export default CreateExercise;
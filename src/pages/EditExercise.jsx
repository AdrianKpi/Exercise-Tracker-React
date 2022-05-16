import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from "react-router-dom"; 
import './CreateExercise.css'


function EditExercise(){
    const[exercise, setExercise] =useState({
        title: '',
    details: '',
    });
    

const params = useParams();
const exerciseId = params.id;
const history = useHistory();
const handleChange = event =>{
    setExercise({
        ...exercise,
        [event.target.name] : event.target.value
    })
};
useEffect(() => { 
    fetch(`http://localhost:3001/exercises/${exerciseId}`)
 .then((response) => {
 return response.json();
 }).then(data =>{
     setExercise({
         title: data.title,
         details: data.details
     });
 }).catch (error => console.log(error));

}, [exerciseId])


const handleExerciseUpdation = (event) =>{
 event.preventDefault();
 fetch(`http://localhoust:3000/exercises/${exerciseId}`,  {
    method: 'PATCH',
    headers: {'Content-Type': "application/json" },
    body: JSON.stringify(exercise)
}).then(() =>{
    history.push('/home')
}).catch((error) => {
    console.log(error)
})
}

return(
        <form onSubmit={handleExerciseUpdation}>
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
            <button>Update Exercise</button>
        </form>
    );
}

export default EditExercise;
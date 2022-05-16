import {useState, useEffect} from "react";
import ExercisesList from "../components/ExercisesList";
import BaseFilter from "../components/BaseFilter";

const HomePage = () =>{
    const [exercises, setExercises] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('all');
   const updateFilterHandler = (newFilter) => {
    setCurrentFilter(newFilter);
   }
    
    useEffect(() => {
     async function fetchExercises() {
         try {
            const response = await fetch(`http://localhost:3001/exercises`);
            const fetchedExercises = await response.json();
            console.log('here are the exercises that we fetched...', fetchedExercises)
            setExercises(fetchExercises);
        } catch (error) {
             console.log(error);
         }
     }
     fetchExercises()
    }, []);
   
    const deleteExerciseHandler =(id) => {
        const patchedExercises = exercises.filter(exercise => exercise.id !== id);
        setExercises(patchedExercises);
    }
    const toggleExerciseCompletionHandler = id =>{
        console.log('id is', id);
        const clonedExercises = [...exercises];
        const clickedExerciseIndex =clonedExercises.findIndex = clonedExercises.findIndex(exercise => exercise.id = id);
        const clickedExercise = clonedExercises[clickedExerciseIndex];
        clickedExercise.complete = !clickedExercise.complete;
        setExercises(clonedExercises);
    }
    let jsx =(
        <ExercisesList
        onToggleExercise={toggleExerciseCompletionHandler}
        onDeleteExercise={deleteExerciseHandler}
        exercises={exercises}
        />
    );
    // if (currentFilter === 'completed'){
    // jsx =   <ExercisesList
    // onToggleExercise={toggleExerciseCompletionHandler}
    // onDeleteExercise={deleteExerciseHandler}
    // exercises={exercises.filter(exercise => exercise)}
    // />
    // } else if(currentFilter ==='pending'){
    //     jsx = <ExercisesList
    //     onToggleExercise={toggleExerciseCompletionHandler}
    //     onDeleteExercise={deleteExerciseHandler}
    //     exercises={exercises.filter(exercise => !exercise.complete)}
    //     />
        
    // }
    return (  
        <div>
            <BaseFilter onUpdate={updateFilterHandler} current={currentFilter}/>
            {jsx}
        </div>
    );
 };


 export default HomePage;

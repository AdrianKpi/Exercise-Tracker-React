import React from 'react'
import ExerciseItem from './ExerciseItems';
import './ExercisesList.css';

function ExercisesList(props) {
    if (props.exercises.length === 0) return null;
  return ( 
    <div className="exercises-list">
        {props.exercises.map(exercise => (
        <ExerciseItem 
        onToggleExercise={props.onToggleExercise}
        onDeleteExercise={props.onDeleteExercise} 
        key={exercise.id} 
        exercise={ exercise}
        />
        ))}
    </div>
  )
}
export default ExercisesList;

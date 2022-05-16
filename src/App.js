import {Switch, Route} from "react-router-dom"; 
import './App.css';
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import Navbar from "./components/Navbar";
import EditExercise from "./pages/EditExercise";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/home" exact>
       <HomePage/>
     </Route>
     <Route path="/create-exercise" exact>
       <CreateExercise/>
     </Route>
     <Route path="/exercises/:id/edit" exact>
       <EditExercise />
     </Route>
      </Switch>
    
    </div>
  );
}

export default App;

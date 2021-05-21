import React,{useState} from  'react'
import './App.css';
import HeaderScore from "./components/HeaderScore";
import UserSelect from "./components/UserSelect";
import CompSelect from "./components/CompSelect";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
    const [score,setScore] = useState(0)
    const [userChoice,setUserChoice] = useState('')
  return (
    <div className="App">
        <Router>
            <HeaderScore score={score}/>
            <br/>
            <br/>
            <Switch>
                <Route exact path="/">
                    <UserSelect setUserChoice={setUserChoice}/>
                </Route>
               <Route path="/game">
                    <CompSelect userChoice={userChoice} score={score} setScore={setScore}/>
               </Route>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;

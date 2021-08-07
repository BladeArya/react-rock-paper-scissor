import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import {Grid,Paper} from "@material-ui/core";
import  './componentsmedia.css';


function CompSelect({userChoice,score,setScore}) {
    const [counter,setCounter]=useState(3)
    const[compChoice,setCompChoice]=useState("")
    const[playerWin,setPlayerWin]=useState("")

    const newCompPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setCompChoice(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
        newCompPick();
    }, []);
    const Result = () => {
        if (userChoice === "rock" && compChoice === "scissors") {
          setPlayerWin("win");
          setScore(score + 1);
        } else if (userChoice === "rock" && compChoice === "paper") {
          setPlayerWin("lose");
          setScore(score - 1);
        } else if (userChoice === "scissors" && compChoice === "paper") {
          setPlayerWin("win");
          setScore(score + 1);
        } else if (userChoice === "scissors" && compChoice === "rock") {
          setPlayerWin("lose");
          setScore(score - 1);
        } else if (userChoice === "paper" && compChoice === "rock") {
          setPlayerWin("win");
          setScore(score + 1);
        } else if (userChoice === "paper" && compChoice === "scissors") {
          setPlayerWin("lose");
          setScore(score - 1);
        } else {
          setPlayerWin("draw");
        }
  };

   useEffect(()=>{
    const timer = counter > 0 ? setInterval(() => {
                    setCounter(counter - 1);
                    }, 1000) : 
                    Result();
        return()=>{
        clearInterval(timer);
        };
    },[counter,compChoice])
    return(
        <Grid container className={"userdatagrid"} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                    <Grid item>
                        <Paper className={`${userChoice}button
                            ${playerWin === "win" ? `winnerbutton` : ""}
                            `}/>
                        <div className={"gametext"}>You Choose</div>
                    </Grid>
                    <Grid item>
                        {counter === 0 ? (
                              <Paper className={`${compChoice}button ${playerWin === "lose" ? `winnerbutton` : ""}`} />) :
                            (<Paper className={'counterbutton'}>
                                <span className={'counternumber'}>{counter}</span>
                            </Paper>)}
                        <div className={"gametext"}>Comp Choose</div>
                    </Grid>
                </Grid>
                {playerWin === "win" && (
                <div className="game__play">
                    <div className={"resulttext"}>You Win</div>
                    <br/>
                    <Link to="/" className="play-again" onClick={() => setCompChoice()}>
                        Play Again
                    </Link>
                </div>
            )}
            {playerWin === "lose" && (
                <div className="game__play">
                    <div className={"resulttext"}>You Lose</div>
                    <br/>
                    <Link to="/" className="play-again" onClick={() => setCompChoice()}>
                        Play Again
                    </Link>
                </div>
            )}
            {playerWin === "draw" && (
                <div className="game__play">
                    <div className={"resulttext"}>Draw</div>
                    <br/>
                    <Link to="/" className="play-again" onClick={() => setCompChoice()}>
                        Play Again
                    </Link>
                </div>
            )}
            </Grid>
        </Grid>

    )
}

export default CompSelect
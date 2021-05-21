import React from "react";
import {Paper,Grid} from '@material-ui/core';
import  './componentsmedia.css';
import { Link } from "react-router-dom";

function UserSelect({setUserChoice}){
    const selectUserChoiceHandler=e=>{
        setUserChoice(e.target.dataset.id)
    };
    return(
        <Grid container className={"userdatagrid"} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <Link to='/game'>
                            <Paper data-id={'rock'} className={`rockbutton`}
                                   onClick={selectUserChoiceHandler} elevation={5}/>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/game">
                            <Paper data-id={'paper'} className={"paperbutton"}
                                   onClick={selectUserChoiceHandler}/>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to='/game'>
                            <Paper data-id={'scissors'} className={"scissorsbutton"}
                                   onClick={selectUserChoiceHandler}/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserSelect
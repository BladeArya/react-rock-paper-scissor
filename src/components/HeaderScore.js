import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import  './componentsmedia.css';



function HeaderScore({score}){

    return(
        <div className={"root"}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h4" className={"title"}>
                    <span className={'titlename'}>Rock<br/>Paper<br/>Scissors</span>
                </Typography>
                <Typography variant="h5" className={"scoreboard"} color="textPrimary">
                    <span className={'scoreboarddetail'}>Score<br/>{score}</span>
                </Typography>
              </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderScore
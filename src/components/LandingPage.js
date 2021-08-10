import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import animationData from '../animations/landinganimation/data'
import { Grid, Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import ButtonArrow from './ui/ButtonArrow'

const useStyles = makeStyles(theme=>({
    animation:{
        maxWidth: '50em', 
        minWidth: '21em', 
        marginTop: '2em', 
        marginLeft: '10%'
    }
}));

const LandingPage=()=>{
    const classes = useStyles();

    const defaultOptions={
        loop: true, 
        autoplay: true, 
        animationData: animationData,
        rendererSettings:{
            preserveAspectRatio: 'xMidYmid slice'
        }
    }

    return (
        <Grid container direction='column'>
            <Grid item>
                <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
                    <Grid sm item>
                        <Typography variant='h2' align='center'>
                            Bringing West Coast Technology<br/> To the Midwest
                        </Typography>
                        <Grid container>
                            <Grid item>
                                <Button variant='contained'>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined'>
                                    Learn More<ButtonArrow widht={15} height={15} fill='red'></ButtonArrow>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"}></Lottie>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LandingPage;
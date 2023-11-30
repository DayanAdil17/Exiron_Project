import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";


const useStyles2 = makeStyles({
    root: {
      maxWidth: 400,
      height: 350
    },
    media: {
      height: 240,
    },
  });
const useStyles = makeStyles(styles);
const useStyles3 = makeStyles(styles2);

export default function ContactUsSection(props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
  return (
    <div>
        {/* <div className={classes.sections} style = {{backgroundColor:"#f0cc8b"}}> */}
        <div className={classes.sections} style = {{backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/exironImg/mining-industry.jpg')", backgroundSize:'cover', opacity: 0.9 }}>
        {/* <div className={classes.sections} style = {{backgroundImage: "-webkit-linear-gradient(90deg,#969595 20%, #ffffff 50%, #969595 0%)"}}> */}
            <div className={classes.container}>                
                <GridContainer justify = "center" align = "center" spacing = "1">
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <div className={classes.container}>
                            <div className={classes.title}>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', marginTop:'10vw', fontWeight:'bold'}}>
                                    Year 
                                </Typography>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', fontWeight:'bold'}}>
                                    Established
                                </Typography>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff'}}>
                                    2010
                                </Typography>
                            </div>
                        </div>
                    </GridItem>                    
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <div className={classes.container}>
                            <div className={classes.title}>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', marginTop:'10vw', fontWeight:'bold'}}>
                                    Completed
                                </Typography>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', fontWeight:'bold'}}>
                                    Projects
                                </Typography>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff'}}>
                                    100+
                                </Typography>
                            </div>
                        </div>
                    </GridItem>                    
                </GridContainer>
            </div>  
            <div className={classes.container} style = {{backgroundColor:"#ffffff", maxWidth: "unset", minHeight:'20vh'}}>
                <GridContainer justify = "center" align = "center" spacing = "1">
                    <GridItem xs = {12} sm = {3}>
                        <Typography align="center" style = {{marginTop:"8vh"}}>
                            SANTA SOLANA POST
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <Typography style = {{marginTop:"8vh"}}>
                            THE PLEW
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <Typography style = {{marginTop:"8vh"}}>
                            MARION WEEKLY
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <Typography style = {{marginTop:"8vh", marginBottom:"8vh"}}>
                            FRELL MEDIA
                        </Typography>
                    </GridItem>
                </GridContainer>
            </div>          
        </div>       
        
    </div>
  )
}

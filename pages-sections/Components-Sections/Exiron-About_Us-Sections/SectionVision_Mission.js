import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionVision_Mission() {
    const classes = useStyles();
  return (
    <div>        
        <div className={classes.sections} style = {{backgroundImage: "-webkit-linear-gradient(170deg, #000000 51%, #4f4e4c 0%)"}}>
            <div className={classes.container}>                 
                <GridContainer justify = "center" align = "center" spacing = "1">
                    <GridItem xs = {6}>
                        {/* <Typography variant = "h3" style = {{color : '#ffffff'}}>
                            Our Vision and Mission
                        </Typography> */}
                        {/* <div style = {{backgroundColor:"#ffffff"}}> */}
                            <Typography variant = "h2" align = "left" style = {{color:"#ffffff", fontWeight:"bold"}}>
                                Our Vision
                            </Typography>
                        {/* </div> */}
                    </GridItem>
                    {/* <GridItem xs = {6} style = {{marginRight:"3vw"}}> */}
                    <GridItem xs = {6} >
                        {/* <Typography variant = "h3" style = {{color : '#ffffff'}}>
                            Our Vision and Mission
                        </Typography> */}
                        <Typography variant = "h2" align = "right" style = {{color:"#ffffff", fontWeight:"bold"}}>
                            Our Mission
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <div className={classes.container}>
                            <div className={classes.title}>                               
                                <Typography align = "left" variant = "h4" style = {{color :'#ffffff'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <div className={classes.container}>
                            <div className={classes.title}>                                
                                <Typography variant="h4" align = 'right' style = {{color :'#ffffff', fontSize:20}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                                <br/>
                                <br/>
                                <Typography variant="h4" align = 'right' style = {{color :'#ffffff', fontSize:20}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </div>
                        </div>
                    </GridItem>                                      
                </GridContainer>
            </div>            
        </div>               
    </div>
  )
}

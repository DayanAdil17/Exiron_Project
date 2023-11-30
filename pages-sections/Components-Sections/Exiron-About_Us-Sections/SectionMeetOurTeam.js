import React, { useState } from 'react';
import {useInView} from 'react-intersection-observer';
import { Fade, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles({
    root: {
      maxWidth: 600,
      margin:'auto',
    },
    media: {
      height: 400,
      margin:'auto',
    },
  });
export default function SectionMeetOurTeam() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [ref, inView] = useInView({ threshold: 0.4 });
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
  return (
    <div ref = {ref}>        
        <div className={classes.sections} style={{backgroundColor:'#000000'}}>
            <div className={classes.container} style={{marginTop:"10vh"}}>                
                <GridContainer justify = "center" spacing = "1">
                    <GridItem xs = {12} sm = {6} md = {6}>
                    <Zoom in={inView} timeout={200}>
                        <div className={classes.container}>   
                            <div className={classes.title}>                     
                                <h2 className={classes.title} style={{fontWeight:'bold', color:"#FE852C"}}>
                                    Our Head
                                </h2>
                                <h4 className={classes.subtitle} style = {{color:"#ffffff"}}>
                                    "Success is not just about making profits, it's about creating a positive impact on the world."
                                    <br/>
                                    <br/>
                                    - Ilham Mizwar, ST
                                </h4>     
                            </div>
                        </div>
                    </Zoom>
                    </GridItem>
                    <GridItem xs = {12} sm = {6} md = {6}>
                    <Zoom in={inView} timeout={200} style={{transitionDelay: inView ? '100ms' : '100ms'}}>
                        <Card className={classes2.root} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{backgroundColor:"#000000"}}
                        >                            
                                <CardMedia
                                className={classes2.media}
                                image="/exironImg/test.webp"
                                title="Ilham Mizwar, ST"
                                style={{
                                    transform: hovered ? "scale(1.2)" : "scale(1)",
                                    transition: "transform 0.3s ease-out",
                                }}
                                />   
                            <CardContent>
                                <Typography align="center" style={{color:"#ffffff"}}>
                                    Ilham Mizwar, ST
                                </Typography>
                                <Typography align="center" style={{color:"#ffffff"}}>
                                    Director                                    
                                </Typography>
                            </CardContent>                                                                                 
                        </Card>
                    </Zoom>
                    </GridItem>                    
                </GridContainer>
            </div>
        </div>                  
    </div>
  )
}

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useInView} from 'react-intersection-observer';
import { Fade, Zoom } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

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

export default function SectionSeventh() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [ref, inView] = useInView({ threshold: 0.5 });
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
            <div className={classes.container}>                
                <GridContainer justify = "center" spacing = "1">
                <Zoom in={inView} timeout={200}>
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <div className={classes.container}>   
                            <div className={classes.title}>                     
                                <h2 className={classes.title} style={{fontWeight:'lighter', color:"#ffffff"}}>
                                    Music Industry
                                </h2>
                                <h4 className={classes.subtitle} style = {{color:"#ffffff"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </h4>     
                            </div>                   
                        </div>
                    </GridItem>
                </Zoom>
                <Zoom in={inView} timeout={300} style={{transitionDelay: inView ? '200ms' : '200ms'}}>
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <Card className={classes2.root} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >                            
                                <CardMedia
                                className={classes2.media}
                                image="/exironImg/music-industry.jpg"
                                title="Music"
                                style={{
                                    transform: hovered ? "scale(1.2)" : "scale(1)",
                                    transition: "transform 0.3s ease-out",
                                }}
                                />                                                                                    
                        </Card>
                    </GridItem>
                </Zoom>
                </GridContainer>
            </div>
        </div>       
    </div>
  )
}

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
export default function SectionVision() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
  return (
    <div>        
        <div className={classes.sections} style={{backgroundColor:'#000000'}}>
            <div className={classes.container} style={{marginTop:"10vh"}}>                
                <GridContainer justify = "center" spacing = "1">
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <div className={classes.container}>   
                            <div className={classes.title}>                     
                                <h2 className={classes.title} style={{fontWeight:'lighter', color:"#ffffff"}}>
                                    Our Vision
                                </h2>
                                <h4 className={classes.subtitle} style = {{color:"#ffffff"}}>
                                    Be the best Foundry Company in Indonesia
                                </h4>     
                            </div>                   
                        </div>
                    </GridItem>
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <Card className={classes2.root} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >                            
                                <CardMedia
                                className={classes2.media}
                                image="/exironImg/ironcast.jpg"
                                title="Lifter XP-91"
                                style={{
                                    transform: hovered ? "scale(1.2)" : "scale(1)",
                                    transition: "transform 0.3s ease-out",
                                }}
                                />                                                                                    
                        </Card>
                    </GridItem>                    
                </GridContainer>
            </div>
        </div>                  
    </div>
  )
}

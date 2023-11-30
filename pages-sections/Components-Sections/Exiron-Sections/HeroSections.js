import React, { useState } from 'react'

import {useInView} from 'react-intersection-observer';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Grow } from '@material-ui/core';

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

export default function (props) {
    const [hovered, setHovered] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.1 });

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
    const classes = useStyles();
    const classes2 = useStyles2();
  return (
    <div>        
      <div className={classes.sections} style={{backgroundColor:'#000000'}}>
        <div className={classes.container} style={{marginTop:"10vh"}}>                
          <GridContainer justify = "center" spacing = "1" >
              <GridItem xs = {12} sm = {6} md = {6}>
                <div className={classes.container}>
                  <div className={classes.title} ref={ref}>
                    <Grow in={inView} timeout={1000}>
                      <h1 className={classes.title} style={{fontWeight:'1000', color : '#ffffff', fontSize:40}}>
                        WE ARE EXIRON BAJA PRATAMA
                      </h1>
                    </Grow>
                    <Grow in={inView} timeout={1000}>
                      <h2 className={classes.title} style={{fontWeight:'lighter', color : '#ffffff', fontSize:25}}>
                        More than a decade of experience as a Foundry company, providing excellent service for customers
                        from wide range of Industries across Indonesia.
                      </h2>
                    </Grow>
                    <Grow in={inView} timeout={1000}>
                      <h4 className={classes.subtitle} style={{color:'#ffffff'}}>
                          First founded in Bandung, 2010. Exiron continue to grow to be one of the leading Foundry Company
                          in Indonesia.
                      </h4>
                    </Grow>
                  </div>
                </div>
              </GridItem>
              <GridItem xs = {12} sm = {6} md = {6}>
                <div ref={ref}>
                  <Grow in={inView} timeout={1000}>
                    <Card className={classes2.root} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >                            
                      <CardMedia
                      className={classes2.media}
                      image="/exironImg/logoExiron.webp"
                      title="Exiron"
                      style={{
                        transform: hovered ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                      />                                                                                    
                    </Card>
                  </Grow>
                </div>
              </GridItem>                    
          </GridContainer>
        </div>
      </div>       
    </div>
  )
}

import React, { useState } from 'react'
import {useInView} from 'react-intersection-observer';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Fade, Zoom } from '@material-ui/core';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles({
    root: {
      maxWidth: 400,
      margin:'auto',
    },
    media: {
      height: 220,
      margin:'auto',
    },
  });
export default function ProductSection(props) {    

    const classes = useStyles();
    const classes2 = useStyles2();
    const [ref, inView] = useInView({ threshold: 0.1 });
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };

    const [hovered2, setHovered2] = useState(false);

    const handleMouseEnter2 = () => {
      setHovered2(true);
    };
  
    const handleMouseLeave2 = () => {
      setHovered2(false);
    };
    const [hovered3, setHovered3] = useState(false);

    const handleMouseEnter3 = () => {
      setHovered3(true);
    };
    const handleMouseLeave3 = () => {
      setHovered3(false);
    };
    const [hovered4, setHovered4] = useState(false);

    const handleMouseEnter4 = () => {
      setHovered4(true);
    };
    const handleMouseLeave4 = () => {
      setHovered4(false);
    };
    const [hovered5, setHovered5] = useState(false);

    const handleMouseEnter5 = () => {
      setHovered5(true);
    };
    const handleMouseLeave5 = () => {
      setHovered5(false);
    };
    const [hovered6, setHovered6] = useState(false);

    const handleMouseEnter6 = () => {
      setHovered6(true);
    };
    const handleMouseLeave6 = () => {
      setHovered6(false);
    };

    const [hovered7, setHovered7] = useState(false);
    const handleMouseEnter7 = () => {
      setHovered6(true);
    };
    const handleMouseLeave7 = () => {
      setHovered6(false);
    };
  return (
    <div ref = {ref}>        
        <div className={classes.sections} >
            <div className={classes.container}>
                <div className={classes.title}>
                    <Fade in={inView} timeout={500}>
                        <h2 className={classes.title} style={{fontWeight:'lighter'}}>Products</h2>
                    </Fade>
                </div>
                <GridContainer justify = "center" spacing = "1">
                    {/* ========================= PART MESIN ========================== */}
                    <GridItem xs = {12} sm = {4}>
                    <Zoom in={inView} timeout={200}>
                        <Card className={classes2.root}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                            <CardMedia                           
                            className={classes2.media}
                            image="/exironImg/Resize_project.webp"                            
                            style={{
                                transform: hovered ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease-out",
                              }}
                            />                                                     
                        </Card>
                    </Zoom>
                    {/* <Zoom in={inView} timeout={200}>
                        <Typography gutterBottom variant="h5" component="h2" align="left" style = {{fontWeight:'lighter'}}>
                            PART MESIN - PT. TEHA : FCD
                        </Typography>
                    </Zoom>                                             */}
                    </GridItem>       
                    {/* ======================== PULLEY ========================== */}
                    <GridItem xs = {12} sm = {4}>
                      <Zoom in={inView} timeout={200} style={{transitionDelay: inView ? '100ms' : '100ms'}}>
                          <Card className={classes2.root} 
                          onMouseEnter={handleMouseEnter2}
                          onMouseLeave={handleMouseLeave2}>
                              <CardMedia
                              style={{
                                  transform: hovered2 ? "scale(1.2)" : "scale(1)",
                                  transition: "transform 0.3s ease-out",
                              }}
                              className={classes2.media}
                              image="/exironImg/Resize_project2.webp"                            
                          />                            
                      {/* <Typography variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                          </Typography> */}
                      </Card>
                      </Zoom>
                      {/* <Zoom in={inView} timeout={200}>
                        <Typography gutterBottom variant="h5" component="h2" align="left" style = {{fontWeight:'lighter'}}>
                            PULLEY - PACKER PT. SEMEN TUBAN : FC
                        </Typography>
                      </Zoom> */}
                    </GridItem>
                    {/* ========================= METAL BEARIING ======================= */}
                    <GridItem xs = {12} sm = {4}>
                      <Zoom in={inView} timeout={200} style={{transitionDelay: inView ? '300ms' : '300ms'}}>
                        <Card className={classes2.root}
                         onMouseEnter={handleMouseEnter3}
                         onMouseLeave={handleMouseLeave3}>
                            <CardMedia
                            style={{
                                transform: hovered3 ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease-out",
                            }}
                            className={classes2.media}
                            image="/exironImg/Resize_project3.webp"                            
                            />                                                       
                        </Card>
                      </Zoom>
                        {/* <Zoom in={inView} timeout={200}>
                          <Typography gutterBottom variant="h5" component="h2" align="left" style = {{fontWeight:'lighter'}}>
                              METAL BEARING : FCD
                          </Typography>  
                        </Zoom> */}
                    </GridItem>
                    {/* ========================= METAL BEARIING ======================= */}
                    <GridItem xs = {12} sm = {4}>
                      <Zoom in={inView} timeout={200} style={{transitionDelay: inView ? '300ms' : '300ms'}}>
                        <Card className={classes2.root}
                         onMouseEnter={handleMouseEnter4}
                         onMouseLeave={handleMouseLeave4}>
                            <CardMedia
                            style={{
                                transform: hovered4 ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease-out",
                            }}
                            className={classes2.media}
                            image="/exironImg/Resize_project4.webp"                            
                            />                                                       
                        </Card>
                      </Zoom>
                        {/* <Zoom in={inView} timeout={200}>
                          <Typography gutterBottom variant="h5" component="h2" align="left" style = {{fontWeight:'lighter'}}>
                              METAL BEARING : FCD
                          </Typography>  
                        </Zoom> */}
                    </GridItem>
                    {/* ========================= METAL BEARIING ======================= */}
                    <GridItem xs = {12} sm = {4}>
                      <Zoom in={inView} timeout={200} style={{transitionDelay: inView ? '300ms' : '300ms'}}>
                        <Card className={classes2.root}
                         onMouseEnter={handleMouseEnter5}
                         onMouseLeave={handleMouseLeave5}>
                            <CardMedia
                            style={{
                                transform: hovered5 ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease-out",
                            }}
                            className={classes2.media}
                            image="/exironImg/Resize_project5.webp"                            
                            />                                                       
                        </Card>
                      </Zoom>
                        {/* <Zoom in={inView} timeout={200}>
                          <Typography gutterBottom variant="h5" component="h2" align="left" style = {{fontWeight:'lighter'}}>
                              METAL BEARING : FCD
                          </Typography>  
                        </Zoom> */}
                    </GridItem>
                    {/* ========================= METAL BEARIING ======================= */}
                    <GridItem xs = {12} sm = {4}>
                      <Zoom in={inView} timeout={200} style={{transitionDelay: inView ? '300ms' : '300ms'}}>
                        <Card className={classes2.root}
                         onMouseEnter={handleMouseEnter6}
                         onMouseLeave={handleMouseLeave6}>
                            <CardMedia
                            style={{
                                transform: hovered6 ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease-out",
                            }}
                            className={classes2.media}
                            image="/exironImg/Resize_project6.webp"                            
                            />                                                       
                        </Card>
                      </Zoom>
                        {/* <Zoom in={inView} timeout={200}>
                          <Typography gutterBottom variant="h5" component="h2" align="left" style = {{fontWeight:'lighter'}}>
                              METAL BEARING : FCD
                          </Typography>  
                        </Zoom> */}
                    </GridItem>
                    <GridItem xs = {12} sm = {4}>
                      <Zoom in={inView} timeout={200} style={{transitionDelay: inView ? '300ms' : '300ms'}}>
                        <Card className={classes2.root}
                         onMouseEnter={handleMouseEnter7}
                         onMouseLeave={handleMouseLeave7}>
                            <CardMedia
                            style={{
                                transform: hovered7 ? "scale(1.2)" : "scale(1)",
                                transition: "transform 0.3s ease-out",
                            }}
                            className={classes2.media}
                            image="/exironImg/newProduct.webp"                            
                            />                                                       
                        </Card>
                      </Zoom>
                        {/* <Zoom in={inView} timeout={200}>
                          <Typography gutterBottom variant="h5" component="h2" align="left" style = {{fontWeight:'lighter'}}>
                              METAL BEARING : FCD
                          </Typography>  
                        </Zoom> */}
                    </GridItem>
                </GridContainer>
            </div>
        </div>       
    </div>
  )
}

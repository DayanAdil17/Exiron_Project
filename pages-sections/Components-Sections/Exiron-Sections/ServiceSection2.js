import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Zoom, Slide, Container } from "@material-ui/core";

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);
const useStyles3 = makeStyles({
  imageCard: {
    position: 'relative',
    maxWidth: '100%',
    margin: 'auto',
  },
  image: {
    width: '100%',
    minHeight: '100vh',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
const useStyles2 = makeStyles({
  root: {
    maxWidth: 300,
    margin: 'auto',
  },
  media: {
    height: 200,
    margin: 'auto',
    position: 'relative',
    objectFit: 'unset', // Prevent the image from scaling
  },
});

export default function ServiceSection2(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  
  return (
    <div ref={ref} style = {{minHeight: '100vh'}}>
      <Grid container direction = 'row' alignItems="center" justifyContent="center" style = {{width:'100%'}} spacing = {0}>
        <Grid item xs={12} md={4} lg = {4} xl = {4}>
            <div
               className={classes3.imageCard}
            >
              <img
                src="/exironImg/3-9.webp"
                alt="Image Title"
                className={classes3.image}
              />
              <div className={classes3.overlay}>
                <Grid container direction = 'row' justifyContent = 'center' alignItems="center">
                <Grid item xs = {12}>
                  <Typography variant = 'h5' align="center" style = {{fontWeight: 'bold', color: '#ffffff'}}>
                    - OUR SERVICE -
                  </Typography>
                  </Grid>
                  <br />
                  <br />
                  <Grid item xs = {12}>
                  <Typography variant = 'h4' align="center" style = {{fontWeight: 'bold', color: '#FE852C'}}>
                    FACILITIES
                  </Typography>
                  </Grid>
                  <br />
                  <Grid item xs = {12}>
                  <Typography variant = 'h5' align="center" style = {{fontWeight: 'lighter', color: '#ffffff'}}>
                    WE HAVE 2 FACILITIES FOR YOU
                  </Typography>
                </Grid>
                </Grid>
              </div>
            </div>
        </Grid>
        <Grid item xs={12} md={4} lg = {4} xl = {4}>
            <div
              className={classes3.imageCard}
             
            >
              <img
                src="/exironImg/3-4.webp"
                alt="Cetakan Genteng"
                className={classes3.image}
              />
              <div className={classes3.overlay}>
                <Grid container direction = 'row' justifyContent = 'center' alignItems="center">
                <Grid item xs = {12}>
                  <Typography variant = 'h5' align="center" style = {{fontWeight: 'bold', color: '#ffffff'}}>
                    - OUR SERVICE -
                  </Typography>
                  </Grid>
                  <br />
                  <br />
                  <Grid item xs = {12}>
                  <Typography variant = 'h4' align="center" style = {{fontWeight: 'bold', color: '#FE852C'}}>
                    PRODUCTION
                  </Typography>
                  </Grid>
                  <br />
                  <Grid item xs = {12}>
                  <Typography variant = 'h5' align="center" style = {{fontWeight: 'lighter', color: '#ffffff'}}>
                   WE HAVE PRODUCTS FROM VARIETY INDUSTRIAL SECTOR
                  </Typography>
                </Grid>
                </Grid>
              </div>
            </div>
        </Grid>
        <Grid item xs={12} md={4} lg = {4} xl = {4}>
            <div
              className={classes3.imageCard}
            >
              <img
                src="/exironImg/3-10.webp"
                alt="Cetakan Genteng"
                className={classes3.image}
              />
              <div className={classes3.overlay}>
                <Grid container direction = 'row' justifyContent = 'center' alignItems="center">
                <Grid item xs = {12}>
                  <Typography variant = 'h5' align="center" style = {{fontWeight: 'bold', color: '#ffffff'}}>
                    - OUR SERVICE -
                  </Typography>
                  </Grid>
                  <br />
                  <br />
                  <Grid item xs = {12}>
                  <Typography variant = 'h4' align="center" style = {{fontWeight: 'bold', color: '#FE852C'}}>
                    MATERIAL
                  </Typography>
                  </Grid>
                  <br />
                  <Grid item xs = {12}>
                  <Typography variant = 'h5' align="center" style = {{fontWeight: 'lighter', color: '#ffffff'}}>
                    WE HAVE MANY BASED INGREDIENTS FOR CASTING MATERIAL
                  </Typography>
                </Grid>
                </Grid>
              </div>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}

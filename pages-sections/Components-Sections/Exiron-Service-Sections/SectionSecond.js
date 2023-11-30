import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Zoom, Slide } from "@material-ui/core";

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography } from "@material-ui/core";
import Carousel from "react-slick";

const useStyles = makeStyles(styles);
const useStyles3 = makeStyles({
  imageCard: {
    position: 'relative',
    maxWidth: 800,
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: 650,
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

export default function SectionSecond(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
  };
  
  return (
    // <div style = {{backgroundColor:"#000000"}}>
        <div className={classes.sections} style = {{backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/exironImg/logoExiron.webp')", backgroundSize:'cover', opacity: 0.9}}>
            <Grid container direction='row' justifyContent = {'center'} alignItems='center' spacing={2}>
              <Grid item xs = {12}>
                <Typography variant='h3' align='center' style = {{fontWeight: 'bold', color: "#FE852C", marginTop : '4vw', fontSize: 70}}>
                  Foundry Facility
                </Typography>
              </Grid>
              <Grid item xs = {2}>

              </Grid>
              <Grid item xs = {8}>
                {/* <Card style = {{width: 1200, height: 800, margin: 'auto', marginTop: '15vh'}}> */}
                <Carousel {...settings} style = {{maxWidth: 1200, maxHeight: 800, margin: 'auto', marginTop: '8vh'}}>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/SandMixer.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Sand Mixer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/1.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Sand Mixer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/2.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Sand Mixer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/3.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Molding
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/4.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Molding
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/5.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Molding
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/6.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Sand Mixer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MoldingFirst/7.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                             Sand Mixer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MeltingSecond/Furnance500KG.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Furnance 500 Kg
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MeltingSecond/1.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Furnance
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MeltingSecond/2.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Furnance
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MeltingSecond/3.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Furnance
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/MeltingSecond/Laddle250KG.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Laddle 250 Kg
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/SpectroThird/Spectrometer.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Spectrometer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/SpectroThird/1.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Spectrometer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/SpectroThird/2.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Spectrometer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/SpectroThird/3.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Spectrometer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/SpectroThird/4.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Spectrometer
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/ShootBlastFourth/SHOOTBLAST.webp"
                          alt="e"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Shoot Blast
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/ShootBlastFourth/1.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Shoot Blast
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/ShootBlastFourth/2.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Shoot Blast
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/ShootBlastFourth/3.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Shoot Blast
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/ShootBlastFourth/SHAKEOUT1.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Shake Out
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/ShootBlastFourth/SHAKEOUT2.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Shake Out
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/HeatTreatmentFifth/1.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Heat Treatment
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/HeatTreatmentFifth/2.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Heat Treatment
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/HeatTreatmentFifth/3.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Heat Treatment
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/FoundryFacilities/HeatTreatmentFifth/4.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                            Heat Treatment
                          </Typography>
                      </div>
                  </div>
                </Carousel>
                {/* </Card> */}
              </Grid>
              <Grid item xs = {2}>
                
              </Grid>
            </Grid>
        </div>           
    // </div>
  );
}

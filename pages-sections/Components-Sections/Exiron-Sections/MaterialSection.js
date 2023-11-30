import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from "react-slick";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles({
    root: {
      maxWidth: 300,
      margin:'auto',
    },
    media: {
      height: 200,
      margin:'auto',
    },
  });


export default function MaterialSection(props) {
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
    <div style = {{backgroundColor:"#000000", backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/exironImg/logoExiron.webp')", backgroundSize:'cover', opacity: 0.9}}>
        <div className={classes.sections}>
            <Grid container direction='row' justifyContent = {'center'} alignItems='center' spacing={2}>
              <Grid item xs = {12}>
                <Typography variant='h3' align='center' style = {{fontWeight: 'bold', color: "#FE852C", marginTop : '4vw'}}>
                  Quality Control Product
                </Typography>
              </Grid>
              <Grid item xs = {2}>

              </Grid>
              <Grid item xs = {8}>
                {/* <Card style = {{width: 1200, height: 800, margin: 'auto', marginTop: '15vh'}}> */}
                <Carousel {...settings} style = {{maxWidth: 1200, maxHeight: 800, margin: 'auto', marginTop: '8vh'}}>
                  <div>
                      <img
                          src="/exironImg/QualityControll/Drawing1.webp"
                          alt="First slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Drawing
                          </Typography>
                      </div>
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/PatternTools.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Pattern Tools
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/Pattern2.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Pattern
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/SpectroTools.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Spectro Tools
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/Spectro3.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Spectro
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/Spectro4.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Spectro
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/Spectro5.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Spectro
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/Spectro6.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Spectro
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/Mikroskop.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Mikroskop
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterPortable1.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Portable
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterPortable2.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Portable
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterPortable3.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Portable
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterPortable4.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Portable
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterManualFixProcess5.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Manual Fix Proccess
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterManual6.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Manual
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterManual7.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Manual
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterManual9.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Manual
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/HardnessTesterManual10.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Hardness Tester Manual
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/BrinelTools.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Brinell Tools
                          </Typography>
                      </div>                        
                  </div>
                  <div>
                      <img
                          src="/exironImg/QualityControll/brinel.webp"
                          alt="Second slide"
                          className="slick-image"
                          style = {{maxHeight:'800px'}}
                      />   
                      <div className="slick-caption">
                          <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                              Brinell
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
    </div>
  )
}

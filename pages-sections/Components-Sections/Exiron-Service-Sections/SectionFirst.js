import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Cards from "/components/Card/Card.js";

import Carousel from "react-slick";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
import { Card } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function SectionFirst() {
  const classes = useStyles();
  const classes2 = useStyles2();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2000,    
    pauseOnHover:true,
    arrows:false,
    lazyLoad:true
  };
  return (
    <div>        
      <div className={classes.sections} style = {{backgroundColor: "#000000", padding:15}}>
        {/* <div className={classes.container} style = {{marginTop:'8vh'}}>*/}
            <Grid container direction='row' justifyContent="center" alignItems='center' spacing={2} style = {{marginTop: '10vw'}}>
            <Grid item xs  = {12} sm = {5}>
              <Typography style = {{color:"#FE852C", fontSize:80, marginLeft:'1vw', fontWeight: 'bold'}}>
                Our Service
              </Typography>
              <Typography style = {{color:"#ffffff", fontSize:50, marginLeft:'1vw'}}>
                Our Products and innovations have bring great contributions to various Industries in Indonesia. 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={7}>
                <Card style = {{margin: 'auto', maxWidth: '1200px'}}>
                  <Carousel {...settings}>
                    <div>
                        <img
                            src="/exironImg/3.webp"
                            alt="First slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />
                        {/* <div className="slick-caption">
                            <h4>
                            <LocationOn className="slick-icons" />
                                Yellowstone National Park, United States
                            </h4>
                        </div> */}
                    </div>
                    <div>
                        <img
                            src="/exironImg/3-2.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />                                
                    </div>
                    <div>
                        <img
                            src="/exironImg/3-3.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />                                
                    </div>
                    <div>
                        <img
                            src="/exironImg/3-4.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />                                
                    </div>
                    <div>
                        <img
                            src="/exironImg/3-5.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />                                
                    </div>
                    <div>
                        <img
                            src="/exironImg/3-7.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />                                
                    </div>
                    <div>
                        <img
                            src="/exironImg/3-8.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />                                
                    </div>
                    <div>
                        <img
                            src="/exironImg/3-9.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'700px', maxWidth: '1200px'}}
                        />                                
                    </div>                                
                  </Carousel>
                </Card>
            </Grid>
        </Grid>          
      </div>               
    </div>
  )
}

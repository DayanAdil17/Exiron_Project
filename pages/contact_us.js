import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import NavPills from "/components/NavPills/NavPills.js";
import Parallax from "/components/Parallax/Parallax.js";
import Cards from "/components/Card/Card.js";

import ExironHeader from "/components/Header/ExironHeader.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles({
    root: {
      maxWidth: 400,
      height: 180
    },
    media: {
      height: 240,
    },
  });
  const useStyles3 = makeStyles(styles2);

export default function contact_us(props) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const classes3 = useStyles3();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    lazyLoad: true
  };

  return (
    <div>
      <Header
        brand="/exironImg/logo-exiron.jpg"
        rightLinks={<ExironHeader />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image="/exironImg/melting.jpg" />
      <div className={classNames(classes.main)} style = {{padding : 15}}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                    src="/exironImg/logoExiron.webp"
                    //   src="/img/faces/christian.jpg"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                    <div className={classes.name}>
                        <h3 className={classes.title}>Contact Us</h3>
                            <Typography variant = 'h3' style = {{fontWeight:'bold', color:'#000000', maxWidth: "unset"}}>
                                Jl. Raya Majalaya - Rancaekek No.1A, Rancaekek Wetan, Kec. Rancaekek, Kabupaten Bandung, Jawa Barat 40394
                            </Typography>
                            <br />
                        <GridContainer justify = "center" align='flex-start' spacing = "1">
                        <GridItem xs = {12} sm = {12}>
                          <a href="https://www.google.com/maps/place/Jl.+Raya+Majalaya+-+Rancaekek+No.1A/@-6.9719792,107.7527431,20.65z/data=!4m7!3m6!1s0x2e68c3852690a3a9:0xc81edb96fabf4250!4b1!8m2!3d-6.9719621!4d107.7527726!16s%2Fg%2F11c5p6wd8q?entry=ttu" target="_blank" rel="noopener noreferrer">
                          <CardActionArea >
                              <Card style = {{width : '100%'}}>                                
                                  <CardMedia style={{backgroundColor:"#000000"}}>
                                      <LocationOn style = {{fontSize : 80, color:"#ffffff"}} />
                                  </CardMedia>
                                  <CardContent >
                                      <h5>
                                          Open Our Address
                                      </h5>
                                  </CardContent>                                                           
                              </Card>
                          </CardActionArea>
                          </a>
                          <br />   
                        </GridItem>                      
                        <GridItem xs = {12} sm = {6}>
                            <Card className={classes2.root}>
                                <CardMedia style={{backgroundColor:"#000000"}}>
                                <PhoneIcon style ={{fontSize: 80, color:"#ffffff"}} />
                                </CardMedia>
                                <CardContent>
                                    <h5>
                                        Phone (022-7798365) / Fax (022-7798375)
                                    </h5>
                                </CardContent>                               
                            </Card>
                        </GridItem>                        
                        <GridItem xs = {12} sm = {6}>
                            <CardActionArea onClick={()=>{window.location.href='mailto:marketing@exiron.co.id'}}>
                                <Card className={classes2.root}>                                
                                    <CardMedia style={{backgroundColor:"#000000"}}>
                                        <EmailIcon style = {{fontSize : 80, color:"#ffffff"}} />
                                    </CardMedia>
                                    <CardContent >
                                        <h5>
                                            marketing@exiron.co.id
                                            <br/>
                                            exironbajapratama@exiron.co.id
                                        </h5>
                                    </CardContent>                                                           
                                </Card>
                            </CardActionArea>    
                        </GridItem>
                        </GridContainer>
                    </div>
                </div>
              </GridItem>
            </GridContainer>
            {/* <div className={classes.description} style = {{marginBottom:'10px'}}>
                <p>
                    Our Address:
                </p>
                <p>
                    Jl. Raya Majalaya - Rancaekek No.1A, Rancaekek Wetan, Kec. Rancaekek, Kabupaten Bandung, Jawa Barat 40394
                </p>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

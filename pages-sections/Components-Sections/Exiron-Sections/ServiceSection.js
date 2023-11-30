import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grow, Slide } from "@material-ui/core";

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);
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

export default function ServiceSection(props) {
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

  return (
    <div>
      <div className={classes.sections} ref={ref}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={4} md={4}>
              <div className={classes.container}>
                <div className={classes.title}>
                  <Grow in={inView} timeout={500}>
                    <h2
                      className={classes.title}
                      style={{ fontWeight: "lighter", marginBottom: "2vw" }}
                    >
                      Services
                    </h2>
                  </Grow>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={8} md={8}>
              <div className={classes.title}>
                <Grow in={inView} timeout={500}>
                  <h4
                    className={classes.subtitle}
                    style={{ marginRight: "10vw" }}
                  >
                    Our Products and innovations have bring great contributions
                    to various Industries in Indonesia.
                  </h4>
                </Grow>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg = {4} xl = {4}>
              <div>
                <Grow in={inView} timeout={1000}>                  
                  <Card
                    className={classes2.root}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <CardMedia
                      className={classes2.media}
                      image="/exironImg/Resize_steel3.webp"
                      title="Lifter Pos 4 Zon C FMX302 (KN-2654)"
                      style={{
                        transform: hovered ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                    />                    
                  </Card>
                </Grow>
                <div>
                  <Grow in={inView} timeout={1000}>
                    <Typography align="center" style={{ fontWeight: "bold", marginTop:'1vh' }}>                      
                      Lifter Pos 4 Zon C FMX302 (KN-2654) - HEAT RESISTANT - Industri Semen
                    </Typography>
                  </Grow>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Card
                    className={classes2.root}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    <CardMedia
                      className={classes2.media}
                      image="/exironImg/Resize_steel1.webp"
                      title="Cetakan Genteng"
                      style={{
                        transform: hovered2 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                    />
                  </Card>
                </Grow>
                <div>
                  <Grow in={inView} timeout={1000}>
                    <Typography align="center" style={{ fontWeight: "bold", marginTop:'1vh' }}>                      
                      Cetakan Genteng - CAST IRON - Industri Genteng
                    </Typography>
                  </Grow>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Card
                    className={classes2.root}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                  >
                    <CardMedia
                      className={classes2.media}
                      image="/exironImg/Resize_steel4.webp"
                      title="Lifter 1, 2 Holes"
                      style={{
                        transform: hovered3 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                    />
                  </Card>
                </Grow>
              </div>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Typography align="center" style={{ fontWeight: "bold", marginTop:'1vh' }}>
                    Lifter 1, 2 Holes - ABRASIVE RESISTANT - Industri Semen
                  </Typography>
                </Grow>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Card
                    className={classes2.root}
                    onMouseEnter={handleMouseEnter4}
                    onMouseLeave={handleMouseLeave4}
                  >
                    <CardMedia
                      className={classes2.media}
                      image="/exironImg/Resize_steel5.webp"
                      title="Lining Plate XK-398"
                      style={{
                        transform: hovered4 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                    />
                  </Card>
                </Grow>
              </div>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Typography align="center" style={{ fontWeight: "bold", marginTop:'1vh' }}>
                    Lining Plate XK-398 - WEAR RESISTANT - Industri Semen
                  </Typography>
                </Grow>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Card
                    className={classes2.root}
                    onMouseEnter={handleMouseEnter5}
                    onMouseLeave={handleMouseLeave5}
                  >
                    <CardMedia
                      className={classes2.media}
                      image="/exironImg/revisi6(update).webp"
                      title="Bucket Theeth"
                      style={{
                        transform: hovered5 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                    />
                  </Card>
                </Grow>
              </div>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Typography align="center" style={{ fontWeight: "bold", marginTop:'1vh' }}>                    
                    Bucket Theeth - WEAR RESISTANT - Industri Tambang
                  </Typography>
                </Grow>
              </div>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Card
                    className={classes2.root}
                    onMouseEnter={handleMouseEnter6}
                    onMouseLeave={handleMouseLeave6}
                  >
                    <CardMedia
                      className={classes2.media}
                      image="/exironImg/Resize_steel2.webp"
                      title="Plate Mounting"
                      style={{
                        transform: hovered6 ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease-out",
                      }}
                    />
                  </Card>
                </Grow>
              </div>
              <div>
                <Grow in={inView} timeout={1000}>
                  <Typography align="center" style={{ fontWeight: "bold", marginTop:'1vh' }}>                    
                    Plate Mounting - NODULAR IRON - Industri Otomotif
                  </Typography>
                </Grow>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

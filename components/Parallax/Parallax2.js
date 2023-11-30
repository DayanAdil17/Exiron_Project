import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "/styles/jss/nextjs-material-kit/components/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax2(props) {
    const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
  const { filter, className, children, style, videoSrc, small, responsive } =
    props;
  const classes = useStyles({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      },
    parallaxContent:{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
    }
  });
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined,
  });
  const videoRef = React.useRef(null);

  const onScroll = () => {
    if (videoRef.current) {
      const { top } = videoRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const percentSeen =
        (windowHeight - top) / (windowHeight + videoRef.current.clientHeight);
      const scrollDistance = percentSeen * videoRef.current.duration;
      videoRef.current.currentTime = scrollDistance;
    }
  };

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
      window.addEventListener("scroll", onScroll);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
        window.removeEventListener("scroll", onScroll);
      }
    };
  });

  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0, ${windowScrollTop}px, 0)`);
  };
  return (
    <div className={parallaxClasses}>
      <video
        className={classes.video}
        ref={videoRef}
        autoPlay
        muted
        loop
        src={videoSrc}
        style={{ opacity: "0.4" }}
      />
      <div
        className={classes.parallaxContent}
        style={{
          ...style,
          transform: transform,
        }}
      >
        {children}
      </div>
    </div>
  );  
}
Parallax2.propTypes = {
    className: PropTypes.string,
    filter: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
    videoSrc: PropTypes.string,
    small: PropTypes.bool,
    responsive: PropTypes.bool,
  };

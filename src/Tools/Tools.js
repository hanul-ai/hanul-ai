import React from "react";
import {makeStyles} from "@material-ui/core";
import useStyles from './styles'

function Tools() {
  const classes = useStyles();
  return(
    <>
      <div className={`${classes.toolData} ${classes.mb4}`}>
        <div className={`${classes.bgLight} ${classes.justifyContentCenter} ${classes.alignItemsCenter} ${classes.py4}`} style={{boxShadow: '0 2px 40px 0 rgba(0, 0, 0, 0.1)'}}>
          <a href="https://www.media.io/ko/video-converter.html" data-media-type="Video" data-suffix="video_converter" className={`${classes.dFlex} ${classes.alignItemsCenter} ${classes.textDecorationNone}`} style={{width: '80%'}} ga360location="content_5_buttonLink_2">
            <i className={`${classes.spriteConvertTools37} ${classes.spriteConvertTool2} ${classes.mr2}`}/>
            <h3 className={`${classes.h6}`}>비디오 변환기</h3>
          </a>
        </div>
      </div>
    </>
  );
}
export default Tools;
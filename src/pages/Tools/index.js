import React from "react";
import useStyles from './styles';

function Tools() {
  const classes = useStyles();

  return (
    <div style ={{display: 'flex'}}>
      <div className={classes.leftText}>
        <div className={classes.uploadContainer}>
          <div>
            <h1 className={classes.mainDescription}>인기 온라인 도구</h1>
            <p className={classes.servDescription}>Media.io를 사용하면 온라인에서 비디오 및 오디오 파일을 쉽게 변환, 압축, 편집할 수 있습니다.</p>
          </div>
       </div>
      </div>
      <div className={classes.rightButton}>
        <div className={classes.buttonContainer}>
         <h1>버튼 위치</h1>
        </div>
      </div>
    </div>
  );
}

export default Tools;
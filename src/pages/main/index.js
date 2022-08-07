import React from "react";
import useStyles from './styles';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.textCenter}>
      <div className={classes.uploadContainer}>
        <div>
          <h1 className={classes.titleFont}>Media.io<br></br>온라인 파일 변환기</h1>
          <p className={classes.explanFont}>MP4, MP3, WAV, MOV 등 파일을 온라인에서 다양한 형식으로 변환하세요.</p>
        </div>
        <div className={classes.uploadBlock}>
          <div className={classes.uploadConfigTop}>
            <div className={classes.w100}>
              <span>
                <span className={classes.titleConvert}>변환</span>
                <div className={classes.dInlineBlock}>
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={classes.toggleButton}>...</button>
                  {/* <div className={classes.dropdownMenu}>
                    <div className={classes.formatSelection}>
                      <form className={classes.formatSelectionForm}>
                        <ul>
                          <li></li>
                        </ul>
                      </form>
                    </div>
                  </div> */}
                </div>
              </span>
              <span>
                <span className={classes.titleTo}>에서</span>
                <div className={classes.dInlineBlock}>
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={classes.toggleButton}>...</button>
                </div>
              </span>
            </div>
          </div>
          <div className={classes.taskState}>
            <div className={classes.itemsCenter}>
              <div className={classes.textCenter}>
                <div className={classes.chooseFiles}>
                  <label className={classes.localChoose} for="file-input">
                    <div className={classes.chooseText}>파일을 선택</div>
                    <label className={classes.labelInput}>
                      <input type="file" id="file-input" accept="image/*" style={{display:"none"}}></input>
                      <div className={classes.localUpload}></div>
                    </label>
                  </label>
                  <div className={classes.otherChoose}>
                    <div className={classes.classI}>
                      <img title="dropBox" src="https://www.media.io/imagesV4/pricing/drop-box.svg" className={classes.uploadItem}></img>
                    </div>
                    <div className={classes.classI}>
                      <img title="googleDrive" src="https://www.media.io/imagesV4/pricing/google-drive.svg" className={classes.uploadItem}></img>
                    </div>
                    <div className={classes.classI}>
                      <img title="youtube" src="https://www.media.io/imagesV4/pricing/youtube.svg" className={classes.uploadItem}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
import { render } from "@testing-library/react";
import React, { useEffect, useRef, useState } from "react";
import useStyles from './styles';
import dropbox from '../../images/main/dropbox.svg'
import googledrive from '../../images/main/googledrive.svg'
import youtube from '../../images/main/youtube.svg'

import useDetectClose from "./hooks/useDetectClose";
import classNames from 'classnames';


function Main() {
  const classes = useStyles();


  const [file, setFile] = useState('');
  const [fileImg, setfileImg] = useState('');


  const uploadFile = (e) => {
    var file = e.target.files[0]; 
    
    console.log(file.name);
    console.log(file);

    setFile(file); 
    
    const reader = new FileReader();
    
    reader.readAsDataURL(file)
    reader.onload = () => {

      setfileImg(reader.result) 
    }
  };

  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState('');

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
                  <button onClick={() => setIsOpen(!isOpen)} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={classes.toggleButton}>...</button>
                  <nav ref={dropDownRef} className={classNames(classes.dropdownMenu, {[classes.active] : isOpen})}>
                    <div className={classes.tabContent}>
                      <ul className={classes.noGutter}> 
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">JPG</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">PNG</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">BMP</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">GIF</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">JPEG</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">TIFF</a>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </nav>
                </div>
              </span>
              <span>
                <span className={classes.titleTo}>에서</span>
                <div className={classes.dInlineBlock}>
                  <button onClick={() => setIsOpen(!isOpen)} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={classes.toggleButton}>...</button>
                  {/* <nav ref={dropDownRef} className={classNames(classes.dropdownMenu, {[classes.active] : isOpen})}>
                    <div className={classes.tabContent}>
                      <ul className={classes.noGutter}> 
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">JPG</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">PNG</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">BMP</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">GIF</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">JPEG</a>
                          </li>
                        </div>
                        <div className={classes.contentSize}>
                          <li className={classes.navItem}>
                            <a href='javascript:;' dataToggle="pill" role="tab">TIFF</a>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </nav> */}
                </div>
              </span>
            </div>
          </div>
          <img src={fileImg}/>
          <div className={classes.taskState}>
            <div className={classes.itemsCenter}>
              <div className={classes.textCenter}>
                <div className={classes.chooseFiles}>
                  <label className={classes.localChoose} for="file-input">
                    <div className={classes.chooseText}>파일을 선택</div>
                    <label className={classes.labelInput}>
                      <input type="file" id="file-input" accept="image/*" style={{display:"none"}} onChange={uploadFile}></input>
                      <div className={classes.localUpload}></div>
                    </label>
                  </label>
                  <div className={classes.otherChoose}>
                    <div className={classes.classI}>
                      <img title="dropBox" src={dropbox} className={classes.uploadItem}></img>
                    </div>
                    <div className={classes.classI}>
                      <img title="googleDrive" src={googledrive} className={classes.uploadItem}></img>
                    </div>
                    <div className={classes.classI}>
                      <img title="youtube" src={youtube} className={classes.uploadItem}></img>
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
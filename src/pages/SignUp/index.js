import React from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import soondoll2Img from '../../images/Login/soondoll2.jpg';
import googleLoginImg from '../../images/Login/googleLogin.svg';
import facebookLoginImg from '../../images/Login/facebookLogin.svg';
import twitterLoginImg from '../../images/Login/twitterLogin.svg';
import appleLoginImg from '../../images/Login/appleLogin.svg';

function Signup() {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.pageWrap}>
        <img className={classes.introImage} src={soondoll2Img}/>
        <div className={classes.form}>
          <img className={classes.formLogo} src="https://dc-static.wondershare.com/wsid/com/static/brand/onlineuniconverter.svg" />
          <h4 className={classes.formName}>순돌의 두배로 커지는 사진관</h4>
          <h4 className={classes.testStyle}>dfdf</h4>
          {/* 다른 로그인 영역 */}
          <div className={classes.formOtherSignUpList}>
            <a>
              <img src={googleLoginImg}/>
            </a>
            <a>
              <img src={facebookLoginImg}/>
            </a>
            <a>
              <img src={twitterLoginImg}/>
            </a>
            <a>
              <img src={appleLoginImg}/>
            </a>
          </div>
          {/* or 영역 분리 구간 */}
          <div className={classes.formDivArea}>
            <span className={classes.formDivAreaLine}>Or</span>
          </div>
          {/* 로그인 영역 */}
          <div className={classes.formInputBox}>
            <div className={classes.formInputIsError}>
              <input type="text" className={classes.formInput} placeholder="이메일 주소 입력"></input>
              <span className={classes.formInputStar}>*</span>
            </div>
            <div className={classes.formInputIsError}>
              <input type="password" className={classes.formInput} placeholder="비밀번호 입력"></input>
              <span className={classes.formInputStar}>*</span>
            </div>
          </div>
          <button type="button" className={classes.formPrimaryButton}>
            <span> 순돌의 두배로 커지는 계정 만들기 </span>
          </button>
          <div className={classes.formLinkArea}>
            <Link to='/login' className={classes.formToLoginLink}>이미 계정이 있나요? 바로 로그인하세요.</Link>
            <div className={classes.formToPolicyArea}>
              순돌의 두배 <a className={classes.formToPolicyLink}>이용약관</a>
              , <a className={classes.formToPolicyLink}>개인 정보 수집 및 이용약관</a>
              에 모두 동의합니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;

import React from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import soondoll2Img from '../../images/Login/soondoll2.jpg';
import googleLoginImg from '../../images/Login/googleLogin.svg';
import facebookLoginImg from '../../images/Login/facebookLogin.svg';
import twitterLoginImg from '../../images/Login/twitterLogin.svg';
import appleLoginImg from '../../images/Login/appleLogin.svg';

function Login() {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.pageWrap}>
        <img className={classes.introImage} src={soondoll2Img}/>
        <div className={classes.form}>
          <img className={classes.formLogo} src="https://dc-static.wondershare.com/wsid/com/static/brand/onlineuniconverter.svg" />
          <h4 className={classes.formName}>순돌의 두배 ID에 로그인</h4>
          {/* 로그인 영역 */}
          <div className={classes.formInputBox}>
            <div className={classes.formInputIsError}>
              <input type="text" className={classes.formInput} placeholder="이메일 주소"></input>
            </div>
            <div className={classes.formInputIsError}>
              <input type="password" className={classes.formInput} placeholder="암호"></input>
            </div>
          </div>
          <button type="button" className={classes.formPrimaryButton}>
            <span> 로그인 </span>
          </button>
          <div className={classes.formLinkArea}>
            {/* <a className={classes.formToLoginLink}>다른 계정으로 로그인</a><br/>
            <a className={[classes.formToLoginLink, classes.formToLoginLinkMargin].join(" ")}>비밀번호를 잊어 버리 셨나요?</a> */}
            <a className={classes.formToLoginLink}>비밀번호를 잊어 버리 셨나요?</a>
            <p className={[classes.formSignUpLinkArea, classes.formToLoginLinkMargin].join(" ")}>
              순돌의 두배 ID가 없습니까? <Link to='/signUp' className={classes.formToLoginLink}>순돌의 두배 계정 만들기</Link>
            </p>
          </div>
          {/* 영역 분리 구간 */}
          <div className={classes.formDivArea}>
            <span className={classes.formDivAreaLine}>기타 로그인 방식</span>
          </div>
          {/* 다른 로그인 영역 */}
          <div className={classes.formOtherLoginList}>
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
          <div className={classes.formLinkArea}>
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
export default Login;

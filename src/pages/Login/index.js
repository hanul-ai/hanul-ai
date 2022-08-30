import React, { useState, useRef } from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import soondoll2Img from '../../images/Login/soondoll2.jpg';

function Login() {
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: ''
  });
  const { userId, userPw } = userInfo;

  const userIdRef = useRef();
  const userPwRef = useRef();
  
  // 아이디, 비번 수정
  const onChangeUserInfo = (e) => {
    // e.target.value와 e.target.name을 추출
    const { value, name } = e.target;

    setUserInfo({
      ...userInfo, // 기존의 userInfo 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  // 계정생성 버튼 클릭
  const onClickLogin = () => {
    
    if(userId.length <= 0){
      alert("이메일을 입력해주세요.");
      userIdRef.current.focus(); // 이메일로 포커싱
        return false;
    }
    
    if(userPw.length <= 0){
      alert("비밀번호를 입력해주세요.");
      userPwRef.current.focus(); // 비밀번호로 포커싱
        return false;
    }

    alert("로그인 : 백엔드에서 체크");
  };
  
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
              <input type="text" name="userId" className={classes.formInput} placeholder="이메일 주소"
                onChange={onChangeUserInfo} value={userId} ref={userIdRef}></input>
            </div>
            <div className={classes.formInputIsError}>
              <input type="password" name="userPw" className={classes.formInput} placeholder="암호"
                onChange={onChangeUserInfo} value={userPw} ref={userPwRef}></input>
            </div>
          </div>
          <button type="button" className={classes.formPrimaryButton} onClick={onClickLogin}>
            <span> 로그인 </span>
          </button>
          <div className={classes.formLinkArea}>
            <a className={classes.formToLoginLink}>비밀번호를 잊어 버리 셨나요?</a>
            <p className={[classes.formSignUpLinkArea, classes.formToLoginLinkMargin].join(" ")}>
              순돌의 두배 ID가 없습니까? <Link to='/signUp' className={classes.formToLoginLink}>순돌의 두배 계정 만들기</Link>
            </p>
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

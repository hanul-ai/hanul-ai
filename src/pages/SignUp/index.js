import React, { useState, useRef } from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import soondoll2Img from '../../images/Login/soondoll2.jpg';

function Signup() {
  const classes = useStyles();

  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: ''
  });
  const { userId, userPw } = userInfo;

  const userIdRef = useRef();
  const userPwRef = useRef();
  
  // 아이디, 비밀번호 수정
  const onChangeUserInfo = (e) => {

    // e.target.value와 e.target.name을 추출
    const { value, name } = e.target;

    setUserInfo({
      ...userInfo, // 기존의 userInfo 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  // 계정생성 버튼 클릭
  const onClickSingup = () => {
    
    // 이메일 유효성 검사
    if(userId.length <= 0){
      alert("이메일을 입력해주세요.");
      userIdRef.current.focus(); // 이메일로 포커싱
        return false;
    }
    const checkId = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!checkId.test(userId)){
      alert("유요한 이메일을 입력하세요.");
      userIdRef.current.focus();
      return false;
    }
    
    // 비밀번호 유효성 검사 : 영어 대소문자,숫자,특수문자 모두 포함해야함
    if(userPw.length <= 0){
      alert("비밀번호를 입력해주세요.");
      userPwRef.current.focus(); // 비밀번호로 포커싱
        return false;
    }
    let checkPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!checkPw.test(userPw)) {
        alert("비밀번호는 영어,숫자,특수문자를 넣어 입력해주세요.");
        userPwRef.current.focus();
        return false;
    }

    alert("가입 시작");
  };
  
  return (
    <>
      <div className={classes.pageWrap}>
        <img className={classes.introImage} src={soondoll2Img}/>
        <div className={classes.form}>
          <img className={classes.formLogo} src="https://dc-static.wondershare.com/wsid/com/static/brand/onlineuniconverter.svg" />
          <h4 className={classes.formName}>순돌의 두배로 커지는 사진관</h4>
          {/* 로그인 영역 */}
          <div className={classes.formInputBox}>
            <div className={classes.formInputIsError}>
              <input type="text" name="userId" className={classes.formInput} placeholder="이메일 주소 입력"
                onChange={onChangeUserInfo} value={userId} ref={userIdRef}></input>
              <span className={classes.formInputStar}>*</span>
            </div>
            <div className={classes.formInputIsError}>
              <input type="password" name="userPw" className={classes.formInput} placeholder="비밀번호 입력"
                onChange={onChangeUserInfo} value={userPw} ref={userPwRef}></input>
              <span className={classes.formInputStar}>*</span>
            </div>
          </div>
          <button type="button" className={classes.formPrimaryButton} onClick={onClickSingup}>
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

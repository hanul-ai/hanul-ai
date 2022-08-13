import React from 'react';
import footerStyles from './style';

const Footer = () => {
  const fStyle=footerStyles();

  return (
    <footer>
      <div className={fStyle.footer}>

        <div className={fStyle.divTop}>  

          <div className={fStyle.divLift}>
            <img className={fStyle.divImg} src='img/FooterLogo.png' />
          </div>

          <div className={fStyle.divRight}>

            <div className={fStyle.divRTop}>
                
              <div className={fStyle.divR1}>
                <b>회사소개</b>
                <ul className={fStyle.ul}>
                  <li>
                    Wondershare의 스토리
                  </li>
                  <li>
                    Wondershare의 운영 철학
                  </li>
                  <li>
                    대표자 인사
                  </li>
                  <li>
                    글로벌 사무실
                  </li>
                </ul>
              </div>

              <div className={fStyle.divR2}>
                <b>고객지원</b>
                <ul className={fStyle.ul}>
                  <li>
                    제휴문의
                  </li>
                  <li>
                    메일문의
                  </li>
                </ul>
              </div>

              <div className={fStyle.divR3}>
                <b>그룹 멤버</b>
              </div>

            </div>

            <div className={fStyle.divRBottom}>
              <ul className={fStyle.ul}>
                <li className={fStyle.li}>
                  인기제품
                </li>
                <li className={fStyle.li}>
                  Filmora
                </li>
                <li className={fStyle.li}>
                  UniConverter
                </li>
                <li className={fStyle.li}>
                  Recoverit
                </li>
                <li className={fStyle.li}>
                  Dr.Fone
                </li>
                <li className={fStyle.li}>
                  PDFelement
                </li>
                <li className={fStyle.li}>
                  FamiSafe
                </li>
              </ul>
            
            </div>



          </div>

        </div>

        <div className={fStyle.divBottom}>
          <div>
            <ul className={fStyle.ul}>
              <li className={fStyle.li}>
                이용약관
              </li>
              <li className={fStyle.li}>
                개인정보처리방침
              </li>
              <li className={fStyle.li}>
                쿠키
              </li>
              <li className={fStyle.li}>
                사용자 라인선스 계약
              </li>
              <li className={fStyle.li}>
                환불정책
              </li>
              <li className={fStyle.li}>
                제거방법
              </li>

              <div>
                <ul className={fStyle.ul}>
                  <li className={fStyle.li}>
                  Copyright © 2022 Wondershare. All rights reserved. The order process, tax issue and invoicing to end user is conducted by Wondershare Technology Co., Ltd, which is the subsidiary of Wondershare group.
                  </li>
                </ul>
              </div>

            </ul>
          </div>

          <div className={fStyle.select}>
            <select>
              <option value="default" selected>language</option>
              <option value="apple">한국어</option>
              <option value="orange">english</option>
              <option value="grape">French</option>
              <option value="melon">일본어</option>
            </select>
          </div>
          

        </div>

      </div>
    </footer>
  )
}

export default Footer

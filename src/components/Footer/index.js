import React from 'react';
import footerStyles from './style';

const Footer = () => {
  const fStyle=footerStyles();

  return (
    <footer>
      <div className={fStyle.footer}>

        <div className={fStyle.divTop}>

          <div className={fStyle.divLeft}>
            <img className={fStyle.divImg} src='/img/FooterLogo.png' />
          </div>

          <div className={fStyle.divBottom}>
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
            </ul>
            <div className={fStyle.foundingYear}>
              Copyright © 2022 Wondershare.
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer

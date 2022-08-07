import React from 'react';
import headerStyles from './style';
import {TiZoom} from "react-icons/ti";

const Header = () => {
  const hStyle=headerStyles();
  
  return (
    <header className={hStyle.header}>

      <div className={hStyle.contents}>

        <nav className={hStyle.navigation}>

          <img src='img/MediaImg.png' width="100px" height="40px"/>

          <ul className={hStyle.ul}>
            <li className={hStyle.li}>
              온라인 도구
            </li>
            <li className={hStyle.li}>
              데스크탑 도구
            </li>
            <li className={hStyle.li}>
              API
            </li>
            <li className={hStyle.li}>
              가격
            </li>
            <li className={hStyle.li}>
              무료가입
            </li>
            <li className={hStyle.li}>
              로그인
            </li>
            <li className={hStyle.li}>
              <TiZoom />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

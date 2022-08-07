import React from 'react';
import {Route} from 'react-router-dom';
import Main from "./pages/main/index";
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';

function App() {
    return (
        <div>
            {/* 헤더에 관련된 부분을 여기에 넣으면 된다 */}
            <header>
            </header>
            <main>
                <Route path="/main">
                    <Main />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signUp">
                    <SignUp />
                </Route>
                {/* params를 사용하여 동적 경로 추가하기
                /:뒤에 그것에 대한 이름을 붙이고 아무값이나 넣어서 사용할 수 있다.
                test/t1 , test/t2 등.... */}
                <Route path="/test/:type">
                    <SignUp />
                </Route>
            </main>
            <footer>
            </footer>
        </div>
    );
}

export default App;
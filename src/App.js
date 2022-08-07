import React from 'react';
import {Route} from 'react-router-dom';
import Tools from './Tools/Tools';

function App() {
    return (
        <div>
            <Route path="/">
              <Tools />
            </Route>
        </div>
    );
}
export default App;
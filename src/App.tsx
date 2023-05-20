import React from 'react';
import './App.module.scss';
import classes from './App.module.scss';
import { Parent } from './components/Parent';
import { Child } from './components/Child';
function App() {
    return (
        <div className={classes.app}>This is the app
                <div>
                    <Parent />
                </div>

        </div>
    )
}
export default App;

import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routers} from "./routes/Routes";
import {Main} from "./main/Main";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Main/>
                <div className="app-wrapper-content">
                    <Routers/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routers} from "./routes/Routes";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                Главная
                <div className="app-wrapper-content">
                    <Routers/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

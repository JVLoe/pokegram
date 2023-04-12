import './App.css';
import PokeSplash from "./Components/PokeSplash/PokeSplash";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import PokeDirection from "./Components/PokeDirection/PokeDirection";
import { useState } from "react";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);

    const handleAuthentication = () => {
        setAuthenticated(true);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index="/" element={<PokeSplash handleAuthentication={handleAuthentication} />} />
                    {authenticated ? (
                        <Route path="/direction" element={<PokeDirection />} />
                    ) : (
                        <Route path="/direction" element={<Navigate to="/404" />} />
                    )}
                    <Route path="/404" element={<PageNotFound handleAuthentication={handleAuthentication}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

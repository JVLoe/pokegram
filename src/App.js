import './App.css';
import PokeSplash from "./Components/PokeSplash/PokeSplash";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { useState } from "react";
import PokeDirection from "./Components/PokeDirection/PokeDirection";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import NoEntry from "./Components/NoEntry/NoEntry";

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

                    <Route path="/direction" element={<PokeDirection handleAuthentication={handleAuthentication}/>} />
                    {authenticated ? (
                        <Route path="/no-entry" element={<NoEntry />} />
                    ) : (
                        <Route path="/no-entry" element={<Navigate to="/404" />} />
                    )}


                    <Route path="/no-entry" element={<NoEntry />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

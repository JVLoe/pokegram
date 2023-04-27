import './App.css';
import PokeSplash from "./Components/PokeSplash/PokeSplash";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {useState} from "react";
import PokeDirection from "./Components/PokeDirection/PokeDirection";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import NoEntry from "./Components/NoEntry/NoEntry";
import PokeProfileCollection from "./Components/PokeProfileCollection/PokeProfileCollection";
import PokeProfile from "./Components/PokeProfile/PokeProfile";

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [showBackButton, setShowBackButton] = useState(false);

    const handleAuthentication = () => {
        setAuthenticated(true);
    };


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index="/" element={<PokeSplash handleAuthentication={handleAuthentication}/>}/>
                    {authenticated ? (
                        <Route path="/direction"
                               element={<PokeDirection handleAuthentication={handleAuthentication}/>}/>
                    ) : (
                        <Route path="/direction" element={<Navigate to="/404"/>}/>
                    )}

                    <Route path="/404" element={<PageNotFound/>}/>

                    <Route path="/direction" element={<PokeDirection handleAuthentication={handleAuthentication}/>}/>
                    {authenticated ? (
                        <Route path="/no-entry" element={<NoEntry/>}/>
                    ) : (
                        <Route path="/no-entry" element={<Navigate to="/404"/>}/>
                    )} || {
                    authenticated ? (
                        <Route path="/poke-collection" element={<PokeProfileCollection handleAuthentication={handleAuthentication}/>}/>
                    ) : (
                        <Route path="/poke-collection" element={<Navigate to="/404"/>}/>
                    )
                }

                    <Route path="/no-entry" element={<NoEntry/>}/>

                    <Route path="/poke-collection" element={<PokeProfileCollection handleAuthentication={handleAuthentication}/>}/>
                    {authenticated ? (
                        <Route path="/poke-profile" element={<PokeProfile />}/>
                    ) : (
                        <Route path="/poke-profile" element={<Navigate to="/404"/>}/>
                    )}

                    <Route path="/poke-profile" element={<PokeProfile />}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;

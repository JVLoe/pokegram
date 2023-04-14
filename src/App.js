import './App.css';
import PokeSplash from "./Components/PokeSplash/PokeSplash";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {useState} from "react";
import PokeDirection from "./Components/PokeDirection/PokeDirection";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import NoEntry from "./Components/NoEntry/NoEntry";
import PokeProfileCollection from "./Components/PokeProfileCollection/PokeProfileCollection";

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);

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
                        <Route path="/poke-collection" element={<PokeProfileCollection/>}/>
                    ) : (
                        <Route path="/poke-collection" element={<Navigate to="/404"/>}/>
                    )
                }

                    <Route path="/no-entry" element={<NoEntry/>}/>

                    <Route path="/poke-collection" element={<PokeProfileCollection/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;

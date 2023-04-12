import './App.css';
import PokeSplash from "./Components/PokeSplash/PokeSplash";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PokeDirection from "./Components/PokeDirection/PokeDirection";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index="/" element={<PokeSplash />} />
                <Route path="/direction" element={<PokeDirection />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

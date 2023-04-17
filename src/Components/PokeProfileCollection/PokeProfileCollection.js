import './PokeProfileCollection.css';
import Navbar from "../Narbar/Navbar";
import {useEffect, useState} from "react";

const PokeProfileCollection = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [searchPokemon, setSearchPokemon] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=${offset}`
            );
            const data = await response.json();
            setPokemons(data.results);
        };
        fetchData();
    }, [offset]);

    const handleNext = () => {
        setOffset(offset + 6);
    };

    const handleBack = () => {
        setOffset(Math.max(0, offset - 6));
    };

    const handleSearch = (event) => {
        setSearchPokemon(event.target.value);
    };

    const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
    );

    return (
        <div>
            <Navbar/>
            <div className="pokeProfileCollectionContainer">

                <div className="searchContainer">
                    <button className="btn-search"></button>
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search Pokemon..."
                        value={searchPokemon}
                        onChange={handleSearch}
                    />
                </div>

                <div className="pokeCardContainer">
                    {filteredPokemons.slice(0, 6).map((pokemon) => (
                        <div key={pokemon.name} className="pokeCard">
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
                                    .split("/")
                                    .slice(-2, -1)}.png`}
                                alt={pokemon.name}
                            />
                            <p>{pokemon.name}</p>
                        </div>
                    ))}
                </div>
                <div className="navigationButtons">
                    <button onClick={handleBack} disabled={offset === 0}>
                        Back
                    </button>
                    <button onClick={handleNext} disabled={offset >= 99994}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokeProfileCollection;

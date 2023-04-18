import './PokeProfileCollection.scss';
import Navbar from "../Narbar/Navbar";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faMagnifyingGlass, faRotateLeft} from "@fortawesome/free-solid-svg-icons";

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

    const handleReset = () => {
        setOffset(0);
        setSearchPokemon("");
    }

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
                    <button className="btn-search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: "#0b26b9",}} />
                    </button>
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search Pokemon..."
                        value={searchPokemon}
                        onChange={handleSearch}
                    />
                </div>

                <div className="resetPokemonButton">
                    <button onClick={handleReset}>
                        <FontAwesomeIcon icon={faRotateLeft} style={{color: "#0b26b9",}} />
                    </button>
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
                            <p className="avatarName">{pokemon.name}</p>
                        </div>
                    ))}
                </div>
                <div className="navigationButtons">
                    <button onClick={handleBack} disabled={offset === 0}>
                        <FontAwesomeIcon icon={faChevronLeft} style={{color: "#0b26b9",}} />
                    </button>
                    <button onClick={handleNext} disabled={offset >= 99994}>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: "#0b26b9",}} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokeProfileCollection;

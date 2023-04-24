import React, {useState, useEffect} from "react";

import "./PokeProfileCollection.scss";
import Navbar from "../Narbar/Navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faMagnifyingGlass,
    faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const PokeProfileCollection = () => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [displayedPokemon, setDisplayedPokemon] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startPage, setStartPage] = useState(true);
    const [finalPage, setFinalPage] = useState(false);

    const errorMessage = "Something went wrong :(";

    useEffect(() => {
        async function fetchPokemon() {
            setIsLoading(true);
            setError(null);
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const data = await res.json();
                setAllPokemon(data.results);
                setDisplayedPokemon(data.results.slice(0, 6));
            } catch (err) {
                setError(err);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPokemon();
    }, [error]);

    useEffect(() => {
        const currentStartIndex = allPokemon.indexOf(displayedPokemon[0]);
        if (currentStartIndex === 0) {
            setStartPage(true);
        } else {
            setStartPage(false);
        }
        if (currentStartIndex + 6 >= allPokemon.length) {
            setFinalPage(true);
        } else {
            setFinalPage(false);
        }
    }, [allPokemon, displayedPokemon]);

    const handleSearch = (event) => {
        setSearchPokemon(event.target.value);
        const filteredPokemon = allPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        if (error) {
            return <p>{errorMessage}</p>
        } else {
            setDisplayedPokemon(filteredPokemon.slice(0, 6));
        }
    };

    const handleNext = () => {
        const currentStartIndex = allPokemon.indexOf(displayedPokemon[0]);
        const nextPokemon = allPokemon.slice(
            currentStartIndex + 6,
            currentStartIndex + 12
        );
        if (error) {
            return <p>{errorMessage}</p>
        } else {
            setDisplayedPokemon(nextPokemon);
        }
    };

    const handleBack = () => {
        const currentStartIndex = allPokemon.indexOf(displayedPokemon[0]);
        const prevPokemon = allPokemon.slice(
            currentStartIndex - 6,
            currentStartIndex
        );
        if (error) {
            return <p>{errorMessage}</p>
        } else {
            setDisplayedPokemon(prevPokemon);
        }
    };

    const handleReset = () => {
        setSearchPokemon("");
        setDisplayedPokemon(allPokemon.slice(0, 6));
    };


    const displayedPokemonDetails = displayedPokemon.map((pokemon) => {
        const id = pokemon.url.split("/")[6];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
            <div key={id} className="pokeCard">
                <img src={imageUrl} alt={pokemon.name}/>
                <p className="avatarId">#{id}</p>
                <p className="avatarName">{pokemon.name}</p>
            </div>
        );
    });


    return (
        <div>
            <Navbar/>
            <div className="pokeProfileCollectionContainer">
                <div className="searchContainer">
                    <button className="btn-search">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            size="lg"
                            style={{color: "#0b26b9"}}
                        />
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
                        <FontAwesomeIcon
                            icon={faRotateLeft}
                            style={{color: "#0b26b9"}}
                        />
                    </button>
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <div className="pokeCardContainer">
                            {displayedPokemonDetails}
                        </div>
                        <div className="navigationButtons">
                            <button onClick={handleBack} disabled={startPage}>
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    style={{color: "#0b26b9"}}
                                />
                            </button>
                            <button onClick={handleNext} disabled={finalPage}>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    style={{color: "#0b26b9"}}
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default PokeProfileCollection;

/**TODO:
 * - fix search bar. When clicking next, you cannot search though prev pokemon
 * - style the cards better
 * - create PokeProfilePage && Link each card with data to that page
 * - the PokeProfilePage needs a back button to return to the PokeProfileCollection page
 *
 *
 *
 *
 * -fetch api of 151 pokemon and store its state (pokemons) - pokemons isnt interfered with
 * - another state to set the displayed pokemon to 6 (the next buttons will basically sift through this) - maybe "dispayedPokemons"
 * - the search will have to use some sort of spread syntax to look through all pokemon
 *
 * - these need to be kept seperate to a degree - using offset with pokemons essentally over-rides the limit i've manually put in the fetch url request
 * */
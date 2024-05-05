import React from 'react';
import CustomCalendar from './CustomCal';
import '../components/styles/Calendar.css';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { currentUser } = useAuth();
    return (
        <div className='text-2xl font-bold pt-14'>
            {/* AFTER THI WORKS SEE ABOUT DISPLAYING LOGIN INFO SAYINH UR LOGGED IN */}
            <p>SORRY WE'RE ALL BOOKED FOR THIS YEAR</p>
            <CustomCalendar />
        </div>
    );
}

export default Home;

// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// 
// const Home = () => {
    // const { currentUser } = useAuth();
    // const [pokemon, setPokemon] = useState(null);
    // const [loading, setLoading] = useState(true);
// 
    // useEffect(() => {
        // const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
        // fetch(url)
            // .then(response => response.json())
            // .then(data => {
                // setPokemon(data);
                // setLoading(false);
            // })
            // .catch(error => {
                // console.error('Error fetching Pokemon:', error);
                // setLoading(false);
            // });
    // }, []);
// 
    // return (
        // <div className='text-2xl font-bold pt-14'>
            {/* {loading ? <p>Loading Pokemon...</p> : */}
                // <>
                    {/* <p>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</p> */}
                    {/* <p>SORRY WE'RE ALL BOOKED FOR THIS YEAR, BUT HERE'S ONE OF OUR FAVORITE <br/> SNOW CONE CHARACTERS</p> */}
                    {/* <h2>Pokemon Data:</h2> */}
                    {/* {pokemon && ( */}
                        // <div>
                            {/* <p>Name: {pokemon.name}</p> */}
                            {/* <p>Height: {pokemon.height}</p> */}
                            {/* <p>Weight: {pokemon.weight}</p> */}
                            {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
                        {/* </div> */}
                    // )}
               {/* </> */}
            // }
        {/* </div> */}
    // );
// }
// 
// export default Home;
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../components/pockemon/PockemonList';
import PokemonCategory from '../components/pockemon/PockemonCategory';
import { Button, Card, CardActionArea, CardHeader, Grid, List, ListItem, Paper, Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

const Index = () => {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false)
  const [PokemonsLoading, setPokemonsLoading] = useState(false)
  const [PokemonInformationLoading, setPokemonInformationLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedInformations, setSelectedInformations] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsAbility, setPokemonsAbility] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(false)
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonHeight, setPokemonHeight] = useState("")
  const [pokemonWeight, setPokemonWeight] = useState("")
  const [pokemonImage, setPokemonImage] = useState("")
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryTypes, setCategoryTypes] = useState([])

  // Fetch categories on initial load
  useEffect(() => {
    setCategoryLoading(true)
    axios.get('https://pokeapi.co/api/v2/type')
      .then(response => {
        setCategories(response.data.results);
        setCategoryLoading(false)
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  // Fetch pokemons when a category is selected
  const handleCategoryClick = (category) => {
    setPokemonsLoading(true)
    setSelectedCategory(category);
    axios.get(`https://pokeapi.co/api/v2/type/${category}`)
      .then(response => {

        setPokemonsLoading(false)
        console.log(response);
        setPokemons(response.data.pokemon);
      })
      .catch(error => {
        console.error('Error fetching pokemons:', error);
      });
  };
  // Fetch pokemons when select one of them and get informations
  const handleGetInformationsClick = (informations) => {
    setPokemonInformationLoading(true)
    setPokemonSelected(true)
    setSelectedCategory(informations);
    axios.get(`${informations}`)
      .then(response => {
        setPokemonInformationLoading(false)
        console.log(response);
        setPokemonsAbility(response.data.abilities);
        setPokemonName(response.data.name)
        setPokemonHeight(response.data.height)
        setPokemonWeight(response.data.weight)
        setPokemonImage(response.data.sprites.front_default)
        setCategoryTypes(response.data.types)
        setSelectedCategory("")
        setSearchTerm("")
      })
      .catch(error => {
        console.error('Error fetching pokemons:', error);
      });
  };

  // Filter pokemons based on search term
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    categoryLoading ?
      <Grid container justify='center'>
        <CircularProgress />
      </Grid>
      : <div className='main'>
        <Grid container justify='center' spacing={3}>
          <Grid container justify='center'>
            <h1 class="mb-4 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Select The Category</span> </h1>
          </Grid>
          <Grid container justify='flex-start' className='ml-6'>
            <div class="mb-6">
              <input type="text"
                id="default-input"
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </Grid>
          {categories.map((category) => {
            return (

              <Grid item>
                <Card style={{ width: "150px", padding: "10px", marginTop: "10px", backgroundColor: "#f9f5f5" }}>
                  <PokemonCategory
                    key={category.name}
                    category={category}
                    onClick={handleCategoryClick}
                  />
                </Card>
              </Grid>

            )
          })}
          {PokemonsLoading ?
            <Grid container justify='center'>
              <CircularProgress />
            </Grid> :
            searchTerm ?
              <Grid container justify='center'>
                {filteredPokemons.map((pokemon) => (
                  <Grid item key={pokemon.pokemon.name}>
                    <Card className='pokemonCards'>
                      <Grid container justify='center'>
                        <img src='/landscape-1456483171-pokemon2.avif' style={{ width: "150px" }} />
                      </Grid>
                      <Typography>{pokemon.pokemon.name}</Typography>
                      <CardActionArea>
                        <Button color='primary' variant='contained' onClick={() => handleGetInformationsClick(pokemon.pokemon.url)}>
                          More Information
                        </Button>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              :
              selectedCategory ?
                <Grid container justify='center'>
                  <Card style={{ width: "500px" }}>
                    <button type="button"
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setSelectedCategory("")}>
                      <span class="sr-only">Close menu</span>

                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <Grid container justify='center' spacing={2}>
                      {pokemons.map((pokemon) => {
                        return (
                          <Grid item>
                            <Card className='pokemonCards'>
                              <Grid container justify='center'>
                                <img src='/landscape-1456483171-pokemon2.avif' style={{ width: "150px" }} />
                              </Grid>
                              <Typography>{pokemon.pokemon.name}</Typography>

                              <CardActionArea>
                                <Button color='primary' variant='contained' onClick={() => handleGetInformationsClick(pokemon.pokemon.url)}>
                                  More Information
                                </Button>
                              </CardActionArea>
                            </Card>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Card>
                </Grid> : null}
          <Grid container justify='center'>
            <div class="flex justify-center ...">


              {PokemonInformationLoading ?
                <Grid container justify='center'>
                  <CircularProgress />
                </Grid> :
                pokemonSelected ?
                  <Grid container justifty='center'>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                      <Grid container justify='center'>
                        <Grid container>
                          <button type="button"
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setPokemonSelected(false)}>
                            <span class="sr-only">Close menu</span>

                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </Grid>
                        <img class="w-full" style={{ width: "189px" }} src={pokemonImage} alt="pokemon" />
                      </Grid>
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Hello! I'm {pokemonName}</div>
                        <p class="text-gray-700 text-base">
                          {`My height is ${pokemonHeight} and my weight is ${pokemonWeight}`}
                        </p>
                        {categoryTypes.length > 1 ?
                          <>
                            <Grid container>
                              <Grid item>
                                <Typography color='secondary'>My another type : </Typography>
                              </Grid>
                              {categoryTypes.slice(1).map((type) => {
                                return (
                                  <Grid item>
                                    <Typography color='secondary'>{type.type.name}&nbsp;</Typography>
                                  </Grid>

                                )
                              })}
                            </Grid>
                          </>
                          : null}
                        <p class="text-gray-700 text-base">
                          these are my abilities :
                        </p>
                        {pokemonsAbility.map((ability) => {
                          return (
                            <Grid container>
                              <ListItem className='list-disc'>
                                <Typography>{ability.ability.name}</Typography>
                              </ListItem>
                            </Grid>

                          )
                        })}

                      </div>

                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${pokemonName}`}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Pokemon</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Info</span>
                      </div>
                    </div>
                  </Grid> : null}
            </div>
          </Grid>
        </Grid>
      </div>

  );
};

export default Index;

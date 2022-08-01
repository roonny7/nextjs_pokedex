import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { useState, useEffect } from 'react';
import { localFavorites } from "../../utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritesPokemon } from "../../components/pokemon";

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

   useEffect(() => {
      setFavoritePokemons(localFavorites.pokemons());

   }, [])

   //<FavoriteCardPokemon pokemonId={}/>
  return (
    <Layout title="Pokemons - favoritos">
        {
          favoritePokemons.length===0
          ? ( <NoFavorites /> )
          : ( <FavoritesPokemon pokemons={favoritePokemons}/>
              
              


          )
        }



        



    </Layout>

  )
}

export default FavoritesPage
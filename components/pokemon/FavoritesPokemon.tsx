import { Card, Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    pokemons: number[];
}
export const FavoritesPokemon:FC<Props> = ( { pokemons }) => {

    return (
        <Grid.Container gap={2} direction='row' justify="flex-start">
                {
                  pokemons.map(id => (
                    <FavoriteCardPokemon id = {id} key={id}/>                    
                  ))
                }
              </Grid.Container>
    )
}
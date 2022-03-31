import React, { useEffect } from "react";
import "./Dashboard.css";

import { useSelector } from "react-redux";

import { DashboardService } from "../../../state/pages/dashboard/service";

import Navbar from "../../components/navbar/Navbar";
import Pokecard from "../../components/pokecard/Pokecard";
import Search from "../../components/search/Search";

import Button from "@mui/material/Button";

const baseImageUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function Dashboard() {
  const { pokemons } = useSelector((state) => state.dashboard);

  useEffect(() => {
    DashboardService.pokemon(1, 12);
  }, []);

  const loadMorePokemon = () => {
    DashboardService.pokemon(pokemons.length + 1, pokemons.length + 12);
  };

  return (
    <main className="dashboard">
      <Navbar />
      <div className="dashboard__contents">
        <Search />
        <div className="dashboard__pokemons">
          {pokemons.map((pokemon) => {
            return (
              <Pokecard
                key={pokemon.name}
                imgSrc={`${baseImageUrl}${pokemon.id}.png`}
                name={pokemon.name}
                types={pokemon.types}
              />
            );
          })}
        </div>
        <Button variant="contained" onClick={loadMorePokemon} disableElevation>
          Load More
        </Button>
      </div>
    </main>
  );
}

export default Dashboard;

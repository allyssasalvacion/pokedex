import React, { useEffect } from "react";
import "./Dashboard.css";

import { useSelector } from "react-redux";

import { DashboardService } from "../../../state/pages/dashboard/service";

import Navbar from "../../components/navbar/Navbar";
import Pokecard from "../../components/pokecard/Pokecard";
import Search from "../../components/search/Search";

const baseImageUrl =
  "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/";

function Dashboard() {
  const { pokemons } = useSelector((state) => state.dashboard);

  useEffect(() => {
    DashboardService.pokemon(1, 10);
  }, []);

  return (
    <main className="dashboard">
      <Navbar />
      <div className="dashboard__contents">
        <Search />
        <div className="dashboard__pokemons">
          {pokemons.map((pokemon) => {
            return (
              <Pokecard
                key={pokemon.id}
                imgSrc={`${baseImageUrl}${pokemon.id}.svg`}
                name={pokemon.name}
                types={pokemon.types}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;

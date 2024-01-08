import { AutumnPlants } from "./Autumn/AutumnPlants";
import { SpringPlants } from "./Spring/SpringPlants";
import { WinterPlants } from "./Winter/WinterPlants";

export const Seasons = () => {
  return (
    <div id="seasons">
      <h2>Plantas de temporada</h2>
      <p>Aquí sabrás más sobre las mejores plantas para cada época del año</p>
      <SpringPlants />
      <AutumnPlants />
      <WinterPlants />
    </div>
  );
};

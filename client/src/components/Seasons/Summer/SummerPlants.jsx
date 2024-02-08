import { Link } from "react-router-dom";

export const SummerPlants = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();
  const startsSummer = currentMonth === 6 && currentDay === 21;

  const summerMsg = startsSummer ? "Hoy empieza el verano" : null;
  return (
    <div>
      <button>
        <Link to={"/seasons"}>Atrás</Link>
      </button>
      {summerMsg}
      <h2>Plantas de Verano</h2>
      <p>No hay contenido disponible por el momento.</p>
    </div>
  );
};

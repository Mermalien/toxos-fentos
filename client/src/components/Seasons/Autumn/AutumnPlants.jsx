import { Link } from "react-router-dom";

export const AutumnPlants = () => {
  // Comparamos la fecha actual con la que corresponde al otoño, en caso de que estemos en esta estación nos devuelve algo como ESTÁS EN LA TEMPORADA PERFECTA PARA TENER ESTAS PLANTAS
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();
  const startsAutumn = currentMonth === 9 && currentDay === 22;

  const autumnMsg = startsAutumn ? "Hoy empieza el otoño 🍂" : null;

  return (
    <>
      <button>
        <Link to={"/seasons"}>Atrás</Link>
      </button>
      <h1>{autumnMsg}</h1>
      <h2>Plantas de Otoño</h2>
      <p>No hay contenido disponible por el momento.</p>
    </>
  );
};

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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        odio est aut iusto! Optio error vel consectetur, itaque laborum maxime
        ducimus iure libero, porro necessitatibus architecto numquam! Nesciunt
        voluptatem non praesentium dolorum minima? Autem et dicta ea beatae,
        odit nihil molestiae a odio quos ducimus distinctio est, quis possimus
        deleniti!
      </p>
    </div>
  );
};

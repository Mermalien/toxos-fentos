export const WinterPlants = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const isWinter = currentMonth >= 1 && currentMonth < 3;
  const winterMsg = isWinter
    ? "ESTAMOS EN INVIERNO, ESTAS SON LAS PLANTAS DE TEMPORADA"
    : null;

  return (
    <>
      <h1>{winterMsg}</h1>
      <h2>Plantas de invierno</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        odio est aut iusto! Optio error vel consectetur, itaque laborum maxime
        ducimus iure libero, porro necessitatibus architecto numquam! Nesciunt
        voluptatem non praesentium dolorum minima? Autem et dicta ea beatae,
        odit nihil molestiae a odio quos ducimus distinctio est, quis possimus
        deleniti!
      </p>
    </>
  );
};

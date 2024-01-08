export const AutumnPlants = () => {
  // Comparamos la fecha actual con la que corresponde al otoño, en caso de que estemos en esta estación nos devuelve algo como ESTÁS EN LA TEMPORADA PERFECTA PARA TENER ESTAS PLANTAS
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const isAutumn = currentMonth >= 9 && currentMonth < 12;
  const autumnMsg = isAutumn ? "Estamos en otoño 🍂" : null;

  return (
    <>
      <h1>{autumnMsg}</h1>
    </>
  );
};

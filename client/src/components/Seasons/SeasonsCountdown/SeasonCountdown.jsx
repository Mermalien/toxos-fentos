import "./SeasonsCountdown.css";
import { useEffect, useState } from "react";
import { FcCalendar } from "react-icons/fc";

export const SeasonsCountdown = () => {
  // Definir el estado para almacenar los días restantes para cada estación
  const [openCount, setOpenCount] = useState(false);
  const [countdown, setCountdown] = useState({
    spring: 0,
    summer: 0,
    autumn: 0,
    winter: 0,
  });

  // Función para calcular los días restantes hasta el inicio de cada estación
  const calculateCountdown = () => {
    const now = new Date();
    const springStart = new Date(now.getFullYear(), 2, 20); // Equinoccio de primavera: 20 de marzo
    const summerStart = new Date(now.getFullYear(), 5, 21); // Solsticio de verano: 21 de junio
    const autumnStart = new Date(now.getFullYear(), 8, 23); // Equinoccio de otoño: 23 de septiembre
    const winterStart = new Date(now.getFullYear(), 11, 21); // Solsticio de invierno: 21 de diciembre

    // Calcular los días restantes para cada estación
    const daysUntilSpring = Math.round(
      (springStart - now) / (1000 * 60 * 60 * 24)
    );
    const daysUntilSummer = Math.round(
      (summerStart - now) / (1000 * 60 * 60 * 24)
    );
    const daysUntilAutumn = Math.round(
      (autumnStart - now) / (1000 * 60 * 60 * 24)
    );
    const daysUntilWinter = Math.round(
      (winterStart - now) / (1000 * 60 * 60 * 24)
    );

    // Actualizar el estado
    setCountdown({
      spring: daysUntilSpring,
      summer: daysUntilSummer,
      autumn: daysUntilAutumn,
      winter: daysUntilWinter,
    });
  };

  // Calcular el conteo al montar el componente
  useEffect(() => {
    calculateCountdown();
  }, []);

  const handleOpenCount = () => {
    setOpenCount(!openCount);
  };

  return (
    <div className="seasons-countdown">
      <button
        onClick={handleOpenCount}
        className={`openCount ${openCount} "open" : ""`}
      >
        <FcCalendar className="calendar-seasons-icon" />
      </button>
      {openCount && (
        <ul>
          <li> {countdown.spring} días para la primavera.</li>
          <li> {countdown.summer} días para el verano</li>
          <li> {countdown.autumn} días días para el otoño</li>
          <li> {countdown.winter} días para el invierno.</li>
        </ul>
      )}
    </div>
  );
};

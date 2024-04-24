import "./More.css";
import { useState } from "react";

export const Normas = () => {
  const [seeMore, setSeeMore] = useState(false);
  const handleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  const allRules = [
    {
      title: "Contenido centrado en plantas",
      description:
        "Todos los posts deben estar relacionados con el mundo de las plantas, ya sea información sobre cuidado, fotografías de plantas, jardinería, paisajismo, arte inspirado en plantas, etc. Pueden aparecer personas/animales en las fotos, pero recuerda que las plantas son las protagonistas aquí.",
    },
    {
      title: "Respeto hacia las plantas",
      description:
        "Se prohíbe cualquier contenido que promueva el daño o maltrato hacia las plantas, incluyendo la depredación irresponsable, la recolección ilegal o el vandalismo en entornos naturales.",
    },
    {
      title: "No contenido ofensivo",
      description:
        "Está prohibido publicar contenido que sea discriminatorio, racista, sexista, homofóbico o de cualquier otra manera ofensivo hacia individuos o grupos de personas.",
    },
    {
      title: "Derechos de autor",
      description:
        "Los usuarios deben respetar los derechos de autor y no publicar contenido que no sea de su propiedad sin el permiso adecuado.",
    },
    {
      title: "Veracidad de la información",
      description:
        "Se alienta a los usuarios a compartir información precisa y verificada sobre plantas, evitando la difusión de datos falsos o engañosos.",
    },
    {
      title: "Comportamiento respetuoso",
      description:
        "Se espera que los usuarios interactúen de manera respetuosa y constructiva con otros miembros de la comunidad, evitando insultos, discusiones agresivas o acoso.",
    },
    {
      title: "Privacidad",
      description:
        "Los usuarios deben respetar la privacidad de otros usuarios y abstenerse de compartir información personal sin consentimiento.",
    },
    {
      title: "Seguridad",
      description:
        "Está prohibido compartir información que pueda comprometer la seguridad de las personas, como ubicaciones exactas de plantas raras o vulnerables.",
    },
    {
      title: "Publicidad y spam",
      description:
        "Se prohíbe la publicación excesiva de contenido promocional o spam. Se permite la promoción ocasional de productos relacionados con plantas, siempre y cuando sea relevante y no invasiva.",
    },
    {
      title: "Cumplimiento de las leyes",
      description:
        "Los usuarios deben cumplir con todas las leyes y regulaciones locales, nacionales e internacionales aplicables.",
    },
    {
      title: "Moderación de contenido",
      description:
        "El equipo de moderación se reserva el derecho de eliminar cualquier contenido que infrinja estas normas, así como de tomar medidas disciplinarias contra los usuarios que violen repetidamente las reglas.",
    },
  ];

  return (
    <div className="normas" id="normas-de-uso">
      <h2>Normas de uso de la aplicación</h2>
      <p>
        Con el fin de crear y mantener un ambiente respetuoso hemos creado una
        serie de normas de convivencia para los usuarios de Toxos&Fentos, puedes
        leerlas aquí:{" "}
      </p>
      <button className="seeNormas" onClick={handleSeeMore}>
        {seeMore ? <p>Ocultar </p> : <p>Ver</p>}
      </button>
      {seeMore && (
        <ol>
          {allRules.map((item, index) => {
            return (
              <li key={index}>
                <strong>{item.title}</strong>: {item.description}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

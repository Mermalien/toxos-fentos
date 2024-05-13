import "./Social.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="social-media">
      <section className="description">
        <p>Gracias por visitar Toxos&Fentos!</p>
        <p>
          Mi nombre es <strong>Andrea</strong> y soy desarrolladora web. Mi
          pasión por las plantas me hizo crear este lugar para que cualquier
          persona que se sienta <strong>Señora De Las Plantas</strong> pueda
          venir aquí y compartir sobre sus plantitas con otros usuarios.
        </p>
        <p>
          No dudes en contactarme si tienes alguna sugerencia para mejorar
          Toxos&Fentos💚
        </p>
      </section>
      <div className="social-links">
        <section className="contact-link">
          <a
            href="https://github.com/Mermalien"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ fill: "#27ad6a" }} className="social-icon" />
          </a>
          <p>
            Si quieres echar un ojo a mis proyectitos visita mi perfil de
            GitHub.
          </p>
        </section>
        <section className="contact-link">
          <a
            href="https://www.linkedin.com/in/andrea-guisande-nieto"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn style={{ fill: "#27ad6a" }} className="social-icon" />
          </a>
          <p>
            Para ponerte en contacto conmigo puedes visitar mi perfil de
            LinkedIn y escribirme con total confianza.
          </p>
        </section>
      </div>
    </div>
  );
};

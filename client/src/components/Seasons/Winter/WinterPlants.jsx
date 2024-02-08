import "./Winter.css";
import PropTypes from "prop-types";
import cala from "../../../images/winter/cala.jpg";
import camelia from "../../../images/winter/camelia.jpg";
import cyclamen from "../../../images/winter/cyclamen.jpg";
import pensamiento from "../../../images/winter/pensamiento.jpg";
import snowdrop from "../../../images/winter/snowdrop.jpg";
import jasmine from "../../../images/winter/winter-jasmine.jpg";
import { Link } from "react-router-dom";

const winterFlowers = [
  {
    image: camelia,
    name: "Camelia (Camellia japonica)",
    description:
      "Con sus exuberantes flores en tonos de blanco, rosa y rojo, la camelia es una estrella invernal que añade un toque de elegancia a cualquier jardín.",
  },
  {
    image: cyclamen,
    name: " Cyclamen (Cyclamen persicum)",
    description:
      "Esta planta de temporada de invierno ofrece flores delicadas y hermosas en tonos de rosa, blanco y rojo. Sus hojas con forma de corazón también agregan un atractivo adicional. Cabe destacar el largo período de floración de la planta, puede llegar a durar más de 6 meses.",
  },
  {
    image: cala,
    name: "Cala (Zantedeschia aethiopica)",
    description:
      "La cala, planta perenne tropical, se distingue por sus espatas blancas y hojas en forma de flecha. Simboliza pureza y elegancia en muchas culturas, siendo popular en bodas y ceremonias. Resistente y versátil, crece en suelos húmedos, a la vera del río o parcialmente sumergida en agua, ideal para jardines acuáticos. Es importante tener precaución, ya que algunas variedades son tóxicas si se ingieren. La cala, con su belleza y simbolismo, continúa cautivando a jardineros y amantes de la naturaleza en todo el mundo.",
  },
  {
    image: pensamiento,
    name: "Pensamiento (Viola tricolor var. hortensis)",
    description:
      "Los pensamientos, como se les conoce comúnmente, son populares en la jardinería de invierno debido a su capacidad para resistir el frío y sus brillantes flores en una variedad de colores.",
  },
  {
    image: snowdrop,
    name: "Campanilla de Febrero (Galanthus)",
    description:
      "Los copos de nieve, como su nombre lo indica, emergen temprano en la temporada invernal, con delicadas flores blancas que anuncian la llegada de la primavera. Podemos encontrarla a la vera de ríos y zonas húmedas igual que la Cala.",
  },
  {
    image: jasmine,
    name: "Jazmín de invierno (Jasminum nudiflorum)",
    description:
      "Esta planta trepadora produce flores amarillas brillantes durante los meses de invierno, añadiendo un toque de calidez a los días más fríos.",
  },
];

export const WinterItem = ({ image, name, description }) => {
  return (
    <li className="winter-item">
      <h3>{name}</h3>
      <img src={image} alt={name} className="winter-image" />
      <p>{description}</p>
    </li>
  );
};

export const WinterPlants = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDay();

  const startsWinter = currentMonth === 12 && currentDay === 21;
  const winterMsg = startsWinter ? "Hoy empieza el invierno ❄" : null;

  return (
    <div className="winter-plants" id="winter">
      <button>
        <Link to={"/seasons"}>Atrás</Link>
      </button>
      <p className="winter-msg">{winterMsg}</p>
      <h2>Descubriendo la Belleza de las Plantas de Invierno</h2>
      <p>
        El invierno, a pesar de su reputación de estación gris y sombría, puede
        ser un momento de sorprendente belleza en el mundo de la jardinería.
        Mientras que muchas plantas se retiran a dormir durante los meses más
        fríos, otras florecen en todo su esplendor, añadiendo color y vitalidad
        a los jardines invernales. Aquí presentamos algunas de las joyas
        vegetales que brillan en esta temporada:
      </p>
      <div className="winter-plants-list">
        {winterFlowers.map((item, id) => {
          return (
            <ol key={id} className="season-plants-item">
              <WinterItem
                key={id}
                name={item.name}
                image={item.image}
                description={item.description}
              />
            </ol>
          );
        })}
      </div>
      <p>
        Estas son solo algunas de las muchas plantas que pueden iluminar y
        embellecer nuestros jardines durante los meses de invierno. Al elegir
        estas variedades resistentes y encantadoras, podemos disfrutar de un
        paisaje lleno de color y vida incluso en los días más fríos del año.
      </p>
    </div>
  );
};
WinterItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

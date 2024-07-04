import "./style/Homepage.scss";
import { Link } from "react-router-dom";
import img1 from "../assets/images/perso.png";
import img2 from "../assets/images/perso02.png";

function Homepage() {
  return (
    <div className="homepage-container">
      <img
        src={img1}
        alt="pixel art - personne sur un ordinateur"
        className="img-1-homepage"
      />
      <img
        src={img2}
        alt="pixel art - personne sur un ordinateur"
        className="img-2-homepage"
      />

      <div className="text-homepage">
        <p>
          Le label “EGAL-IT” récompense les entreprises exemplaires <br /> en
          terme d’
          <span className="color-yellow">inclusivité des femmes</span> dans le
          domaine de l’IT.{" "}
        </p>
        <br />
        <p>
          Vous souhaitez obtenir le label “EGAL-IT” ? Il vous suffit de répondre
          à notre quiz sur l'inclusivité de votre entreprise. En quelques
          questions, vous pourrez savoir où vous vous situez concernant cette
          thématique comparé à d'autres entreprises de l'IT.
        </p>
        <br />

        <p>
          Alors n'hésitez plus et cliquez sur commencer pour démarrer le quizz.
        </p>
      </div>
      <div className="button-homepage">
        <Link to="/quizz" className="link-homepage">
          Commencer
        </Link>
      </div>
    </div>
  );
}

export default Homepage;

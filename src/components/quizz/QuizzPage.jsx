import "./Quizz.scss";
import { Link } from "react-router-dom";

export default function QuizzPage() {
  return (
    <section className="quizz-page-container">
      <div className="question-reponse-container">
        <div className="index-container">Informations générales </div>
        <div className="one-question-container">
          <label htmlFor="entreprise-name">Nom de votre entreprise</label>
          <input type="text" id="entreprise-name" className="input-text" />
          <label htmlFor="entreprise-employees"> Nombre d'employé.e.s </label>
          <input
            type="number"
            id="entreprise-employees"
            className="input-number"
          />
          <div className="link-quizz">
            <Link to="/questions"> Démarrer le quizz &rsaquo; </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

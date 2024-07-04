import { useContext } from "react";
import { Link } from "react-router-dom";
import { DyslexicContext } from "../context/DyslexicContext";
import "./Header.scss";
import accessibilityLogo from "../assets/images/accessibility-logo.svg";

export default function Header() {
  const {
    messageDyslexic,
    dyslexic,
    handleMessageDyslexic,
    handleDyslexicChange,
  } = useContext(DyslexicContext);

  return (
    <section className="header-container">
      <Link to="/">
        <h1>EGAL-IT</h1>
      </Link>
      <div className="link-ressources">
        <Link to="/ressources">Ressources</Link>
      </div>
      <div className="dyslexique-container">
        {" "}
        <button
          type="button"
          onClick={handleMessageDyslexic}
          className="btn-dys"
        >
          <img src={accessibilityLogo} alt="Logo Accessibilité" />
        </button>
        {messageDyslexic && (
          <div className="dys-message">
            Mode dyslexique
            {dyslexic ? (
              <button type="button" onClick={handleDyslexicChange} id="btn-off">
                ON
              </button>
            ) : (
              <button type="button" onClick={handleDyslexicChange} id="btn-on">
                OFF
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

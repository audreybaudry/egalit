import "./style/Results.scss";
import tick from "../assets/images/green-tick.png";
import redcross from "../assets/images/red-cross.png";

function Results() {
  const results = [
    {
      index: 1,
      title: "La présence des femmes",
      tick,
      diagram:
        "https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/8207db15624fe1548440d206c780fe8f.jpg",
    },
    {
      index: 2,
      title: "Le salaire des femmes",
      tick: redcross,
      diagram:
        "https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/8207db15624fe1548440d206c780fe8f.jpg",
    },
    {
      index: 3,
      title: "Le salaire des femmes",
      tick: redcross,
      diagram:
        "https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/8207db15624fe1548440d206c780fe8f.jpg",
    },
    {
      index: 4,
      title: "Le salaire des femmes",
      tick: redcross,
      diagram:
        "https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/8207db15624fe1548440d206c780fe8f.jpg",
    },
    {
      index: 5,
      title: "Le salaire des femmes",
      tick,
      diagram:
        "https://media.nouvelobs.com/ext/uri/sreferentiel.nouvelobs.com/file/rue89/8207db15624fe1548440d206c780fe8f.jpg",
    },
  ];

  return (
    <div>
      <h2 className="title-results">PROFIL DE VOTRE ENTREPRISE</h2>
      <div className="results-container">
        {results.map((result) => (
          <div className="text-results" key={result.title}>
            <div className="titles-text-results">
              <div className="number-title">
                <h3>{result.index}</h3>
              </div>
              <h3>{result.title}</h3>
              <img
                className="tick"
                alt="coche verte ou croix rouge"
                src={result.tick}
              />
            </div>
            <div className="img-diagram">
              <img
                className="diagram"
                alt="diagramme représentant les résultats"
                src={result.diagram}
              />
            </div>
            <div className="entreprise">
              <h3 className="entreprise-results">VOTRE ENTREPRISE</h3>
              <p className="text">
                Vous vous situez dans les 20% des entreprises les plus
                inclusives. Bravo à vous, vous avez un taux de présence de
                femmes dans votre entreprise qui respecte le label EGAL-IT. Vous
                vous situez dans les 20% des entreprises les plus inclusives.
                Bravo à vous, vous avez un taux de présence de femmes dans votre
                entreprise qui respecte le label EGAL-IT. Vous vous situez dans
                les 20% des entreprises les plus inclusives. Bravo à vous, vous
                avez un taux de présence de femmes dans votre entreprise qui
                respecte le label EGAL-IT.
              </p>
            </div>
          </div>
        ))}
        <div className="global-results">
          <h3 className="global-results-title">RÉSULTATS FINAUX</h3>
          <div className="global-results-entreprise">
            <div className="img-results">
              <img
                className="quality-entreprise"
                alt="carré représentant les qualités de l'entreprise"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/220px-Square_-_black_simple.svg.png"
              />
            </div>
            <div className="entreprise-qualities">
              <h3 className="entreprise-results">VOTRE ENTREPRISE</h3>
              <h4>Vous êtes dans la catégorie des inclusifs</h4>
              <p className="text-global-results">
                Vous vous situez dans les 20% des entreprises les moins
                inclusives. Vous vous situez dans les 20% des entreprises les
                moins inclusives. Vous vous situez dans les 20% des entreprises
                les moins inclusives. Vous vous situez dans les 20% des
                entreprises les moins inclusives. Vous vous situez dans les 20%
                des entreprises les moins inclusives. Vous vous situez dans les
                20% des entreprises les moins inclusives. Vous vous situez dans
                les 20% des entreprises les moins inclusives. Vous vous situez
                dans les 20% des entreprises les moins inclusives.
              </p>
            </div>
          </div>
          <div className="result-final">
            <h4 className="result-final-title">
              Vous êtes éligibles à notre rang platine
            </h4>
            <img
              alt="gif selon les résultats"
              className="gif"
              src="https://media1.tenor.com/m/N-wmAOcdlVMAAAAC/rhobh-not-cool.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;

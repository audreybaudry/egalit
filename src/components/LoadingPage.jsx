import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingPage.scss";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/resultats");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="loading-page">
      Veuillez patienter, vos résultats sont analysés par nos meilleur.e.s
      data-scientists{" "}
      <img
        src="https://media1.giphy.com/media/jhCIr6K4jXp1YLJDik/giphy.gif?cid=6c09b952ox2jnbqf4ro4cey92ayi4yuthzdye01dvpxh5gx5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
        alt="loading animation"
      />
    </section>
  );
}

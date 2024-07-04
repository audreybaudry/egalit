import "./Questions.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();

  const [questionIndex, setquestionIndex] = useState(0);

  const tick1Value = option.tick.value;
  const questions = [
    {
      id: 1,
      question: "Quel est le pourcentage de femmes dans votre entreprise ?",
      options: [
        {
          type: "radio",
          id: "less-5",
          name: "female-employees-1",
          option: "5% et moins",
          tick: 0,
        },
        {
          type: "radio",
          id: "5-16",
          name: "female-employees-1",
          option: "5% à 16%",
          tick: 0,
        },
        {
          type: "radio",
          id: "16-30",
          name: "female-employees-1",
          option: "16% à 30%",
          tick: 1,
        },
        {
          type: "radio",
          id: "30+",
          name: "female-employees-1",
          option: "30% ou plus",
          tick: 1,
        },
      ],
    },
    {
      id: 2,
      question:
        "Quel est le pourcentage de femmes dans votre équipe de direction ?",
      options: [
        {
          type: "radio",
          id: "less-10-2",
          name: "female-employees-2",
          option: "10% et moins",
        },
        {
          type: "radio",
          id: "10-20-2",
          name: "female-employees-2",
          option: "10% à 20%",
        },
        {
          type: "radio",
          id: "20-30-2",
          name: "female-employees-2",
          option: "20% à 30%",
        },
        {
          type: "radio",
          id: "30+-2",
          name: "female-employees-2",
          option: "30% ou plus",
        },
      ],
    },
    {
      id: 3,
      question: "Quel est le salaire moyen des femmes dans votre entreprise ?",
      options: [
        {
          type: "radio",
          id: "less-30k",
          name: "salary-1",
          option: "moins de 30K",
        },
        {
          type: "radio",
          id: "30k-40k",
          name: "salary-1",
          option: "de 30K à 40K",
        },
        {
          type: "radio",
          id: "40k-50k",
          name: "salary-1",
          option: "de 40K à 50K",
        },
        {
          type: "radio",
          id: "50k+",
          name: "salary-1",
          option: "plus de 50K",
        },
      ],
    },
  ];

  const currentQuestion = questions[questionIndex];

  const handleClick = () => {
    if (questionIndex < questions.length - 1) {
      setquestionIndex(questionIndex + 1);
    } else navigate("/loading");
  };

  return (
    <div className="questions-container">
      <div className="question-reponse-container">
        <div className="questions">
          <div className="index-container">
            {questionIndex + 1}/{questions.length}
          </div>
          <div className="one-question-container">
            {currentQuestion.question}
            <div>
              {currentQuestion.options.map((option) => (
                <div key={option.id}>
                  <input
                    type={option.type}
                    id={option.id}
                    name={option.name}
                    value={option.option}
                  />
                  <label htmlFor={option.id}>{option.option}</label>
                </div>
              ))}
            </div>
            <button
              type="button"
              id="button-real-question"
              onClick={handleClick}
            >
              Continuer &rsaquo;{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;

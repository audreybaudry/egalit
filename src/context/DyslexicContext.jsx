import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
export const DyslexicContext = createContext(null);

export default function DyslexicContextProvider({ children }) {
  const [messageDyslexic, setMessageDyslexic] = useState(false);
  const [dyslexic, setDyslexic] = useState(false);

  function handleMessageDyslexic() {
    setMessageDyslexic(!messageDyslexic);
  }

  function handleDyslexicChange() {
    setDyslexic((prevDyslexic) => {
      const newDyslexic = !prevDyslexic;
      if (newDyslexic) {
        document.body.classList.add("dyslexic-font");
      } else {
        document.body.classList.remove("dyslexic-font");
      }
      return newDyslexic;
    });
  }

  useEffect(() => {
    if (dyslexic) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
  }, [dyslexic]);

  const [dataFemale, setDataFemale] = useState([]);
  const [dataMale, setDataMale] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const fetchData = async () => {
    const result = await axios("http://127.0.0.1:5000/question/1");
    const data = result.data;
    console.log(data.Female);
    setDataFemale(data.Female);
    setDataMale(data.Male);
    setDataAll(data);

    // console.log("ici le genre" + dataGender);
  };
  useEffect(() => {
    fetchData();
    console.log(dataAll);
  }, []);

  const [truc, setTruc] = useState();
  const fetchDataQuestion2 = async () => {
    const result = await axios("http://127.0.0.1:5000/question/2");

    const dataQuestion2 = result.data;
    setTruc(dataQuestion2);
    console.log(dataQuestion2);

    // console.log("ici le genre" + dataGender);
  };
  useEffect(() => {
    fetchDataQuestion2();
    console.log(`ici c'est ${truc}`);
  }, []);

  const [tick1, setTick1] = useState();

  const contextValue = useMemo(
    () => ({
      dataFemale,
      setDataFemale,
      dataMale,
      setDataMale,
      dataAll,
      setDataAll,
      messageDyslexic,
      setMessageDyslexic,
      dyslexic,
      setDyslexic,
      handleMessageDyslexic,
      handleDyslexicChange,
    }),
    [
      dataFemale,
      setDataFemale,
      dataMale,
      setDataMale,
      dataAll,
      setDataAll,
      messageDyslexic,
      setMessageDyslexic,
      dyslexic,
      setDyslexic,
      handleMessageDyslexic,
      handleDyslexicChange,
    ]
  );

  return (
    <DyslexicContext.Provider value={contextValue}>
      {children}
    </DyslexicContext.Provider>
  );
}
DyslexicContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

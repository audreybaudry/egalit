import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

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

  const contextValue = useMemo(
    () => ({
      messageDyslexic,
      setMessageDyslexic,
      dyslexic,
      setDyslexic,
      handleMessageDyslexic,
      handleDyslexicChange,
    }),
    [messageDyslexic, dyslexic]
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

import React, { createContext, useState, useEffect } from "react";
const Context = createContext();

function Provider({ children }) {
  const [info, setInfo] = useState([]);

  const [totally, setTotally] = useState(
    JSON.parse(window.localStorage.getItem("buy")) || []
  );
  const [total, setTotal] = useState(0);

  const [liked, setLiked] = useState(
    JSON.parse(window.localStorage.getItem("like")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("buy", JSON.stringify(totally));
  }, [totally]);

  return (
    <Context.Provider
      value={{
        totally,
        setTotally,
        setTotal,
        total,
        liked,
        setLiked,
        info,
        setInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };

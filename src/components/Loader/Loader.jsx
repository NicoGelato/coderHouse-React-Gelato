import { useEffect, useState } from "react";

const Loader = () => {
  const [tardoMucho, setTardoMucho] = useState(false);

  useEffect(() => {
    const esperar = setTimeout(() => {
      setTardoMucho(true);
    }, 30000);
    return () => {
      clearTimeout(esperar);
    };
  }, []);

  return (
    <div className="bg-dark p-2 pt-3 opacity-75">
      {tardoMucho ? (
        <>
          <h1 className="text-center text-white h3">
            ☠️ No se pudieron cargar los productos, por favor intente más tarde
            ☠️
          </h1>
        </>
      ) : (
        <>
          <h1 className="text-center text-white h3">☠️ Cargando ... ☠️</h1>
          <div className="d-flex justify-content-center m-5">
            <div
              className="spinner-border text-light mx-1"
              role="status"
            >
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;

import { useEffect, useState } from "react";

const Loader = () => {
  const [tardoMucho, setTardoMucho] = useState(false);

  useEffect(() => {
    const esperarTreintaSeg = setTimeout(() => {
      setTardoMucho(true);
    }, 10000);
    return () => {
      clearTimeout(esperarTreintaSeg);
    };
  }, []);

  return (
    <div className="m-5 opacity-75 text-center">
      {tardoMucho ? (
        <h1 className="d-inline-block text-center text-white bg-dark bg-opacity-75 h3 p-5">
          ☠️ No se pudieron cargar los productos, por favor intente más tarde ☠️
        </h1>
      ) : (
        <>
          <h1 className="text-center text-white h3">☠️ Cargando ... ☠️</h1>
          <div className="d-flex justify-content-center m-5">
            {[...Array.from({ length: 3 }, (v, i) => i)].map((e) => (
              <div
                className="spinner-grow spinner-grow-sm text-light mx-1"
                role="status"
                key={e}
              >
                <span className="visually-hidden">Cargando...</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Loader;

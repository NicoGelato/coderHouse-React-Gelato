import { useEffect, useState } from "react";

const Loader = () => {
/*
  const [state, setState] = useState(false)

  useEffect(() => {
    setTime
    return () => {
      setTime.cancel()
    }
  }, [])
*/


  return (


      
      
    <div className="bg-dark p-2 pt-3 opacity-75">
      <h1 className="text-center text-white h3">☠️ Cargando ... ☠️</h1>
      <div className="d-flex justify-content-center m-5">
        <div
          className="spinner-border spinner-grow-sm text-light mx-1"
          role="status"
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
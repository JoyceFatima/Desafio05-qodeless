import "./Contador.css";
import React, { useState } from "react";

const Contador = () => {
  const [num, setNum] = useState(0);

  const incNum100 = () => {
    setNum(num + 100);
  };

  const incNum10 = () => {
    setNum(num + 10);
  };

  const incNum1 = () => {
    setNum(num + 1);
  };

  const resetNum = () => {
    setNum(0)
  };

  const decNum1 = () => {
    setNum(num - 1);
  };

  const decNum10 = () => {
    setNum(num - 10);
  };

  const decNum100 = () => {
    setNum(num - 100);
  };


  return (
    <>
      <heander>
        <section className="header">
          <div className="logo">
            <a href="#/">Contador</a>
          </div>
          <div className="buttons">
            <button onClick={resetNum}>Reiniciar</button>
          </div>
        </section>
      </heander>
      <main>
        <section className="main">
            <div className="num">
              <h1>{num}</h1>
            </div>
          <div className="entrada_de_dados">
            <button onClick={decNum100}>-100</button>
            <button onClick={decNum10}>-10</button>
            <button onClick={decNum1}>-1</button>
            <p> | </p>
            <button onClick={incNum1}>+1</button>
            <button onClick={incNum10}>+10</button>
            <button onClick={incNum100}>+100</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contador;

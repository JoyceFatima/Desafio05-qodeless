import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <heander>
      <section className="header">
        <div className="logo">
          <a href="#/">
            Contador
          </a>
        </div>
        <div className="buttons">
          <button>Reiniciar</button>
        </div>
      </section>
    </heander>
  );
}

export default Header;

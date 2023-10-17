import Card from "../Card/card";

import "./header.css";

const Header = () => (
  <div className="header-container">
    <div className="header">
      <h1 className="heading">
        {" "}
        Hello Chaitanya <i className="fas fa-hand icon"></i>{" "}
      </h1>
      <input type="text" placeholder="search" className="input" />
    </div>
    <Card />
  </div>
);

export default Header;

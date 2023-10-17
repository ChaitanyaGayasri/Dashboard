import Overview from "../Overview/overview";

import "./card.css";

const Card = () => (
  <div>
    <div className="card-container">
      <div className="card-item">
        <div className="card-display">
          <button className="button">Circle</button>
          <div className="order">
            <h1>Orders </h1>
            <p className="para">#2.4K</p>
            <p className="par-2">
              <span className="span">2% </span> this month{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="card-item">
        <div className="card-display">
          <button className="button">Circle</button>
          <div className="order">
            <h1>Orders </h1>
            <p className="para">#2.4K</p>
            <p className="par-2">
              <span className="span">2% </span> this month{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="card-item">
        <div className="card-display">
          <button className="button">Circle</button>
          <div className="order">
            <h1>Orders </h1>
            <p className="para">#2.4K</p>
            <p className="par-2">
              <span className="span">2% </span> this month{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="card-item">
        <div className="card-display">
          <button className="button">Circle</button>
          <div className="order">
            <h1>Orders </h1>
            <p className="para">#2.4K</p>
            <p className="par-2">
              <span className="span">2% </span> this month{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Overview />
  </div>
);

export default Card;

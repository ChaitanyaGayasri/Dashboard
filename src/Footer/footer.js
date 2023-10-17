import Overview from "../Overview/overview";
import "./footer.css";

const Footer = () => (
  <div className="footer-container">
    <div className="product-sell">
      <h1 className="main-heading">Product Sell</h1>
      <input type="text" placeholder="search" className="input" />
      <button className="button-1">
        Queterly<i className="fas fa-arrow-down symbol"></i>
      </button>
    </div>
    <div className="sale">
      <h1>Product Name</h1>
      <p>Stock</p>
      <p>Price</p>
      <p>Total Sales</p>
    </div>
    <div className="product-name">
      <img
        className="dell"
        alt="dell"
        src="http://wallpapercave.com/wp/KURdLhg.jpg"
      />
      <div>
        <h1>Abstruct 3D</h1>
        <p>This is the graphic card 3d Vision</p>
      </div>
      <p>32 In Stock</p>
      <p>$ 45.99</p>
      <p>20</p>
    </div>
  </div>
);

export default Footer;

import Footer from "../Footer/footer";
import "./overview.css";

const Overview = () => (
  <div>
    <div className="overview-container">
      <div className="card">
        <div className="overview">
          <h1 className="overview-heading">Overview</h1>
          <button className="button-1">
            Queterly<i className="fas fa-arrow-down symbol"></i>
          </button>
        </div>
        <h1 className="Monthly-head"> Monthly Earning</h1>
        <div className="box-container">
          <div>
            <button className="button-2"></button>
            <h1 className="months">January</h1>
          </div>
          <div>
            <button className="button-4"></button>
            <h1 className="months">February</h1>
          </div>
          <div>
            <button className="button-2"></button>
            <h1 className="months">March</h1>
          </div>
          <div>
            <button className="button-2"></button>
            <h1 className="months">April</h1>
          </div>
          <div>
            <button className="button-3"></button>
            <h1 className="months">May</h1>
          </div>
          <div>
            <button className="button-2"></button>
            <h1 className="months">June</h1>
          </div>
          <div>
            <button className="button-2"></button>
            <h1 className="months">July</h1>
          </div>
          <div>
            <button className="button-2"></button>
            <h1 className="months">August</h1>
          </div>
        </div>
      </div>
      <div className="card-1">
        <h1 className="customer">September</h1>
        <p className="desc">Customers that buy products</p>
        <div className="product-box">
          <button className="product-button">Product</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Overview;

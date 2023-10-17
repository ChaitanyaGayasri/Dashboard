import Header from "../Header/header";

import "./sidenavbar.css";

const SideNavBar = () => (
  <div className="App">
    <div class="cover">
      <div class="sidebar">
        <div>
          <div className="side-bar">
            <img
              className="dash"
              alt="dash"
              src="https://img.freepik.com/premium-vector/webpage-statistics-line-illustration_120816-2386.jpg?w=740"
            />
            <h1 className="head">Dashboard</h1>
          </div>
          <div className="sidebar-item selected">
            <i className="fas fa-home icon"></i>
            <p className="icon-name">Home</p>
            <i className="fas fa-arrow-right icon-2"></i>
          </div>
          <div className="sidebar-item selected">
            <i className="fas fa-download icon"></i>
            <p className="icon-name">Downloads</p>
            <i className="fas fa-arrow-right icon-2"></i>
          </div>
          <div className="sidebar-item selected">
            <i className="far fa-star icon"></i>
            <p className="icon-name">Favorites</p>
            <i className="fas fa-arrow-right icon-2"></i>
          </div>

          <div className="sidebar-item selected">
            <i className="fas fa-cog icon"></i>
            <p className="icon-name">Settings</p>
            <i className="fas fa-arrow-right icon-2"></i>
          </div>
          <div className="sidebar-item selected">
            <i className="fas fa-save icon"></i>
            <p className="icon-name">Help</p>
            <i className="fas fa-arrow-right icon-2"></i>
          </div>
          <div className="sidebar-item  selected">
            <i className="fas fa-phone icon"></i>
            <p className="icon-name">Contact</p>
            <i className="fas fa-arrow-right icon-2"></i>
          </div>
        </div>
        <div className="sidebar-item  selected">
          <img
            src="https://assets.ccbp.in/frontend/intermediate-rwd/user-profile-img.png"
            className="profile-pic"
          />
          <p className="icon-name">Deepthi Sunaina</p>
          <i className="fas fa-arrow-down icon-2"></i>
        </div>
      </div>
      <Header />
    </div>
  </div>
);

export default SideNavBar;

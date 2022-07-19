import "./Header.css";
import image from "../../assets/th_red.png";
function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#FFADBE" }}
    >
      <div class="container-fluid">
        <img src={image} alt="logo" width={50}></img>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a class="nav-link active" href="#">
              pricing
            </a>
            <a class="nav-link active" href="#">
              About Us
            </a>
            <a class="nav-link active" href="#">
              register
            </a>
            <a class="nav-link active ">log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import './App.css';
import logo from "./assets/img/logo1.png";
import Apple from "./assets/img/Appr.png";
import Gplay from "./assets/img/playr.png";
import Pay from "./assets/img/payr.png";
import imgReflexion from "./assets/img/imgReflexion1.png"; // Importez l'image imgReflexion

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      const windowHeight = window.innerHeight;
      const footerPosition = footer.getBoundingClientRect().top;

      if (footerPosition <= windowHeight) {
        setShowPopup(false);
      } else {
        setShowPopup(true);
      }

      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <section id="header">
        <a href="#">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="Login.html">Log in</a>
            </li>
            <li>
              <a href="signup.html">Sign up</a>
            </li>

            <li id="lg-bag">
              <a href="cart.html">
                <i className="far fa-shopping-bag"></i>
              </a>
            </li>
            <a href="#" id="close">
              <i className="far fa-times"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <i className="far fa-shopping-bag"></i>
          </a>
          <i id="bar" className="fas fa-outdent"></i>
        </div>
      </section>

      {showPopup ? (
        <section id="hero">
          <div className="popup">
            <i className="fas fa-heart"></i>
            <h4>Planifiez votre journée,</h4>
            <h2> savourez votre vie.</h2>
            <h1>Votre assistant culinaire quotidien à portée de main.</h1>
            <p>Des repas sains pour une vie saine.</p>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </section>
      ) : (
        <section id="hero" className="center-image">
          <img src={imgReflexion} alt="Reflexion" />
        </section>
      )}

      <footer className="section-p1">
      <div className="footer-content">
          <div className="color">
            <img src={logo} className="logo" alt="" />
            <h4>Contact</h4>
            <p><strong>Address:</strong> Lorem ipsum dolor sit amet.</p>
            <p><strong>Phone:</strong> 001122334455</p>
            <p><strong>Hours:</strong> 10:00 - 18:00</p>
            <div className="follow">
              <h4>Follow us</h4>
              <div className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="color">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="color">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
          </div>
          <div className="color install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
              <img src={Apple} className="logo" alt="Apple" />
              <img src={Gplay} className="logo" alt="Google Play" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src={Pay} alt="" width="350" height="250" />
          </div>
        </div>
        <div className="copyright">
          <p>© 2023, DohMV Tech HTML CSS Ecommerce Template</p>
        </div>
      </footer>
    </>
  );
}

export default App;

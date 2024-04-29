import React from 'react';
import './components/styles.css';
// import './App.css'

function App() {
  return (
      <>
          <nav>
              <ul>
                  <li><a href="index.html">HOME</a></li>
                  <li><a href="login.html">LOGIN</a></li>
                  <li><a href="register.html">REGISTER HERE</a></li>
                  <li><a href="contact.html">CONTACT US</a></li>
                  <li>
                      <a href="#">FLAVORS</a>
                      <ul className="dropdown">
                          <li><a href="#">Red Lips</a></li>
                          <li><a href="#">Blue Lips</a></li>
                          <li><a href="#">Watermelon</a></li>
                          <li><a href="#">Vanilla</a></li>
                          <li><a href="#">Grape</a></li>
                          <li><a href="#">Coconut</a></li>
                          <li><a href="#">Orange</a></li>
                          <li><a href="#">Pineapple</a></li>
                          <li><a href="#">Cherry</a></li>
                          <li><a href="#">Peach</a></li>
                          <li><a href="#">Mango</a></li>
                          <li><a href="#">Strawberry</a></li>
                          <li><a href="#">Blue Raspberry</a></li>
                          <li><a href="#">Banana</a></li>
                          <li><a href="#">Fruit Punch</a></li>
                          <li><a href="#">Root Beer</a></li>
                          <li><a href="#">Bubble Gum</a></li>
                          <li><a href="#">Blueberry</a></li>
                      </ul>
                  </li>
                  <li>
                      <a href="#">TOPPINGS</a>
                      <ul className="dropdown">
                          <li><a href="#">Sprinkles</a></li>
                          <li><a href="#">Marshmallow Sauce</a></li>
                          <li><a href="#">Sour Spray</a></li>
                          <li><a href="#">Nerds</a></li>
                          <li><a href="#">Gummies</a></li>
                          <li><a href="#">Fruit Mix</a></li>
                          <li><a href="#">M&M'S</a></li>
                          <li><a href="#">Candy</a></li>
                      </ul>
                  </li>
              </ul>
          </nav>

          <h2>This is the snoooooooo cone spot BA-BEEEEEEE!!</h2>
          <p>Come get a cone before they are gone. LOL</p>

          <footer>
              &#169; 2021 Deez Cold Ones LLC. All rights reserved.
          </footer>
      </>
  );
}

export default App;
import React from "react";

function App() {
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="container">
          Shopping
          <ul className="right">
            <li> My Cart </li>
          </ul>
        </div>
      </nav>
      <div>
        <span>Image: Image 1</span>
        <span>Name: Product 1</span>
        <span>Description: Blablabla 1</span>
        <span>Icon Add Cart 1 </span>
      </div>
      <div>
        <span>Image: Image 2</span>
        <span>Name: Product 2</span>
        <span>Description: Blablabla 2</span>
        <span>Icon Add Cart 2 </span>
      </div>
    </div>
  );
}

export default App;

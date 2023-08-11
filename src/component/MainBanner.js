import React from "react";
import { Link } from "react-router-dom";

function MainBanner() {
  return (
    <section className="Mainbanner inner">
      <div className="imgCon">
        <img src="./img/main.png"></img>
        <div className="imgText">
          <h2>Gold big hoops</h2>
          <p>$ 68.00</p>
          <Link to="/Shop">View Product</Link>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;

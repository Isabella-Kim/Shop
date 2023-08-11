import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  //.gnb a에 마우스 올리면 on 클래스 추가

  return (
    <header className="inner header">
      <Link to="/" className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
      </Link>
      <nav>
        <div className="gnb">
          <Link to="/Shop">Shop</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/OurStory">Our Story</Link>
        </div>
        <div className="icon">
          <Link to="/Shop">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </Link>
          <Link to="/Shop">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </Link>
          <Link to="/Shop">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

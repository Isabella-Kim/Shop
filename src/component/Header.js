import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  // let bar = urlname === "/" ? "" : "bar";
  // //.gnb a 클릭하면 클릭한 요소만 on 클래스 추가
  // //모든 클래스 제거
  // document.querySelectorAll(".gnb a").forEach((item) => {
  //   item.classList.remove("on");
  //   //현재 요소의 href속성이 urlname과 같으면
  //   if (item.getAttribute("href") == urlname) {
  //     //클래스 추가
  //     item.classList.add("on");
  //   }
  // });
  let bar = props.urlName;
  let gnbA = document.querySelectorAll(".gnb a");
  gnbA.forEach((item) => {
    item.classList.remove("on");
    if (item.getAttribute("href") == bar) {
      item.classList.add("on");
    }
  });
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

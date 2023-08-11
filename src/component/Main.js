import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MainList from "./MainList.js";
import MainBanner from "./MainBanner";
import axios from "axios";

const Main = ({ data }) => {
  // useNavigate : 단순히 페이지 이동기능 <-> link는 a태그로 기능하므로 css로 수정
  // <button onClick={() => navigate("/경로")}></button>
  let navigate = useNavigate();
  return (
    <>
      <section className="Main">
        <MainBanner />
        <MainList data={data} />
      </section>
    </>
  );
};

export default Main;

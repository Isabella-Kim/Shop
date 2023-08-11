import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Detail = ({ data }) => {
  let id = useParams;
  let item = data[id - 1];
  return (
    <section className="Detail inner">
      <div className="DetailCon">
        <div className="imgCon">
          <img src={`${process.env.PUBLIC_URL}/img/image1.jpg`} alt="" />
        </div>
        <div className="DetailText">
          <h2>이름</h2>
          <h2>가격</h2>
        </div>
      </div>
      <div className="DetailTabs">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab 01 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus quo blanditiis adipisci dolore aperiam ratione aliquam
            soluta voluptatibus cupiditate. Reiciendis enim quo blanditiis ea
            pariatur corporis, impedit molestiae necessitatibus. Eum.
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab 02
          </Tab>
          <Tab eventKey="contact" title="Contact">
            Tab 03
          </Tab>
          <Tab eventKey="tab4" title="tab4">
            Tab 04
          </Tab>
        </Tabs>
      </div>
      <div className="Swiper">
        <h1>Similar Items</h1>
        <div>슬라이드</div>
      </div>
    </section>
  );
};

export default Detail;

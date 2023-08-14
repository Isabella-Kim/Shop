import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ListCard from "./ListCard.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Detail = ({ data }) => {
  let id = useParams;
  let item = data[id - 1];
  //swiper에 사용할 dataList
  //category 항목을 가지고있는 모든 data들을 가져옴
  let dataList = data.filter((a) => a.category == item.category);
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
      <div className="DetailTabs"></div>
      <div className="Swiper">
        <h1>Similar Items</h1>
        <div>
          <Swiper spaceBetween={50} slidesPerView={3}>
            {dataList.map((item) => {
              return (
                <SwiperSlide key={item._id}>
                  <ListCard item={item}></ListCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Detail;

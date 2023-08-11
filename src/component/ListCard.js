import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ item }) => {
  return (
    <>
      <div className="imgCon">
        <p className="discount">{item.discount}%</p>
        <img src={`${process.env.PUBLIC_URL}/img/${item.img}`}></img>
        <p className="imgLabel">장바구니에 담기</p>
      </div>
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </>
  );
};
export default ListCard;

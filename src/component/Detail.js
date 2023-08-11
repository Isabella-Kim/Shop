import React from "react";
import { useState } from "react";

const Detail = (item) => {
  //let { item } = data[id];
  return (
    <section>
      <img src="" alt="" />
      <p>{item.title}</p>
      <p>{item.price}원</p>
    </section>
  );
};

export default Detail;

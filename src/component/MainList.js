import React from "react";
import { Link } from "react-router-dom";
import ListCard from "./ListCard.js";
const MainList = ({ data }) => {
  let dataList = data.filter((item) => item.category == "new");
  return (
    <>
      <div className="headline">
        <h3>인기상품</h3>
        <Link to="/">상품더보기</Link>
      </div>
      <section className="MainList inner">
        <ul className="listCon">
          {dataList.map((item) => {
            return (
              <li className="list" key={item._id}>
                <ListCard item={item}></ListCard>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default MainList;

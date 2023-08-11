import React from "react";
import { useState } from "react";
import ListCard from "./ListCard";

function AllList({ data }) {
  let [dataList, setDataList] = useState(data);
  return (
    <section className="AllList">
      <ul className="snb">
        <li
          onClick={() => {
            setDataList(data);
          }}
        >
          등록순
        </li>
        <li
          onClick={() => {
            const sortData = [...dataList].sort((a, b) => a.price - b.price);
            setDataList(sortData);
          }}
        >
          낮은가격순
        </li>
        <li
          onClick={() => {
            const sortData = [...dataList].sort((a, b) => b.price - a.price);
            setDataList(sortData);
          }}
        >
          높은 가격순
        </li>
        <li
          onClick={() => {
            const sortData = [...dataList].sort(
              (a, b) => b.discount - a.discount
            );
            setDataList(sortData);
          }}
        >
          높은 할인율
        </li>
      </ul>
      <div className="MainList">
        <ul className="listCon">
          {dataList.map((item) => {
            return (
              <li className="list" key={item._id}>
                <ListCard item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default AllList;

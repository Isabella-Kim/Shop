import React from "react";
import AllList from "./AllList";

function Shop({ data }) {
  return (
    <section className="Shop inner">
      <h1>Shop The Latest</h1>
      <AllList data={data} />
    </section>
  );
}

export default Shop;

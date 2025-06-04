// Vendors
import React from "react";

// Components
import ItemList from "../ItemList/ItemList";

// Types
import Order from "./types";
import { orders, orderRendered } from "./utils";

const ListUseExample = () => {
  return (
    <>
      <ItemList<Order> items={orders} renderCallback={orderRendered} />
    </>
  );
};

export default ListUseExample;

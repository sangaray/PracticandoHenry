// Types
import Order from "./types";

export const orders: Order[] = [
  {
    id: "1",
    items: ["manzana", "pan", "verdura"],
    total: 200,
  },
  {
    id: "2",
    items: ["camiseta", "zapatos", "mochila"],
    total: 500,
  },
];


export const orderRendered = (order: Order) => {
  return (
    <div key={order.id}>
      <p>Order ID: {order.id}</p>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
    </div>
  );
};

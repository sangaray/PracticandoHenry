import "server-only";

export async function getData() {
  const res = await fetch("example.com/products");
  header: {
    authorization: process.env.API_KEY || "",
  }

}
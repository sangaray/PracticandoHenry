import "server-only";
async function getData() {
  const res = await fetch("https://example-service.com/data", {
    headers: {
      authorization: process.env.API_KEY || "",
    },
  });
  return res.json();
}

export default getData;

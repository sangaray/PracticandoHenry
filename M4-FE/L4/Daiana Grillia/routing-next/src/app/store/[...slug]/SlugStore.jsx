const fetchDataStore = async ({ slug }) => {
  // o params como parametro
  const [category, subcategory] = slug; // o params.slug;
  const data = await fetch(
    `https://api.tienda.com/products?category=${category}&subcategory=${subcategory}`
  );

  const items = await data.json();
  return items;
};

const SlugStore = async ({ params }) => {
  // {slug:  ["category", "subcategory"]}
  const itemsToRender = await fetchDataStore(params);
  return (
    <div>
      {itemsToRender.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SlugStore;

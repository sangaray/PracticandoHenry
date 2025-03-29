import { useFetch } from "../../hooks/useFetch";

const LazyDataLoader = () => {
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LazyDataLoader;

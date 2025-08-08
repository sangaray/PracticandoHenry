import { ClientComponent } from "./components/ClientComponent";
import ServerCompontent from "./components/ServerComponent";

export default function Home() {
  return (
    <div>
      {/* <p>{data}</p> */}
      <p>Home Page</p>
      <ClientComponent>
        <ServerCompontent />
      </ClientComponent>
    </div>
  );
}


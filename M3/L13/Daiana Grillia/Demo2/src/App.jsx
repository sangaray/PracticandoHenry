import Navbar from "./components/navBar/Navbar";
import React, { Suspense } from "react";
import "./App.css";

const LazyDataLoader = React.lazy(() =>
  import("./components/lazyDataLoader/LazyDataLoader")
);

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDataLoader />
      </Suspense>
    </div>
  );
}

export default App;


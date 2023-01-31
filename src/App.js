import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import React from "react";

import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

import React, { useContext } from "react";
import { Display } from "./conponents/Display";
import { Button } from "./conponents/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="col-sm-8 col-md-6 col-lg-3 m-5 bg-black rounded transparency">
        <Display />
        <Button />
      </div>
    </div>
  );
}

export default App;

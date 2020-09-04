import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import HelloWorld from "../hello-world/HelloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/app/App.tsx</code> and save to reload.
        </p>
        <p>
          <span>Instructions for the test can be found </span>
          <a
            className="App-link"
            href="https://github.com/LandlordStudio-Recruitment/ls-recruitment-front/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        <p>
          <span>If you are new to React, you might want to look at the </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <span> docs, and maybe </span>
          <a
            className="App-link"
            href="https://reactjs.org/docs/hooks-intro.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Hooks
          </a>
          <br></br>
          <span>If you are unfamiliar with Typescript, the docs can be </span>
          <a
            className="App-link"
            href="https://www.typescriptlang.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            found here
          </a>
        </p>
        <p>
          The text below is produced by integrating to the API for the backend
          test component, provided as an example.
        </p>
        <HelloWorld></HelloWorld>
      </header>
    </div>
  );
}

export default App;

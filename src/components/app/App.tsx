import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "../hello-world/HelloWorld";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
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
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
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
        The coloured text below is produced by integrating with the API for the
        backend test component, provided as an example.
      </p>
      <HelloWorld></HelloWorld>
    </>
  );
}

export default App;

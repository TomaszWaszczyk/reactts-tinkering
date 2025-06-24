import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Table from "./components/Table";
import Footer from "./components/Footer";
import TextField from "@mui/material/TextField";
import HeavyComponent from "./components/HeavyComponent";
import Countdown from "./components/Countdown";
import { Counter } from "./components/Counter";
import IncrementDecrementBtn from "./components/IncrementDecrementBtn";
import If from "./components/If";
import UseRef from "./components/UseRef";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <UseRef />
        <If></If>
        <IncrementDecrementBtn/>
        <Counter initialCount={5} />
        <HeavyComponent />
        <MyComponent title="Welcome in the Currency Dashboard"></MyComponent>
        <Table price={98000}></Table>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <TextField
        id="outlined-basic"
        label="Enter currency"
        variant="standard"
      />
      <Countdown initialCount={10} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;

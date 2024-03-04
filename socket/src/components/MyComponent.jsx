// App.js
import { useState } from "react";
import worker from "./workers.js";
import WebWorker from "../../webWorker";

function MyComponent() {
  // const [worker, setWorker] = useState(null);
  const [result, setResult] = useState("");
  const webWorker = new WebWorker(worker);
  // useEffect(() => {
  //   const workerBlob = new Blob([myWorker.default], {
  //     type: "application/javascript",
  //   });
  //   const workerURL = URL.createObjectURL(workerBlob);
  //   const tempWorker = new Worker(workerURL);
  //   console.log("This is temp worker ", tempWorker);
  //   setWorker(tempWorker);
  //   () => {
  //     tempWorker.terminate();
  //   };
  // }, []);
  // if (!worker) {
  //   return;
  // }
  const calculateInWorker = () => {
    console.log("This is worker ", webWorker);
    webWorker.postMessage({ type: "calculate" });
    webWorker.addEventListener("message", (event) => {
      console.log("This is data ", event);
      const data = event.data;
      setResult(data);
    });
  };
  const changeBackground = () => {
    if (document) {
      if (document.body.style.background !== "green") {
        document.body.style.background = "green";
      } else {
        document.body.style.background = "red";
      }
    }
  };

  return (
    <div>
      <h1>React Worker Example</h1>
      <button onClick={calculateInWorker}>Calculate in Worker</button>
      <button onClick={changeBackground}>Change background</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default MyComponent;

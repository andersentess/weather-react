import Footer from "./Footer";
import "./index.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather />
      <br />
      <Footer />
    </div>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container container mx-md-5">
        <Card />
      </div>
    </>
  );
}

export default App;

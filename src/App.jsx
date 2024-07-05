import Navbar from "./components/navbar/navbar";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">content</div>
    </div>
  );
}

export default App;

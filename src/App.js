import "./App.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import APPCOINS from "./Components/APICOINS";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/100">
          <APPCOINS />
        </Route>
      </Router>
    </div>
  );
}

export default App;

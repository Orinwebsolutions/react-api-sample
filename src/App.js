import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/navibar";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <Navibar />
      <div className="container">
        <Users />
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./router";
import Header from "./components/header/header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {routes.map(({ Component, link }) => (
            <Route key={link} exact path={link} element={<Component />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

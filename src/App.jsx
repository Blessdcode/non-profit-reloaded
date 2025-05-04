import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./home/home";

function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    // </Router>
  );
}

export default App;

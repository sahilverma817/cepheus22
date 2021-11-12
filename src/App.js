import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Events from "./components/Events/Events";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import Sponsorship from "./components/Sponsorship/Sponsorship";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <AboutUs />
      <Events />
      <SchedulePage />
      <Sponsorship />
    </div>
  );
}

export default App;
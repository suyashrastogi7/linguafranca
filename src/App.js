import "./App.css";

//Modules
import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";

//Components

import Footer from "./Components/Footer";

//Pages
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import More from "./Pages/More";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Element name="contact" className="element">
        <Footer />
      </Element>
    </div>
  );
}

export default App;

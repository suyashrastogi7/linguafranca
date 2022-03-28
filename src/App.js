import "./App.css";

//Modules
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PreHeader from "./Components/PreHeader";

//Pages
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <PreHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

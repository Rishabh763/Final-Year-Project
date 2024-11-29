import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/authContext";
import Home from "./pages/Home";
import Signin from './auth/Login/index';
import Signup from "./auth/Register/index"; 
import Nopage from "./pages/Nopage"
import User from "./pages/User";
import User2 from "./components/Dashboard2";
import Test from "./pages/Test";
import Face from "./pages/Face_Recogination"
import Disorders from "./pages/Disorders";
import Disorder from "./pages/Disorder";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Result from "./pages/Result";
import Exercise from "./pages/Exercise";

import ScrollToTop from "./components/ScrollToTop";  // Import the ScrollToTop component

function App() {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    console.log(disease);
  };

  return (
    // <AuthProvider>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop to ensure it works across route changes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/result" element={<Result />} />
          <Route path="/FaceRecogination" element={<Face />} />
          <Route path="/test/:testType" element={<Test />} />
          <Route path="/Dashboard/:username" element={<User />} />
          <Route path="/Dashboard2/:username" element={<User2 />} />
          <Route path="/Disorders" element={<Disorder handleDiseaseSelect={handleDiseaseSelect} />} scroll={true} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Disorders/:diseaseName" element={<Disorders />} scroll={true} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
      // </AuthProvider>
  );
}

export default App;

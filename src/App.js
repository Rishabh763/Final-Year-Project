import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./pages/Home";
import Signin from './auth/Login/index';
import Signup from "./auth/Register/index"; 
import Nopage from "./pages/Nopage"
import User from "./pages/User";
import Test from "./pages/Test";
import Face from "./pages/Face_Recogination"
import Disorders from "./pages/Disorders";
import Disorder from "./pages/Disorder";

import ScrollToTop from "./components/ScrollToTop";  // Import the ScrollToTop component

function App() {
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    console.log(disease);
  };

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop to ensure it works across route changes */}
        <Routes>
          <Route path="/" element={<Home handleDiseaseSelect={handleDiseaseSelect} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/FaceRecogination" element={<Face />} />
          <Route path="/test/:testType" element={<Test />} />
          <Route path="/Dashboard/:username" element={<User />} />
          <Route path="/Disorders" element={<Disorder handleDiseaseSelect={handleDiseaseSelect} />} scroll={true} />
          <Route path="/Disorders/:diseaseName" element={<Disorders />} scroll={true} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
      </AuthProvider>
  );
}

export default App;

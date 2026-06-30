import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";
import Stats from "./components/Stats/Stats";
import Tariffs from "./components/Tariffs/Tarrffs";
import Workflow from "./components/Workflow/Workflow";

import Privacy from "./pages/Privacy";
import Agreement from "./pages/Agreement";
import PersonalDataConsent from "./pages/PersonalDataConsent";
import Requisites from "./pages/Requisites";
import Documents from "./pages/Documents";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./context/AuthContext";

function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <Workflow />
      <Tariffs />
      <Stats />
      <Form />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route
          path="/personal-data-consent"
          element={<PersonalDataConsent />}
        />
        <Route path="/requisites" element={<Requisites />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

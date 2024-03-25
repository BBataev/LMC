import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RegisterForm } from "./components/Register/RegisterForm";
import { LoginForm } from "./components/Login/LoginForm";
import { NotesPage } from "./components/NotesPage/NotesPage";
import { NotExist } from "./components/NotExist/NotExist";
import { StartPage } from "./components/StartPage/StartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/registration" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="*" element={<NotExist />} />
      </Routes>
    </>
  );
}

export default App;

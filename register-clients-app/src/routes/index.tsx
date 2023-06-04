import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { DashBoard } from "../pages/Dashboard";
import { ContactProvider } from "../contexts/ContactContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ContactProvider/>}>
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

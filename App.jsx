import Header from "./Components/Header";
import { Outlet } from "react-router";

import './style.css'
export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

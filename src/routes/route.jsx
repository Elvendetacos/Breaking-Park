import { Route, BrowserRouter, Routes } from "react-router-dom";
import Reservation from "../pages/reservation";

function route() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reservation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default route;

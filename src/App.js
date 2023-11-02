import "./App.css";
// import { Button, Navbar } from "bootstrap";
import { createContext, useState } from "react";
import data from "./data.js";
import { Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import { MainNav, Main, About, Event } from "./MainContents";
import Cart from "./routes/Cart";

let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [moreCount, setMoreCount] = useState(0);
  let [재고] = useState([10, 11, 12]);

  return (
    <div className="App">
      <MainNav />
      <RoutesAll
        shoes={shoes}
        setShoes={setShoes}
        moreCount={moreCount}
        setMoreCount={setMoreCount}
      />
    </div>
  );
}

const RoutesAll = ({ shoes, setShoes, moreCount, setMoreCount }) => {
  return (
    <>
      <Routes>
        <Route path="*" element={<div>없는 페이지입니다</div>} />
        <Route
          path="/"
          element={
            <Main
              shoes={shoes}
              setShoes={setShoes}
              moreCount={moreCount}
              setMoreCount={setMoreCount}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>about > member</div>} />
          <Route path="location" element={<div>about > location</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;

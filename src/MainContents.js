/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable default-case */
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import img from "../src/img/photo_1667542882.jpeg";

const MainNav = () => {
  let navigate = useNavigate();

  return (
    <>
      <nav class="navbar bg-light">
        <form class="container-fluid justify-content-start">
          <button class="btn btn-outline-success me-2" type="button">
            Shop
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            Menu
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            HOME
            {/* <Link to="/">HOME</Link> */}
          </button>
          <button
            onClick={() => {
              navigate("/about");
            }}
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              navigate("/event");
            }}
            class="btn btn-sm btn-outline-secondary"
            type="button"
          >
            EVENT
          </button>
        </form>
      </nav>
    </>
  );
};

const Main = ({ shoes, setShoes, moreCount, setMoreCount }) => {
  let [loading, setLoading] = useState(false);
  function sort() {
    let newShoes = [...shoes].sort((a, b) => {
      return a.title.toLowerCase() > b.title.toLowerCase ? -1 : 1;
    });
    setShoes(newShoes);
  }

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + img + ")" }}
      ></div>
      <button type="button" class="btn btn-success" onClick={() => sort()}>
        Sort
      </button>
      <div class="container text-center">
        <div class="row">
          {shoes.map((val, i) => {
            return (
              <>
                <ProductCard data={val} key={i} />
                {i % 3 === 2 ? <div class="row"></div> : null}
              </>
            );
          })}
        </div>
      </div>
      {moreCount < 2 ? (
        <button
          onClick={() => {
            setLoading(true);
            axios
              .get(
                `https://codingapple1.github.io/shop/data${moreCount + 2}.json`
              )
              .then((res) => {
                setShoes([...shoes, ...res.data]);
                setMoreCount(moreCount + 1);
                setLoading(false);
              })
              .catch((e) => {
                setLoading(false);
                console.log(e);
              });
          }}
        >
          더 불러오기
        </button>
      ) : null}
      {loading ? <div>loading.....</div> : null}
    </>
  );
};

const About = () => {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
};

const Event = () => {
  return (
    <>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </>
  );
};

const ProductCard = ({ data }) => {
  let navigate = useNavigate();
  let imgUrl = `https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`;
  return (
    <div
      class="col"
      onClick={() => {
        navigate(`/detail/${data.id}`);
      }}
    >
      <img src={imgUrl} width="50%" />
      <h4>{data.title}</h4>
      <p>{data.content}</p>
    </div>
  );
};

export { MainNav, Main, About, Event, ProductCard };

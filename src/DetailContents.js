/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable default-case */
import "./App.css";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { inputData } from "./../src/store";

const DiscountArea = ({ discountFlag }) => {
  return (
    <>
      {discountFlag ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}
    </>
  );
};

const ButtonArea = ({ count, setCount }) => {
  let PinkBtn = styled.button`
    background: ${(a) => a.color};
    color: ${(a) => (a.color === "blue" ? "white" : "black")};
    padding: 10px;
  `;
  let Box = styled.div`
    background: grey;
    padding: 20px;
  `;
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        눌러라잉
      </button>
      {count}
      <Box>
        <PinkBtn color={"pink"}>핑크버튼</PinkBtn>
        <PinkBtn color={"orange"}>오렌지버튼</PinkBtn>
        <PinkBtn color={"blue"}>블루버튼</PinkBtn>
      </Box>
    </>
  );
};

const ContentArea = ({ img, chkInputVal, data }) => {
  let dispatch = useDispatch();

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={img} width="100%" />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{data.title}</h4>
          <p>{data.content}</p>
          <p>{data.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(inputData(data));
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <input onKeyUp={chkInputVal} />
    </>
  );
};

const Tabs = () => {
  let [tabActive, setTabActive] = useState(0); //액티브된탭
  let [endYn, setEndYn] = useState(false); //애니메이션효과

  useEffect(() => {
    setTimeout(() => {
      //타이머 줘야하는이유
      //react18 automatic batching 기능
      //setEndYn값 변경을 한번에 퉁침
      setEndYn(true); //mount 시
    }, 10);
    return () => {
      setEndYn(false);
    }; //unmout 시
  }, [tabActive]); //tabActive 값이 변경될때만 실행

  return (
    <>
      <NavArea setTabActive={setTabActive} />

      <TabContentAll tabActive={tabActive} />

      <TabContentArr tabActive={tabActive} endYn={endYn} />
    </>
  );
};

const NavArea = ({ setTabActive }) => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTabActive(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTabActive(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTabActive(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

const TabContentAll = ({ tabActive }) => {
  switch (tabActive) {
    case 0:
      return <div>00</div>;
    case 1:
      return <div>11</div>;
    case 2:
      return <div>22</div>;
  }
};

const TabContentArr = ({ tabActive, endYn }) => {
  // 한번에 선언 1
  // const tab0 = <div>000</div>,
  //   tab1 = <div>111</div>,
  //   tab2 = <div>222</div>;

  // 한번에 선언 2
  const contents = {
    tab0: <div>000</div>,
    tab1: <div>111</div>,
    tab2: <div>222</div>,
  };
  const { tab0, tab1, tab2 } = contents;

  // 한번에 선언 3 - es6에서 먹는건데 왜 난 안되노
  // const [tab0, tab1, tab2] = [<div>000</div>, <div>000</div>, <div>000</div>];

  return (
    <>
      <div className={`start ${endYn ? "end" : ""}`}>
        {[tab0, tab1, tab2][tabActive]}
      </div>
    </>
  );
};

export { DiscountArea, ButtonArea, ContentArea, Tabs, NavArea, TabContentAll };

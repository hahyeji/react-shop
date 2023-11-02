/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DiscountArea, ButtonArea, ContentArea, Tabs } from "../DetailContents";

// import { Context1 } from "../App";

const Detail = ({ shoes }) => {
  // let contextTest = useContext(Context1);

  let { id } = useParams();
  let data = {};
  shoes.find((val) => {
    if (val.id === parseInt(id)) data = val;
  });
  // 아래 더 간단하게

  // let data = shoes.find((val) => val.id == id);
  let img = `https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`;

  let [discountFlag, setDiscountFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDiscountFlag(false);
    }, 2000);
  }, [discountFlag]);

  let [count, setCount] = useState(0);

  let chkInputVal = (e) => {
    if (isNaN(parseInt(e.currentTarget.value))) {
      e.currentTarget.value = "";
      alert("숫자만 입력하시오");
    }
  };

  let [detailFadeYn, setDetailFadeYn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDetailFadeYn(true);
    }, 100);

    return () => {
      setDetailFadeYn(false);
    };
  }, []); //라우팅될때 실행시켜야겟는디?

  return (
    <div className={`container start ${detailFadeYn ? "end" : ""}`}>
      <DiscountArea discountFlag={discountFlag} />
      <ButtonArea count={count} setCount={setCount} />
      <ContentArea img={img} chkInputVal={chkInputVal} data={data} />

      <Tabs />
    </div>
  );
};

export default Detail;

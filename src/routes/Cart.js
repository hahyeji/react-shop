import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "../store";
import { changeName, setAge } from "./../store/userSlice";

function Cart() {
  let a = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      {a.user.name} / {a.user.age}님의 장바구니
      <button
        onClick={() => {
          dispatch(setAge(2));
        }}
      >
        setAge
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {a.cart.map((val, i) => (
            <tr key={i}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(setCount(val.id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}

          {/* <tr>
            <td>{a[0].id}</td>
            <td>{a[0].name}</td>
            <td>{a[0].count}</td>
            <td></td>
          </tr>
          <tr>
            <td>{a[1].id}</td>
            <td>{a[1].name}</td>
            <td>{a[1].count}</td>
            <td></td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

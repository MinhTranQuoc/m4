import React, { useEffect } from "react";
import { selectProductList, getProducts } from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../../asset/css/ProductList.css"

export default function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProductList);

  const getProductList = async () => {
    dispatch(getProducts());
  };
  useEffect(() => {
    getProductList();

    // eslint-disable-next-line
  }, []);

  function handleCreate(e) {
    e.preventDefault();
    navigate("/product/add");
  }

  return (
    <>
      <button onClick={handleCreate}>Create Account</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <>
              <tr key={product.id}>
                <td>{product.id} </td>
                <Link className="td" to={`/product/edit/${product.id}`}>
                  <td>{product.name} </td>
                </Link>
                <td>{product.price} </td>
                <td>{product.quantity} </td>
                <td></td>
                <td>
                  <Link to={`/product/edit/${product.id}`}>Edit</Link>  |
                  <Link to={`/product/${product.id}`}>Detail</Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
    // <div>
    //   <h1>Product</h1>
    //   <table border={1}>
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //         <th>Quantity</th>
    //         <th colSpan={2}>
    //           <button type="button" onClick={handleCreate}>
    //             Create
    //           </button>
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {products?.map((product) => (
    //         <tr key={product.id}>
    //           <td>{product.id} </td>
    //           <td>{product.name} </td>
    //           <td>{product.quantity} </td>
    //
    //           <td>
    //             <Link to={`/product/edit/${product.id}`}>Edit</Link>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
}

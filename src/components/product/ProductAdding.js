import React, { useState } from "react";
import { selectProductAdded, addProduct } from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductAdding() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const isCreate = !productId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productAdded = useSelector(selectProductAdded);

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(addProduct(product));
    setProduct(productAdded);
    alert(
      `${isCreate ? "Create" : "Edit"} product ${JSON.stringify(
        product
      )} successfully!!!`
    );
    navigate("/");
    // window.location.reload();
  }

  function getBackProductList() {
    navigate("/");
  }

  return (
    <div>
      <h1>product Add</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={product.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            name="quantity"
            value={product.quantity || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={getBackProductList}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

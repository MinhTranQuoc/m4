import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  getProduct,
  selectProductDetail,
  editProduct,
} from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductEditing() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const isCreate = !productId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector(selectProductDetail);
  const success = useSelector(selectSuccess);

  const getProductEditing = async () => {
    if (productDetail == null || productDetail.id !== productId) {
      dispatch(getProduct(productId));
    } else {
      const { id, name, quantity } = productDetail;
      const currentProductDetail = { id, name, quantity };
      setProduct(currentProductDetail);
    }
  };

  useEffect(() => {
    getProductEditing();

    // eslint-disable-next-line
  }, [success]);

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(editProduct(product));
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
    // window.location.reload();
  }

  return (
    <div>
      <h1>Product Edit</h1>
      <form>
        <div>
          <label>Id</label>
          <input
            readOnly
            name="id"
            value={product.id || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={product.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            name="price"
            value={product.price || ""}
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
          Edit
        </button>
      </form>
    </div>
  );
}

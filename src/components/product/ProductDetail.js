import React, { useEffect } from "react";
import {
  selectProductDetail,
  getProduct,
  removeProduct,
} from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetail = useSelector(selectProductDetail);

  const getProductDetail = async () => {
    if (productId != null) {
      dispatch(getProduct(productId));
    }
  };

  useEffect(() => {
    getProductDetail();

    // eslint-disable-next-line
  }, []);

  function getBackProductList() {
    navigate("/");
  }

  function removeCurrentProduct() {
    if (productId) {
      dispatch(removeProduct(productId));
      alert(`Remove product ${JSON.stringify(productDetail)} successfully!!!`);
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>
        <b>Id:</b> {productDetail?.id}
      </p>
      <p>
        <b>Name:</b> {productDetail?.name}
      </p>
      <p>
        <b>Quantity:</b> {productDetail?.quantity}
      </p>
      <button type="button" onClick={getBackProductList}>
        Back
      </button>
      &nbsp;
      <button type="button" onClick={removeCurrentProduct}>
        Remove
      </button>
    </div>
  );
}

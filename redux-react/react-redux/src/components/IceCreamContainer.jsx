import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyIceCream,
  incrementIceCream,
} from "../../redux/ice_cream/iceCreamActionsCreators";

function IceCreamContainer() {
  const numOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Ice Cream Container</h1>
      <h2>Number of Ice Creams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
      <button onClick={() => dispatch(incrementIceCream())}>
        make Ice Cream
      </button>
    </div>
  );
}

export default IceCreamContainer;

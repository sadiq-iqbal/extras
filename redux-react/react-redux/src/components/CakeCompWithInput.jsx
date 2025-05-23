import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../../redux/cake/cakeActionCreators";

function CakeCompWithInput() {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const cakeNum = useSelector((state) => state.cake.numberOfCakes);

  const handleBuyCake = () => {
    dispatch(buyCake(number));
    setNumber(0);
  };
  return (
    <div>
      <h1>Cake Component</h1>
      <h2>Number of Cakes - {cakeNum} </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleBuyCake}>Buy {number} Cake</button>
    </div>
  );
}

export default CakeCompWithInput;

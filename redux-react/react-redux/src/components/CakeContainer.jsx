import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/cake/cakeActions";
import { buyCake, incrementCake } from "../../redux/cake/cakeActionCreators";
function CakeContainer() {
  const dispatch = useDispatch();
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  function handleBuyCake() {
    dispatch(buyCake());
  }

  function handleBakeCake() {
    dispatch(incrementCake());
  }
  return (
    <div>
      <h1>Cake Container</h1>
      <h2> Cakes remaining in the shelf - {numberOfCakes} </h2>
      <button onClick={(e) => handleBuyCake()}>Buy Cake</button>
      <button onClick={(e) => handleBakeCake()}>Bake Cake</button>
    </div>
  );
}

export default CakeContainer;

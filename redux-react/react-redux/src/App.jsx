// import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "../redux/store/store";
// import IceCreamContainer from "./components/IceCreamContainer";
// import CakeCompWithInput from "./components/CakeCompWithInput";
function App() {
  return (
    <>
      <Provider store={store}>
        {/* <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <CakeCompWithInput></CakeCompWithInput> */}
      </Provider>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
// import UseReducer from "./UseReducer Hook/UseReducer";
// import AxiosExample from "./Test React/AxiosExample";
// import Component from "./Context/Component";
import TicTacToe from "./TicTacToe";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<AxiosExample />} /> */}
        {/* <Route path="/" element={<Component />} /> */}
        {/* <Route path="/" element={<UseReducer />} /> */}
        <Route path="/" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}
export default App;

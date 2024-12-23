import "./App.css";
import Selector from "./components/selector/Selector";

function App() {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        border: "1px solid black",
        // fontFamily: 'Atkinson Hyperlegible',
        fontWeight: "700",
        fontStyle:'normal'
      }}
    >
      <Selector
        mode={"digit"}
        state={"active"}
        value={180}
        onClick={() => console.log("Not Yet Implemented")}
      />
    </div>
  );
}

export default App;

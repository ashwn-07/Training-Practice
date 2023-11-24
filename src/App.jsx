import ClockTest from "./Components/ClockTest/ClockTest";
import Objects from "./Components/NestedObjex/Objects";
import Props from "./Components/Props";
import Test from "./Components/Test";
import Scientists from "./Components/exersice2/Scientists";

function Profile() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function App() {
  return (
    <>
      {/* <Scientists/> */}
      {/* <Test /> */}
      {/* <Objects/> */}
      <ClockTest/>
    </>
  );
}

export default App;

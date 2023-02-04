// esrint react-hooks/exhaustive-deps:off
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("start rendering");
  const [num, setNum] = useState(2);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickcountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="black">fine!</ColorfulMessage>

      <button onClick={onClickcountUp}>countUp</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* { num % 3 === 0 && <p>😲</p>} */}
      {faceShowFlag && <p>😲</p>}
    </>
  );
};

export default App;

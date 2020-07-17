import React, { userState, useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickExit = () => setMessage("안녕히 가세요");

  const [color, setColor] = useState("black");
  const onClickBlack = () => setColor("black");
  const onClickRed = () => setColor("red");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickExit}>퇴장</button>
      <button onClick={onClickBlack}>검정</button>
      <button onClick={onClickRed}>빨강</button>

      <h1 style={{ color }}>{message}</h1>
    </div>
  );
};

export default Say;

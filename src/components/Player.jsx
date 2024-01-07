import { useState, useRef } from "react";

export default function Player() {
  const playerNameInput = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(e) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // }
  function handleClick() {
    setEnteredPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity" }</h2>
      <p>
        <input
          ref={playerNameInput}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

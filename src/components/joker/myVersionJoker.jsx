import { useState, useEffect } from "react";
export default function MyVersionJoker() {
  let URL = "https://official-joke-api.appspot.com/random_joke";
  async function getNewJokes() {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  }

  let [joke, setJoke] = useState(getNewJokes);

  return (
    <>
      <div
        id="joke"
        style={{
          border: "2px solid pink",
          borderRadius: "14px",
          padding: "15px",
        }}
      >
        <h1>Jokes!</h1>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJokes}>get a joke</button>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import styles from "./HelloWorld.module.css";

// This component is provided as an example of integration to the API.
// It does not indicate any patterns or stylings that we would like you to use - it is merely here to provide an example of
// frontend -> backend communication to ensure they are functioning.
function HelloWorld() {
  const [message, setMessage] = useState("Fetching...");

  useEffect(() => {
    fetch("http://localhost:5000/HelloWorld", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((text) => {
        setMessage(text);
      })
      .catch((error) => {
        console.error("Error fetching message from backend API -", error);
        setMessage(
          "Couldn't fetch message from backend API - check that it is running"
        );
      });
  });

  return <span className={styles.message}>{message}</span>;
}

export default HelloWorld;

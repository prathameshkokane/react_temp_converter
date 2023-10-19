import React, { useState } from "react";

const Converter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
  };

  const convertToFahrenheit = () => {
    const fahrenheitValue = (parseFloat(celsius) * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  const convertToCelsius = () => {
    const celsiusValue = ((parseFloat(fahrenheit) - 32) * 5) / 9;
    setCelsius(celsiusValue.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Celsius:</label>
      <input
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
        style={styles.input}
      />

      <button onClick={convertToFahrenheit} style={styles.button}>
        Convert to Fahrenheit
      </button>

      <label style={styles.label}>Fahrenheit:</label>
      <input
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        style={styles.input}
      />

      <button onClick={convertToCelsius} style={styles.button}>
        Convert to Celsius
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "16px",
  },
  input: {
    marginBottom: "10px",
    padding: "5px",
  },
  button: {
    padding: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Converter;

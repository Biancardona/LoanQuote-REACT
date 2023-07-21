import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ButtonAdSub from "./components/ButtonAdSub";

function App() {
  //El state va a retornar un arreglo entonces se va extraer de la siguiente manera haciendo destructuring del arreglo
  //El primer valor es el nombre del state, el segundo valor es la funcion que va a modificar el state
  //Dentro del useState a el valor inicial
  const [amount, setAmount] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  console.log(amount);

  //Los eventos van dentro del elemento via atributo (onChange va dentro del elemento input)
  function handleChange(e) {
    setAmount(Number(e.target.value));
  }
  function decreaseButton() {
    const value = amount - STEP;

    if (value < MIN) {
      alert("Incorrect amount");
      return;
    }

    setAmount(value);
  }

  function increaseButton() {
    const value = amount + STEP;

    if (value > MAX) {
      alert("Incorrect amount");
      return;
    }

    setAmount(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <ButtonAdSub operador="-" fn={decreaseButton} />
        <ButtonAdSub operador="+" fn={increaseButton} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        value={amount}
        min={MIN}
        max={MAX}
        step={STEP}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {amount}
      </p>
    </div>
  );
}

export default App;

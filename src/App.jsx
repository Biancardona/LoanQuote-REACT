import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ButtonAdSub from "./components/ButtonAdSub";
import { amountFormat } from "./helpers";

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
    const decrease = amount - STEP;

    if (decrease < MIN) {
      alert("Incorrect amount");
      return;
    }

    setAmount(decrease);
  }

  function increaseButton() {
    const increase = amount + STEP;

    if (increase > MAX) {
      alert("Incorrect amount");
      return;
    }

    setAmount(increase);
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
        {amountFormat(amount)}
      </p>
    </div>
  );
}

export default App;

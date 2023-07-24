import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ButtonAdSub from "./components/ButtonAdSub";
import { amountFormat, calulateTotalToPay } from "./helpers";

function App() {
  //El state va a retornar un arreglo entonces se va extraer de la siguiente manera haciendo destructuring del arreglo
  //El primer valor es el nombre del state, el segundo valor es la funcion que va a modificar el state
  //Dentro del useState a el valor inicial
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(6);
  const [total, setTotal] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  //USeEffect siemopre se ejecuta una vez, y luego cada vez cuando el arreglo de dependencia cambien( en esete caso amount y term)
  //Para usar el total a pagar se usa un useEffect que cambia conforme la cantidad y el plazo cambia
  //USar la funcion calculateTotalToPay
  useEffect(() => {
    const totaltoPay = calulateTotalToPay(amount, term);
    setTotal(totaltoPay);
  }, [amount, term]);

  //Pago mensual es dividir total de meses y el total de pago
  useEffect(() => {
    setMonthlyPayment(total / term);
  }, [total]);

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

      <h2 className="text 2xl font-extrabold text-gray-500  text-center">
        Elige un <span className="text-indigo-600"> plazo </span> plazo a pagar
      </h2>
      <select
        className="mt-5 w-full p-2 bg-white-border border-gray-300 text-center rounded-lg text-xl font-bold"
        value={term}
        onChange={(e) => setTerm(+e.target.value)}
      >
        <option value="6"> 6 meses</option>
        <option value="12"> 12 meses</option>
        <option value="24"> 24 meses</option>
      </select>
      <div className="my-5 space-y-3 bg-gray-50">
        <h2 className="text 2xl font-extrabold text-gray-500  text-center p-5">
          Resumen de <span className="text-indigo-600"> Pagos </span>
        </h2>
        <p className="text-xl text-center font-bold">{term} Meses</p>
        <p className="text-xl text-center font-bold">
          {amountFormat(total)} Total a pagar
        </p>
        <p className="text-xl text-center font-bold">
          Mensualidades por
          {amountFormat(monthlyPayment)}
        </p>
      </div>
    </div>
  );
}

export default App;

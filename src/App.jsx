import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  //El state va a retornar un arreglo entonces se va extraer de la siguiente manera haciendo destructuring del arreglo
  //El primer valor es el nombre del state, el segundo valor es la funcion que va a modificar el state
  //Dentro del useState a el valor inicial
  const [amount, setAmount] = useState(1000);
  console.log(amount);

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
      />
    </div>
  );
}

export default App;

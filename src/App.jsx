import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

/*
  label1,
  label2,
  money = 0,
  moneyTypes = ["usd"],
  selectedOption = "usd",
  amountDisabled = "false",
  onAmountChange,
  onCurrencyChange,
  */

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("ind");
  const [money, setMoney] = useState(0);

  const [convertedMoney, setConvertedMoney] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const moneyTypes = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedMoney(money * currencyInfo[toCurrency]);
  };
  const swapEverything = () => {
    const value = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(value);
    setMoney(0);
    setConvertedMoney(0);
  };
  return (
    <div className="text-black my-80 mx-40 flex flex-col items-center justify-center shadow-2xl rounded-lg">
      <div className="my-4">
        <h1 className="text-3xl text-white">Currency Converter</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label1={"From :"}
          label2={"Currency Type"}
          moneyTypes={moneyTypes}
          onAmountChange={(value) => setMoney(value)}
          onCurrencyChange={(value) => setFromCurrency(value)}
          selectedOption={fromCurrency}
          money={money}
          amountDisabled={false}
        />
        <button
          className=" px-6 py-2 my-8 bg-white rounded-full hover:bg-slate-400"
          onClick={swapEverything}
        >
          <svg
            class="h-8 w-8 text-red-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M3 9l4-4l4 4m-4 -4v14" />{" "}
            <path d="M21 15l-4 4l-4-4m4 4v-14" />
          </svg>
        </button>
        <InputBox
          label1={"To :"}
          label2={"Currency Type"}
          moneyTypes={moneyTypes}
          onCurrencyChange={(value) => {
            setToCurrency(value);
          }}
          money={convertedMoney}
          selectedOption={toCurrency}
          amountDisabled={true}
        />

        <button
          type="submit"
          className="bg-slate-600 hover:bg-slate-800 text-white  py-2 px-16 rounded-lg mb-12 mt-8 ml-2"
        >
          Convert {fromCurrency} to {toCurrency}
        </button>
      </form>
    </div>
  );
}

export default App;

//api: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json

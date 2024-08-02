function InputBox({
  label1,
  label2,
  money = 0,
  moneyTypes = ["usd"],
  selectedOption = "usd",
  amountDisabled = "false",
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className="rounded-md bg-zinc-600">
      <div className="flex justify-between p-2">
        <label className="inline-block flex-initial" htmlFor="currencyInput">
          {label1}
        </label>
        <label className="inline-block mx-16" htmlFor="currencyType">
          {label2}
        </label>
      </div>
      <div className="flex justify-between p-2">
        <input
          id="currencyInput"
          type="number"
          value={money}
          placeholder="Amount"
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="text-black rounded-md text-center inline-block p-2 bg-white"
        />
        <select
          id="currencyType"
          name="moneyType"
          className="text-black bg-yellow-300 mx-16 rounded-md"
          value={selectedOption}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          defaultValue={"usd"}
        >
          {moneyTypes.map((money) => (
            <option key={money} value={money}>
              {money}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

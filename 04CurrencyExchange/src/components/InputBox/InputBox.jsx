import React from "react";

export const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = ["usd", "inr"],
  selectCurrency = "usd",
  amountDisabled = false,
}) => {
  return (
    <div>
      <span>{label}</span>
      <input
        type="Number"
        disabled={amountDisabled}
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions &&
          currencyOptions.map((curr, index) => (
            <option value={curr} key={index}>
              {curr}
            </option>
          ))}
      </select>
    </div>
  );
};

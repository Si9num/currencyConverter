export const arrForVal = [
  "BGN",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "GBP",
  "IRR",
  "ISK",
  "JPY",
  "KGS",
  "KWD",
  "KZT",
  "MDL",
  "NOK",
  "SEK",
  "SGD",
  "TRY",
  "XDR",
];
const optionArr = arrForVal.map((e) => (
  <option key={e} value={e}>
    {e}
  </option>
));

export default optionArr;

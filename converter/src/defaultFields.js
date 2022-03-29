import { useEffect, useState } from "react";
import { store } from "./redux/store";

let DefaultFields = () => {
  const [currency, setCurrency] = useState("USD");
  const [val, setVal] = useState(1);
  const [defaultValues] = useState(["USD", "EUR", "BYN", "RUB", "UAH", "PLN"]);
  const urlList = `${process.env.REACT_APP_URL + currency}`;

  useEffect(() => {
    async function t() {
      const response = await fetch(urlList);

      let res = await response.json();
      sessionStorage.test = JSON.stringify(res.rates);
    }
    t();
  }, [currency, urlList]);

  return defaultValues.map((e) => {
    return (
      <>
        <div className="field">
          <label>
            {e}{" "}
            <input
              value={
                store.getState() * JSON.parse(sessionStorage.test)[e] !== 0
                  ? store.getState() * JSON.parse(sessionStorage.test)[e]
                  : ""
              }
              name={e}
              type="number"
              min="0"
              className="inputField"
              onChange={function (ev) {
                setCurrency(ev.target.name);
                store.dispatch({
                  type: "VALUE",
                  val: ev.target.value,
                });

                setVal(store.getState());
              }}
            ></input>
          </label>
        </div>
      </>
    );
  });
};
export default DefaultFields;

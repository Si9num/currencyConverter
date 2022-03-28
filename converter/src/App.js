import optionArr, { arrForField } from "./select.js";
import { useEffect, useState } from "react";
import { AddField } from "./select.js";

import "./App.css";

const Form = () => {
  const [arrForField, setField] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [value, setValue] = useState(1);
  const [vvalue, setVvalue] = useState(1);
  const urlList = ` https://api.exchangerate.host/latest?base=${currency}`;

  useEffect(() => {
    async function t() {
      const response = await fetch(urlList);

      let res = await response.json();
      sessionStorage.test = JSON.stringify(res.rates);
    }
    t();
  });

  return (
    <div className="mainContainer">
      <div className="headersContainer">
        <h1>Конвертер валют</h1>
        <h3>По курсу НБ РБ</h3>
        <p>
          Официальный курс, устанавливаемый Национальным банком Республики
          Беларусь на {new Date().toLocaleDateString()}
        </p>
      </div>
      <div className="fieldContainer">
        <div className="field">
          <label>
            USD{" "}
            <input
              value={vvalue}
              name="USD"
              type="number"
              className="inputField"
              onChange={(ev) => setCurrency(ev.target.name)}
            ></input>
          </label>
        </div>
        <div className="field">
          <label>
            EUR{" "}
            <input
              value={JSON.parse(sessionStorage.test)["EUR"]}
              name="EUR"
              type="number"
              className="inputField"
              onChange={(ev) => setCurrency(ev.target.name)}
            ></input>
          </label>
        </div>
        <div className="field">
          <label>
            BYN{" "}
            <input
              value={JSON.parse(sessionStorage.test)["BYN"]}
              name="BYN"
              type="number"
              className="inputField"
              onChange={(ev) => setCurrency(ev.target.name)}
            ></input>
          </label>
        </div>
        <div className="field">
          <label>
            RUB{" "}
            <input
              value={JSON.parse(sessionStorage.test)["RUB"]}
              name="RUB"
              type="number"
              className="inputField"
              onChange={(ev) => setCurrency(ev.target.name)}
            ></input>
          </label>
        </div>
        <div className="field">
          <label>
            UAH{" "}
            <input
              value={JSON.parse(sessionStorage.test)["UAH"]}
              name="UAH"
              type="number"
              className="inputField"
              onChange={(ev) => setCurrency(ev.target.name)}
            ></input>
          </label>
        </div>
        <div className="field">
          <label>
            PLN{" "}
            <input
              value={JSON.parse(sessionStorage.test)["PLN"]}
              name="PLN"
              type="number"
              className="inputField"
              onChange={(ev) => setCurrency(ev.target.name)}
            ></input>
          </label>
        </div>
        {arrForField}
        <div className="addVal">
          <label>
            Добавить валюту{" "}
            <select
              onChange={(ev) =>
                setField(
                  (arr) => [
                    ...arr,
                    <div className="field">
                      <label>
                        {ev.target.value}{" "}
                        <input
                          key={ev}
                          name={ev.target.value}
                          type="number"
                          className="inputField"
                          onChange={(ev) => setCurrency(ev.target.name)}
                        ></input>
                      </label>
                    </div>,
                  ],
                  optionArr.splice(
                    optionArr.findIndex(
                      (e) => ev.target.value === e.props.value
                    ),
                    1
                  )
                )
              }
            >
              {optionArr}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Form;

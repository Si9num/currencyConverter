import optionArr, { arrForField } from "./select.js";
import { useEffect, useState } from "react";
import { AddField } from "./select.js";
import DefaultFields from "./defaultFields.js";
import { store } from "./redux/store.js";
import "./App.css";

const Form = () => {
  const [arrForField, setField] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [val, setVal] = useState(1);
  const urlList = `${process.env.REACT_APP_URL + currency}`;

  useEffect(() => {
    async function t() {
      const response = await fetch(urlList);

      let res = await response.json();
      sessionStorage.test = JSON.stringify(res.rates);
    }
    t();
  }, [currency, urlList]);
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
        <DefaultFields />
        {arrForField.map((e) => {
          return (
            <>
              <div className="field">
                <label>
                  {e}{" "}
                  <input
                    value={
                      store.getState() * JSON.parse(sessionStorage.test)[e] !==
                      0
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
        })}
        <div className="addVal">
          <label>
            Добавить валюту{" "}
            <select
              onChange={(ev) => {
                setField(
                  (arr) => [...arr, ev.target.value],
                  optionArr.splice(
                    optionArr.findIndex(
                      (e) => ev.target.value === e.props.value
                    ),
                    1
                  )
                );
              }}
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

import optionArr from "./select.js";
import { useEffect, useState } from "react";

import { store } from "./redux/store.js";
import { get } from "./get.js";
import "./App.css";

const Form = () => {
  const [arrForField, setField] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [val, setVal] = useState(1);
  const [fieldName, setFieldName] = useState(store.getState().curArr);

  useEffect(() => {
    get();
  }, [store.getState().curForFetch]);

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
        {fieldName.map((e) => {
          return (
            <>
              <div className="field">
                <label>
                  {e}{" "}
                  <input
                    value={
                      store.getState().val *
                        JSON.parse(store.getState().currency)[e] !==
                      0
                        ? store.getState().val *
                          JSON.parse(store.getState().currency)[e]
                        : ""
                    }
                    name={e}
                    type="number"
                    min="0"
                    className="inputField"
                    onClick={function (ev) {
                      ev.target.value = "";
                      store.dispatch({
                        type: "VALUE",
                        val: "",
                      });
                    }}
                    onChange={function (ev) {
                      store.dispatch({
                        type: "CUR_FOR_FETCH",
                        curForFetch: ev.target.name,
                      });
                      console.log(store.getState().curForFetch);
                      store.dispatch({
                        type: "VALUE",
                        val: ev.target.value,
                      });

                      setVal(store.getState().val);
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
                store.dispatch({
                  type: "CUR",
                  curArr: ev.target.value,
                });
                setFieldName(store.getState().curArr);

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

import optionArr, { arrForField } from "./select";
import { useState } from "react";
import { AddField } from "./select";

import "./App.css";

const Form = () => {
  const [arrForField, setField] = useState([]);

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
            USD <input type="text" className="inputField"></input>
          </label>
        </div>
        <div className="field">
          <label>
            EUR <input type="text" className="inputField"></input>
          </label>
        </div>
        <div className="field">
          <label>
            BYN <input type="text" className="inputField"></input>
          </label>
        </div>
        <div className="field">
          <label>
            RUB <input type="text" className="inputField"></input>
          </label>
        </div>
        <div className="field">
          <label>
            UAH <input type="text" className="inputField"></input>
          </label>
        </div>
        <div className="field">
          <label>
            PLN <input type="text" className="inputField"></input>
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
                        <input type="text" className="inputField"></input>
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

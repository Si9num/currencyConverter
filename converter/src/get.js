import { store } from "./redux/store.js";

export async function get() {
  const urlList = `${process.env.REACT_APP_URL + store.getState().curForFetch}`;
  const response = await fetch(urlList);

  let res = await response.json();
  store.dispatch({
    type: "FETCH",
    currency: JSON.stringify(res.rates),
  });
}

import React from "react";
import ReactDom from "react-dom";

import "./styles.css";
import App from "./main/app";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import mainReducer from "./redux/reducers/index";
import { BrowserRouter as Router } from "react-router-dom";

let store = createStore(mainReducer, applyMiddleware(thunk));



ReactDom.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById("root"));
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from "./State/store"
import {PersistGate} from "redux-persist/integration/react"
import "./Assets/Css/Main.css";
import 'react-lazy-load-image-component/src/effects/blur.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import GlobalStyle from './styles/GlobalStyles';
import { Provider } from 'react-redux'; 
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>,

);


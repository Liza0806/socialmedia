import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/GlobalStyles';
import { Provider } from 'react-redux'; 
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

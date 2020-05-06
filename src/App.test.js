import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  global.window.rudderanalytics = { page: () => null };
});

afterEach(() => {
  global.window = undefined;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  div);
  ReactDOM.unmountComponentAtNode(div);
});

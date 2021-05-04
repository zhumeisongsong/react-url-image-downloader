import React from 'react';
import { render } from 'react-dom';
import UrlImageDownloader from '../../src/index';

const App = () => (
  <UrlImageDownloader />
);
render(<App />, document.getElementById("root"));
import React from 'react';
import { render } from 'react-dom';
import UrlImageDownloader from '../../src/index';

const App = () => (
  <UrlImageDownloader
    imageUrl={
      'https://i.postimg.cc/9MFvz25j/movingtogether-primary-804744d5605a360dc6a2faca9183c51f.jpg'
    }
  />
);
render(<App />, document.getElementById('root'));

import { useMemo } from 'react';

const App = () => {
  return useMemo(() =>
    <div className="container">
      <img width="100%" src="https://i.postimg.cc/9MFvz25j/movingtogether-primary-804744d5605a360dc6a2faca9183c51f.jpg" alt="" />
      <button>Download</button>
    </div>, []);
}

export default App;

import { useCallback, useMemo, useState } from 'react';

const App = () => {
  const [state, setState] = useState('');
  const onClick=useCallback(()=>{
    setState('clicked')
  },[]);
  return useMemo(() =>
    <div className="container">
      <img width="100%" src="https://i.postimg.cc/9MFvz25j/movingtogether-primary-804744d5605a360dc6a2faca9183c51f.jpg" alt="" />
      <button onClick={()=>onClick()}>Download</button>
    </div>, []);
}

export default App;

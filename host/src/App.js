import React, { useCallback, useRef } from 'react';
import ReactDOM from "react-dom";

const App = () => {
  const ref = useRef();
  const unmount = useRef();

  const openApp = useCallback((loader) => {
    if (unmount.current) {
      unmount.current()
      unmount.current = undefined
    }
    ref.current.innerHTML = '';
    loader()
      .then((module) => {
        console.log(module);
        unmount.current = module.default(ref.current);
      })
      .catch((e) => {
        console.log(e);
        ref.current.innerHTML = e.message
      });
  }, [ref])

  return (
    <>
      <div>host</div>
      <div>
        <button onClick={() => openApp(() => import('app_16/render'))}>Open APP-16</button>
        <button onClick={() => openApp(() => import('app_17/render'))}>Open APP-17</button>
      </div>
      <div ref={ref} />
    </>
  );
};

export default App;

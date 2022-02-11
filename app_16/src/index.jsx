import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>app-16</div>
  );
};

export default function render(root) {
  ReactDOM.render(<App />, root)
  return () => ReactDOM.unmountComponentAtNode(root);
};

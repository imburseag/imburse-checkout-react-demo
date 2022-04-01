import { useRef, useEffect } from 'react';

import './App.css';

const App = () => {
  const imburseCheckout = useRef(null);

  useEffect(() => {
    const handleEvent = (event) => {
      console.log({
        type: event.type,
        payload: event.detail
      })
    };

    imburseCheckout.current?.addEventListener('imburse_checkout:component_loaded', handleEvent);
    imburseCheckout.current?.addEventListener('imburse_checkout:session_success', handleEvent);
    imburseCheckout.current?.addEventListener('imburse_checkout:session_failed', handleEvent);
  }, []);

  const token = 'TOKEN';
  const returnURL = 'http://localhost:3000';
  const language = 'en';
  const mode = 'sandbox';

  return (
    <div className="app">
      <h1>Imburse Checkout - React Demo</h1>
      <div className="checkout-container">
        <imburse-checkout ref={imburseCheckout} token={token} return-url={returnURL} language={language} mode={mode}></imburse-checkout>
      </div>
    </div>
  );
}

export default App;

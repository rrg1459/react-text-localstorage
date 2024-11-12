import React, { useState } from 'react';

function Receiver() {

  const [vers, setVers] = useState(localStorage.getItem('texto') || '');

  window.addEventListener('storage', (event) => {
    if (event.key === 'texto') setVers(event.newValue);
  });

  return (
    <div>
      <h1>Texto recibido: {vers}</h1>
    </div>
  );
}

export default Receiver;
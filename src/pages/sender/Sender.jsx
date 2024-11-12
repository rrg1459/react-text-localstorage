import React, { useState } from 'react';

function Sender() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => setInputText(event.target.value);

  const handleSubmit = () => localStorage.setItem('texto', inputText);

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default Sender;
import React, { useState, useEffect } from 'react';
import './App.css';
import { getElementos } from './Peticiones/getElementos';
import { postElemento } from './Peticiones/postElemento';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [elementos, setElementos] = useState([]);


  const fetchElementos = async () => {
    const fetchedElementos = await getElementos();
    setElementos(Array.isArray(fetchedElementos) ? fetchedElementos : []);
  };

  useEffect(() => {
    fetchElementos();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    if (inputValue.trim() !== '') {
      await postElemento(inputValue);
      setInputValue('');
      await fetchElementos();
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button className="button" onClick={handleButtonClick}>Agregar</button>
      </div>

      <div className="list-container">
        <ul className="list">
          {elementos.length > 0 ? (
            elementos.map((item, index) => (
              <li className="list-item" key={item.id || index}>{item.valor}</li>
            ))
          ) : (
            <li className="list-item">No hay elementos disponibles</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Greeting(props) {
  // Cannot use conditions
  const [name, setName] = useState('Mary');
  const [surname, setSurame] = useState('Hoppins');

  useEffect(() => {
    document.title = name + ' ' + surname
  })

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSurnameChange(e) {
    setSurame(e.target.value)
  }

  return (
    <section>
      <Row label="Name">
        <input
          value={name}
          onChange={handleNameChange}/>
        {name}
      </Row>
      <Row label="Surname">
        <input
          value={surname}
          onChange={handleSurnameChange}
        />
        {surname}
      </Row>
      {width}
    </section>
  )
}
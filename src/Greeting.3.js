import React, { useState, useEffect } from 'react';
import Row from './Row';

export default function Greeting(props) {
  const name = useFormInput('Mary');
  const surname = useFormInput('Hoppins');
  const width = useWindowWidth();
  useDocumentTitle(name.value + ' ' + surname.value)
  return (
    <section>
      <Row label="Name">
        <input {...name}/>
        {name.value}
      </Row>
      <Row label="Surname">
        <input {...surname}/>
        {surname.value}
      </Row>
      {width}
    </section>
  )
}

//always prefix use
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width;
}


function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  function handleValueChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleValueChange
  }
}
import React from 'react';

export default function Row(props) {
  return (
    <section style={{ marginTop: '10px', backgroundColor: '#bbb', padding: '10px', width: '300px' }}>
      <div style={{ marginTop: '10px', fontSize: '30px', color: '#666' }}>{props.label}</div>
      <div style={{ marginTop: '10px', fontSize: '40px', color: '#333' }}>{props.children}</div>
    </section>
  )
}
import React from 'react';

const Row = ({ data }) => {
  return (
    data.map(el => 
      <tr className='row' key={el.id}>
        <td key={el.title}>{el.title}</td>
        <td key={el.date}>{new Date(el.date).toDateString()}</td>
        <td key={el.status}>{el.status || 'Draft'}</td>
        <td key={el.status}>Actions</td>
      </tr>
    )
  );
}

export default Row;
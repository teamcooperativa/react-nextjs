import React from 'react';

const mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December']
const Row = ({ data }) => {
  return (
    data.map(el => 
      <tr className='row' key={el.id}>
        <td key={el.title}>{el.title}</td>
        <td key={el.date}>{mon[new Date(el.date).getMonth()]} {new Date(el.date).getDate()}, {new Date(el.date).getFullYear()}</td>
        <td key={el.status}>{el.status || 'Draft'}</td>
        <td key={el.status}>Actions</td>
      </tr>
    )
  );
}

export default Row;
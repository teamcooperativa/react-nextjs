import React, { useState } from 'react';
import Rows from './Rows';
import dataJson from '../../../data.json';

const Table = () => {
  const [data, setData] = useState(dataJson.data);
  return (    
    <table className='container'>
      <thead>
        <tr>
          <th>Lesson Title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Rows data={data}/>
      </tbody>
    </table>
  );
}

export default Table;
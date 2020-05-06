import React, { useState } from 'react';
import Rows from './Rows';
import dataJson from '../../data.json';

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
      <style jsx>{
      `.container {
        border-collapse: collapse;
        font-size: 16px;
        width: 100%;
        font-family: Arial;
        font-weight: bold;
      }

      th {
        text-align: left;
        color: gray;
        font-size: 12px;
        text-align: left;
        border-top: 1px solid #f3f3f3;
        border-bottom: 2px solid #f3f3f3;
        text-indent: 7%;
        height: 20px;
      }

      tr::before {
        content:"";
      }
      `
    }</style>
    </table>
  );
}

export default Table;
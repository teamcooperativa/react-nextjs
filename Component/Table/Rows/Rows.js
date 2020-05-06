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
        <style jsx>{`
          .row {
            border-bottom: 1px solid #f3f3f3;;
            text-align: left;
            text-indent: 7%;
          }

          tr::before {
            content: "";
            display: block;
            position: static;
            width: 5px;
            height: 50px;
            background-color: #a8dbae;
          }

          td {
            height: 50px;
          }
        `}</style>
      </tr>
    )
  );
}

export default Row;
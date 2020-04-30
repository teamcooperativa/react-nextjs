import Row from "./Row/Row"
import {useState} from "react"

const dataArr = [
    {
      id: 1, 
      title: "lesson 1", 
      date: "2020-04-21T15:52:14.565Z",
      status: ""
    },
    {
      id: 2, 
      title: "lesson 2", 
      date: "2020-04-22T15:52:14.565Z",
      status: ""
    },
    {
      id: 3, 
      title: "lesson 3", 
      date: "2020-04-23T15:52:14.565Z",
      status: ""
    }
  ];

const Table = () => {
  const[data, setData] = useState(dataArr)
  return(    
  <table className="container">
      <thead>
        <tr>
          <th>Lesson Title</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Row data={data}/>
      </tbody>
  </table>);
  }

  export default Table
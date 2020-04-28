const arr = [
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
  function Row () {
    const row = arr.map(el => 
    <tr className="tablita" key={el.id}>
      <td key={el.title}>{el.title}</td>
      <td key={el.date}>{new Date(el.date).toDateString()}</td>
      <td key={el.status}>{el.status}</td>
    </tr>)

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
            {row}
        </tbody>
  </table>)
  }

  export default Row
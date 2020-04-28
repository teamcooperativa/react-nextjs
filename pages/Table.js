
var table =[
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
  ] 
    
    const Table = function () { 
            
      function TableLesson() {        
        return table.map(table =>
           <tr className="table" key={table.id}>             
             <td className="item">{table.title}</td>
             <td className="item">{new Date(table.date).toDateString()}</td>
             <td className="item">{table.status}</td>
           </tr>)
       } 
                         
    return (
        <div>
          <table className="container">
            <colgroup span="4" className="column">
            </colgroup>
            <thead>
            <tr>
               <th className="title">Lesson Title</th>        
               <th className="title">Date</th>   
               <th className="title">Status</th>   
               <th className="title">Actions</th>               
            </tr>                     
            </thead>                          
            <tbody> 
            <TableLesson />                                                                                                           
            </tbody>                                         
          </table> 
        </div> 
      
    );
  }

export default Table

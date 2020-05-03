
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
           <tr key={table.id}>             
             <td>{table.title}</td>
             <td>{new Date(table.date).toDateString()}</td>
             <td>{table.status}</td>
             <style jsx>{`              
             tr {
              text-align: center ;
              text-justify: center;
              font-weight: bold;  
              box-shadow: -2px 0px 0px 0px rgb(10, 180, 84); 
            }
             td {
              border-color: gainsboro;
              border-width: 0px 0px 0.1px 0px;
              border-style: solid;  
              font-size: 12px;
            }
            `}
            </style>
           </tr>           
           )          
       } 
                         
    return (
        <div>
          <table>
            <colgroup span="4" className="column">
            </colgroup>
            <thead>
            <tr>
               <th>Lesson Title</th>        
               <th>Date</th>   
               <th>Status</th>   
               <th>Actions</th>               
            </tr>                     
            </thead>                          
            <tbody> 
            <TableLesson />                                                                                                           
            </tbody>                                         
          </table>
          <style jsx>{`                                                                          
            table {              
              justify-items: center;
              justify-self: center;
              align-self: center;
              margin: 5% 0% 0% 25%;
              border: gainsboro;
              border-width: 0.1px 0px 0px 0px; 
              border-style: solid;
              width:500px;  
              border-collapse: collapse;
              font-family: Arial, Helvetica, sans-serif;   
            }                                  
            th {
              color: grey; 
              font-size: 10px;
              border-color: gainsboro;
              border-width: 0px 0px 0.1px 0px;
              border-style: solid;   
          }                                                        
          `}
          </style> 
        </div> 
      );
  }
  
export default Table

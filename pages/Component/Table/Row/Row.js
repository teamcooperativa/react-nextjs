const Row = ({data}) => {
    return( 
      data.map(el => 
        <tr className="row" key={el.id}>
          <td key={el.title}>{el.title}</td>
          <td key={el.date}>{new Date(el.date).toDateString()}</td>
          <td key={el.status}>{el.status}</td>
        </tr>)
    );
  }

export default Row
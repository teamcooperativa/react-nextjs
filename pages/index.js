import Table from './Component/Table';

export default function Home() {
  return (
    <div className='tablecontainer'>
      <h4><br/>All</h4>
      <Table />
      <style jsx>{
        `.tablecontainer {
          background-color: rgb(255, 255, 255);
          margin: 0% 10% 0%;
          border-radius: 10px 10px;
          justify-content: center;
          font-family: Arial;
          text-align: left;
        }
        
        .tablecontainer h4 {
          margin-left: 4%;
        }     
        `
      }
      </style>
    </div>
  );
}
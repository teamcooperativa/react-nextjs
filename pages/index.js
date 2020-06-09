import Table from '../Component/Table';

export default function Home() {
  return (
  <div> 
    <header>
        <div className='title'>
          <h4>GREAT MINDS</h4>
        </div>
    </header>
  <div className='ltitle'>
    <div className='contwo'>
    <div className='containerl'>
      <h1>Lessons</h1>
    </div>
    <div className='containerrl'>
      <p>Recent lessons</p>
    </div>
    </div>
    <div  className='containernewl'>
      <button>
        <p>+ CREATE NEW LESSON</p>
      </button>
    </div>
  </div>
  
  <div>
    <div className='tablecontainer'>
      <h4><br/>All</h4>
      <Table />
    </div>
  </div>
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

        body {
          background: #f3f3f3;
          margin: 0;
        }

        header {
          display: flex;
          background: white;
          height: 50px;
          align-item: center;
          margin: 0;
          top: 0;
        }

        .title{
          width: 120px;
          background: #0F1546;
          text-align: center; 
          height: 30px;
          margin-top: 10px;
          margin-left: 10px;
        }

        .title h4 {
          font-size: 14px;
          color: white;
          padding-top: 6px;
          margin-top: 0;
        }
        `
      }
      </style>
</div> 
  );
}
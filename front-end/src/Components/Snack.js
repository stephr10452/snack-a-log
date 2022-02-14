import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    // <table id="myTable" className=" table order-list" >
    //   <thead>
      <tr>
      <td className="col-sm-4" >{snack.name}</td>
        <td className="col-sm-4" >{snack.fiber}</td>
        <td className="col-sm-4" >{snack.protein}</td>
        <td className="col-sm-4">{snack.added_sugar}</td>
        <td className="col-sm-4">{snack.is_healthy}</td>
        <td className="col-sm-4" >
        <Link to={`/snacks/${snack.id}`}> 
          <img src={ snack.image } />
          </Link>
        </td>
        
      </tr>
    //   </thead>
    //   </table>
  );
}

export default Snack;
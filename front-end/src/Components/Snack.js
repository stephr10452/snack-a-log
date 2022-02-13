import { Link } from "react-router-dom";

function Snack({ snack, id }) {
  return (
    <table id="myTable" class=" table order-list" >
      <thead>
      <tr>
        <td class="col-sm-4" >  {snack.fiber}</td>
        <td class="col-sm-4" >  {snack.name}</td>
        <td class="col-sm-4">{snack.protein}</td>
        <td class="col-sm-4" >
        <Link to={`/snacks/${id}`}> 
          {snack.image}
          </Link>
        </td>
        
      </tr>
      </thead>
      </table>
  );
}

export default Snack;
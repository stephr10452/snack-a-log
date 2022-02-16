import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
      <tr className='snack'>
            <td>
              <Link id='hr'to={`/snacks/${snack.id}`}>{snack.name}</Link>
            </td>
            <td >{snack.fiber}</td>
            <td >{snack.protein}</td>
            <td>{snack.added_sugar}</td>
            <td>{snack.is_healthy}</td>
            <td>
              <Link to={`/snacks/${snack.id}`}> 
                  <img src={ snack.image } />
              </Link>
            </td>
      </tr>
  )
}

export default Snack;
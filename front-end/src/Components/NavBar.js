import {Link} from "react-router-dom"

function NavBar(){
    return(
      <nav>
          <h1>
              <Link to="/snacks">Snack-a-log</Link>
          </h1>
          <button>
              <Link to="/snacks/new">NEW Snack</Link>
          </button>
      </nav>  
    )
}

export default NavBar

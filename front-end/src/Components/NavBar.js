import { Link}  from "react-router-dom";
import HeartH

function NavBar() {
    return(
        <div>
            <nav className='navbar'>
            
                    <Link id='snkApp'to="/snacks">Snack-a-log</Link>
            
                    <Link id='newS' to="/snacks/new"><button>New Snack</button></Link>
            
            </nav>  
        </div>    
    );
}

export default NavBar;

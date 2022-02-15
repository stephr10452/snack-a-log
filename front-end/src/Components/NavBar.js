import { Link}  from "react-router-dom";

function NavBar() {
    return(
        <div>
            <nav className='navbar'>
                <h1>
                    <Link id='snkApp'to="/snacks">Snack-a-log</Link>
            
                    <Link id='newS' to="/snacks/new"><button>New Snack</button></Link>
                </h1>
            </nav>  
        </div>    
    );
}

export default NavBar;

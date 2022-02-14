import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios";


 

function SnackDetails() {
    const [snack, setSnack] = useState([]);
    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/snack/${id}`)
        .then((res)=>{
          setSnack(res.data);
        }).catch(()=>{
          navigate("/not-found")
        })
    }, [id, navigate]);

    const handleDelete = () =>{
     axios.delete(`${process.env.REACT_APP_API_URL}/snacks/${id}`)
     .then((res)=>{
         navigate("/snacks")
     }).catch((err)=>{
         console.log(err)
     })
    }

  
return (
    <div className="one">
     <div className="card tex-center">
      <div className="card-header">
           Snack Details
       </div>
    <p>Snack: {snack.name}</p>
    <p>Snack Fiber: {snack.fiber}</p>
    <p>Snack Protein: {snack.protein}</p>
    <p> {snack.image}</p>
    
    </div>
    <div className="btn-group">
        <div>
          {" "}
          <Link to={`/snacks`}>
            <button type="button" className="btn btn-outline-primary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/snacks/${id}/edit`}>
            <button className="btn btn-outline-success">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button type="button" className="btn btn-outline-danger"  onClick={handleDelete}>Delete</button>
        </div>
        </div>
  </div>
)
}


export default SnackDetails;


import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function SnackDetails() {
    const [snack, setSnack] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
      axios
        .get(`${API_URL}/snacks/${id}`)
        .then((res) => {
          setSnack(res.data.payload);
      }).catch((error) => {
          throw error
        });
    }, [id]);

    function handleDelete() {
     axios 
        .delete(`${API_URL}/snacks/${id}`)
        .then((res) => {
            navigate('/snacks');
      }).catch((error)=>{
         console.log(error);
     });
    };

  
return (
 <div>
    <div className='snackDetail'>    
        <div>Snack: {snack.name}</div>
        <div>Snack Fiber: {snack.fiber}</div>
        <div>Snack Protein: {snack.protein}</div>
        <div>Snack Added Sugar: {snack.added_sugar}</div>
        <div><img src={ snack.image } /></div>
    </div>
        <div className='detailBtns'>
            <Link to={`/snacks`}>
              <button id='dtBn1'>Back</button>
            </Link>
            <Link to={`/snacks/${id}/edit`}>
              <button id='dtBn2'>Edit</button>
            </Link>
              <button id='dtBn3' onClick={handleDelete}>Delete</button>
        </div>  
    </div>
);
}

export default SnackDetails;


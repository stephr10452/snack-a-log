import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function SnackEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

const [snack, setSnack] = useState({
    name: '',
    image: '',
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
});

const handleTextChange = (event) => {
    setSnack({...snack,[event.target.id]: event.target.value });
};

const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
}

useEffect(() => {
    axios
      .get(`${API_URL}/snacks/${id}`)
      .then((res) => {
          setSnack(res.data);
    }).catch((error) => {
          throw error
  })
}, [id]);

const handleEdit = (event) => {
    event.preventDefault()
    axios
      .put(`${API_URL}/snacks/${id}`, snack)
      .then((res) => {
          navigate(`/snacks`)
    }).catch((error) => {
        console.log(error);
    })
};

return (
 <div className='snackEdit'>
   <div>
     <form onSubmit={handleEdit}>
     <br/>
           <label htmlFor="name">Name</label>
           <input 
               id = "name"
               value = {snack.name}
               type = "text"
               onChange = {handleTextChange}
               placeholder = "name"
               required
               />
       <br/>
       <div>
           <label htmlFor='image'>URL</label><br/>
           <input
              id = 'image'
              type = 'text'
              pattern = 'http[s]*://.+'
              required
              value = {snack.image}
              placeholder = 'http://'
              onChange = {handleTextChange}
            />
        </div>
        <br/>
        <div>
             <label htmlFor='fiber'>Fiber</label><br/>
             <input
               id = 'fiber'
               value = {snack.fiber}
               type = 'number'
               onChange = {handleTextChange}
               placeholder = 'fiber'
               required
             />  
        </div>  
        <br/>
        <div>
             <label htmlFor='protein'>Protein</label><br/>
             <input
               id = 'protein'
               value = {snack.protein}
               type = 'number'
               onChange = {handleTextChange}
               placeholder = 'protein'
               required
             />  
        </div> 
        <br/> 
        <div>
             <label htmlFor='added_sugar'>Added Sugar</label><br/>
             <input
               id = 'added_sugar'
               value = {snack.added_sugar}
               type = 'number'
               onChange = {handleTextChange}
               placeholder = 'added_sugar'
               required
             />  
        </div> 
        <br/>
        <div>
             <label htmlFor='is_healthy'>Is Healthy</label><br/>
             <input
               id = 'is_healthy'
               type = 'checkbox'
               onChange = {handleCheckboxChange}
               checked = {snack.is_healthy}
             />       
        </div> 
        <br/>
        <div className='snackEditBtns'>
            <input type = 'submit' /><br/>
            <br/>
            <Link to = {`/snacks/${id}`}>
                <button>Back</button>
            </Link>
        </div>
     </form>
   </div>  
 </div>
 );
}

export default SnackEdit;
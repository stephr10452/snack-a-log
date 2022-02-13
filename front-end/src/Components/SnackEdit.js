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
      .get(`${API_URL}/snack/${id}`)
      .then((res) => {
          setSnack(res.data);
    }).catch((error) => {
          throw error
  })
}, [id]);

const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .put(`${API_URL}/snack/${id}`, snack)
      .then((res) => {
          navigate(`/snack`)
    }).catch((error) => {
        console.log(error);
    })
};

return (
 <div class='snackEdit'>
   <div>
     <form onSubmit={handleSubmit}>
     <br/>
       <div>
           <lable htmlFor='name'>Name</lable><br/>
           <imput
               id = 'name'
               value = {snack.name}
               type= 'text'
               onChange = {handleTextChange}
               placeholder = 'name'
               required
               />
       </div>
       <br/>
       <div>
           <label html='url'>URL</label><br/>
           <input
              id = 'url'
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
             <lable htmlFor='fiber'>Fiber</lable><br/>
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
             <lable htmlFor='protein'>Fiber</lable><br/>
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
             <lable htmlFor='added_sugar'>Fiber</lable><br/>
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
             <lable htmlFor='is_healthy'>Fiber</lable><br/>
             <input
               id = 'is_healthy'
               type = 'checkbox'
               onChange = {handleCheckboxChange}
               checked = {snack.is_healthy}
             />       
        </div> 
        <br/>
        <div class='snackEditBtns'>
            <input type = 'submit' value = 'Submit Item' /><br/>
            <br/>
            <Link to = {`/snacks/${id}`}>
                <button type = ' submit'>Back</button>
            </Link>
        </div>
     </form>
   </div>  
 </div>
 );
}

export default SnackEdit;
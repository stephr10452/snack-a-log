import axios from 'axios';
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function SnackNew() {
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

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
          .post(`${API_URL}/snack`, snack)
          .then((res) => {
              navigate(`/snack`)
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <div>
          <div class='snackNew'>
           <div>
             <h1>Add a New item</h1>    
           </div>   
            <form class='newVals' onSubmit={handleSubmit}>
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
               <div class='snackNewBtns'>
                  <div>
                    <input type = 'submit' value = 'Create new item' />
                  </div> 
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
       
       export default SnackNew;
    

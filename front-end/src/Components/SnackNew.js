import axios from 'axios';
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function SnackNew() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [snack, setSnack] = useState({
        name: '',
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        is_healthy: false,
        image: ''
    });

    const handleTextChange = (event) => {
        setSnack({...snack,[event.target.id]: event.target.value });
    };

    // const handleCheckboxChange = () => {
 
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
          .post(`${API_URL}/snacks`, snack)
          .then((res) => {
              navigate(`/snacks`)
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <div>
          <div className='snackNew'>
             <h1>Add a new snack</h1>    
          </div>  
             <div>
                <form onSubmit={handleSubmit} className='newVals'>
                  <div>
                      <label htmlFor='itemName'>Name</label><br/>
                      <input
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
                        <label htmlFor='added_sugar'>Added sugar</label><br/>
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
                      <label html='url'>URL</label><br/>
                      <input
                        id = 'url'
                        type = 'text'
                        pattern = 'http[s]*://.+'
                        required
                        value = {snack.image}
                        placeholder = 'https://'
                        onChange = {handleTextChange}
                      />
                  </div>
                  <br/>
                  <div className='snackNewBtns'>
                      <div>
                        <input type = 'submit' value = 'Create new snack' />
                      </div> 
                      <br/>
                      <Link to = {`/snacks/${id}`}>
                          <button type = 'submit'>Back</button>
                      </Link>
                  </div>
                </form>
              </div>    
        </div>
        );
       }
       
       export default SnackNew;
    

import axios from 'axios';
import { useState, useEffect} from 'react';
import Snack from './Snack';

const API_URL = process.env.REACT_APP_API_URL;

function Snacks() {
    const [snacks, setSnacks] = useState ([]);

    useEffect(() => {
        axios
          .get(`${API_URL}/snacks`)
          .then((res) => {
              setSnacks(res.data.payload);
        }).catch((error) => {
              throw error
      })
    }, [API_URL]);

    return (
        <div>
            <div>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Fiber</th>
                                <th>Protein</th>
                                <th>Added Sugar</th>
                                <th>Is Healthy</th> 
                                <th>Image</th>
                            </tr>
                        </thead>
                         <tbody>
                             {snacks.map((snack, id) => {
                                 return ( <Snack key={id} snack={snack} id={id}/> );
                             })}
                         </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}

export default Snacks;
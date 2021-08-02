import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
const token = localStorage.getItem('user');

function Test() {

    useEffect(() => {

        axios.get('/test',{
            headers: {
              'Test-Header': 'test-value'
            }
          })
          .then(res=>{
            console.log("hola api");
              // console.log(res.headers);
            //   console.log(token);
              // console.log(res.data.headers['Test-Header']);
          })

    })

    return (  
        <div>
            <span>Test JS</span>
        </div>

    );
}

export default Test;
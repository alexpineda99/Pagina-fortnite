import React from 'react';
import {
  Link
} from "react-router-dom";

function Advice() {


    return (  
        <div className="Challenge-advice">
          <center>
            <p>You must <Link to="/signin"> sign in </Link> to see this section.</p>
            <p>¿Don´t you have an account? <Link to="/signup"> sign up here! </Link> </p>
          </center>
        </div>

    );
}

export default Advice;
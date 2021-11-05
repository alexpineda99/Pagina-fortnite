import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import 'reactjs-popup/dist/index.css';


function PopupRegistration(props) {

  let [open, setOpen] = useState(props.pop);
  // let closeModal = () => setOpen(false);
  let closeModal = () => window.location = "/signin";
  let check = <FontAwesomeIcon icon={faCheck}/>
  console.log(props.pop);

  useEffect(() =>{
    // setOpen(props.state);
    
  }, []);

  return (
    <Popup open={open} onClose={() => window.location = "/signin"}>
    <div className="modal">
        {/* &times; */}
       
     <p> Succesfully Registered an email has been sent to your email. Please check your inbox {check} </p>

     
    </div>
    <div className="popup-button">
    <button onClick={closeModal}> Ok </button>
    </div>
  </Popup>
  );
}

export default PopupRegistration;
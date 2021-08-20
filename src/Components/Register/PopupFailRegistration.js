import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import 'reactjs-popup/dist/index.css';


function PopupFailRegistration(props) {

  let [open, setOpen] = useState(props.pop);
  // let closeModal = () => setOpen(false);
  let closeModal = () => window.location = "/signin";
  let ExclamationCircle = <FontAwesomeIcon icon={faExclamationCircle}/>
  console.log(props.pop);

  useEffect(() =>{
    // setOpen(props.state);
    
  }, []);

  return (
    <Popup open={open} onClose={() => window.location = "/signin"}>
    <div className="modal">
        {/* &times; */}
       
     <p className="fail-popup"> Error in register. Please, try again. {ExclamationCircle} </p>

     
    </div>
    <div className="popup-button">
    <button onClick={closeModal}> Ok </button>
    </div>
  </Popup>
  );
}

export default PopupFailRegistration;
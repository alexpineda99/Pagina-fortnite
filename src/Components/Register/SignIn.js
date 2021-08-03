import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import { useState } from 'react';
import { FormField } from 'react-form-input-fields';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State/index';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function SignIn() {

  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  const user = useSelector((state)=> state.User);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = <FontAwesomeIcon icon={faEye} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {logInUser, logOutUser} = bindActionCreators(actionCreators, dispatch);
  
  const logUser = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: pass
    }

    axios.post("http://localhost:3001/login", data)

    .then(res => {
      if (res.data.success === false) {

       console.log("Usuario invalido");
        
      } else {

        // console.log("User logged");
        // console.log(res.data.token);
        console.log(res.headers);
        logInUser(res.data.token);
        // logOutUser();
        localStorage.setItem('user', res.data.token);
        
      }
    })

  }



  return (
    <div className="main">
        <Navbar/>
        <div className="signin-div">

        <h2>Sign in</h2>
        <p>{user}</p>
        <form onSubmit={(e)=> logUser(e)}>
        <FormField
        type="email"
        standard="labeleffect"
        value={email}
        keys={'email'}
        effect={'effect_3'}
        handleOnChange={value => setEmail(value)}
        placeholder={'Enter email'} 
        />
        <div className="input-password">
        <div className="icon-eye">
          <i onClick={togglePasswordVisiblity} className="icon"> {passwordShown ? eye : eyeSlash} </i>
        </div>
        <FormField
        type={passwordShown ? "text" : "password"}
        standard="labeleffect"
        value={pass}
        keys={'pass'}
        effect={'effect_3'}
        handleOnChange={value => setPass(value)}
        placeholder={'Enter pass'} />
        </div>

        <button class="btn-login" type="submit">Log in</button>  
        </form>
        <span>¿Don´t you have an account? <a href="/signup" className="link-signup"> Sign up </a> </span>
       
        </div>
      
    </div>
  );
}

export default SignIn;

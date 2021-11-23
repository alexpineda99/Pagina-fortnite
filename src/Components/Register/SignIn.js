import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import { useState } from 'react';
import { FormField } from 'react-form-input-fields';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../State/index';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';
import axios from 'axios';

function SignIn() {

  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [msg, setmsg] = useState("");
  let [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const user = useSelector((state)=> state.User);
  const dispatch = useDispatch();
  const eye = <FontAwesomeIcon icon={faEye} />
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {logInUser} = bindActionCreators(actionCreators, dispatch);
  
  const logUser = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email: email,
      password: pass
    }

    axios.post("https://serverfortnite.cleverapps.io/login", data)

    .then(res => {
      if (res.data.success === false) {

       console.log(res.data.msg);
       setLoading(false);
       setmsg(res.data.msg)
        
      } else if (res.data.success === true) {

        console.log(res.headers);
        setmsg("")
        logInUser(res.data.token);
        localStorage.setItem('user', res.data.token);
        setLoading(false);
        window.location.href="/";
        
      } 
      // console.log(res.data);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    })

  }



  return (
    <div className="main">
        <Navbar/>
        {loading  ? 
     <div className="shader"> 
        <div class="loadingContainer"> 
         <Loader 
            type="Rings" 
            color="#109DFA" 
            height={80} 
            width={80} 
          /> 
        </div>
      </div> 
    : 
    null}
        <div className="signin-div">

        <h2>Sign in</h2>
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
        <span className="msg-error"> {msg} </span>
        <button className="btn-login" type="submit">Log in</button>  
        </form>
        <span>¿Don´t you have an account? <a href="/signup" className="link-signup"> Sign up </a> </span>
       
        </div>
    </div>
  );
}

export default SignIn;

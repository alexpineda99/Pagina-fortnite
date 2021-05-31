import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import { useState, useEffect } from 'react';
import { FormField } from 'react-form-input-fields';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import 'react-form-input-fields/dist/index.css'

function SignIn() {

  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [showp, setShowp] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() =>{
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
        
  }, []);



  return (
    <div className="main">
        <Navbar/>
        <div className="signin-div">

        <h2>Sign in</h2>

        <div className="">
        <FormField
        type="email"
        standard="labeleffect"
        value={email}
        keys={'email'}
        effect={'effect_3'}
        handleOnChange={value => setEmail(value)}
        placeholder={'Enter email'} 
        />
        </div>

        <FormField
        type={showp ? "text" : "password"}
        standard="labeleffect"
        value={pass}
        keys={'pass'}
        effect={'effect_3'}
        handleOnChange={value => setPass(value)}
        placeholder={'Enter pass'} />

        <button class="btn-login" onClick={() => alert("hola")}>Log in</button>  
        
        <span>¿Don´t you have an account? <a href="/signup" className="link-signup"> Sign up </a> </span>
        resultado aqui {data}
        </div>
      
    </div>
  );
}

export default SignIn;

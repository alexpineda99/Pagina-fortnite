import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import { useState, useEffect } from 'react';
import { FormField } from 'react-form-input-fields';
import axios from 'axios';

function SignIn() {

  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [showp, setShowp] = useState(true);
  const [data, setData] = useState(null);

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

        console.log("User logged");
        
      }
    })

  }

  useEffect(() =>{
    // fetch("/api")
    //   .then((res) => res.json())
    //   .then((data) => setData(data.message));
        
  }, []);



  return (
    <div className="main">
        <Navbar/>
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

        <FormField
        type={showp ? "text" : "password"}
        standard="labeleffect"
        value={pass}
        keys={'pass'}
        effect={'effect_3'}
        handleOnChange={value => setPass(value)}
        placeholder={'Enter pass'} />

        <button class="btn-login" type="submit">Log in</button>  
        </form>
        <span>¿Don´t you have an account? <a href="/signup" className="link-signup"> Sign up </a> </span>
        resultado aqui {data}
       
        </div>
      
    </div>
  );
}

export default SignIn;

import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import PopupRegistration from './PopupRegistration';
import React, { useState, useEffect } from 'react';
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'
import { FormField } from 'react-form-input-fields';
import PasswordChecklist from "react-password-checklist"
import { CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import 'react-form-input-fields/dist/index.css'
import 'react-phone-number-input/style.css'
import 'reactjs-popup/dist/index.css';
import axios from 'axios';

function SignUp() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [country, setCountry] = useState("");
    let [region, setRegion] = useState("");
    let [pass, setPass] = useState("");
    let [passAgain, setPassAgain] = useState("");
    let [phone, setPhone] = useState("");
    let [msg, setmsg] = useState("");
    let [open, setOpen] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordconfirmShown, setPasswordConfirmShown] = useState(false);
    const eye = <FontAwesomeIcon icon={faEye} />
    const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const togglePasswordConfirmVisiblity = () => {
      setPasswordConfirmShown(passwordconfirmShown ? false : true);
    };

    const registeruser = (e) => {
      e.preventDefault();
      const data = {
      name: name,
      country: country,
      region: region,
      phone: phone,
      email: email,
      password: pass
      }

      axios.post("http://localhost:3001/register", data)
      .then(res => {
        console.log(res.data);

        if (res.data.success === false) {

          // setOpen(o => !o);
          setmsg(res.data.msg);
          // window.location = "/signin";
          
        } else {

          setOpen(o=> !o);
          
        }
      })
      .catch(error => {
        alert(error);
      })
    }

    useEffect(() =>{

    }, []);

  return (
    <div className="main">
        <Navbar/>

     { open ? <PopupRegistration pop={open}/> : "" }
        
        <div className="signup-div">
        <h2>Sign up</h2>
        <form onSubmit={(e) => registeruser(e)}>
        <FormField
        type={"text"}
        standard="labeleffect"
        value={name}
        keys={'name'}
        effect={'effect_3'}
        handleOnChange={value => setName(value)}
        placeholder={'Enter name'} />

        <FormField
        type={"email"}
        standard="labeleffect"
        value={email}
        keys={'email'}
        effect={'effect_3'}
        handleOnChange={value => setEmail(value)}
        placeholder={'Enter Email'} />
        <div className="country-region-div">
        <CountryDropdown
        value={country}
        onChange={value => setCountry(value)} 
        style={{
          backgroundColor: 'transparent',
          color: 'black',
          border: "1px #cccccc solid",
          outline: 0,
          margin: "3% 0% 2% 0%"
        }}
        />
        <RegionDropdown
        disableWhenEmpty={true}
        country={country}
        value={region}
        onChange={value => setRegion(value)}
        className="_2f4YC"
        style={{
          backgroundColor: 'transparent',
          color: 'black',
          border: "1px #cccccc solid",
          outline: 0,
          margin: "3% 0% 2% 0%",
        }}
        />
        </div>
        <PhoneInput
        initialValueFormat="national"
        className="_7avJu undefined"
        value={phone}
        placeholder="Phone Number"
        onChange={phone => setPhone(phone)}
        error={phone ? (isPossiblePhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
        />
        {/* <span> aqui mira {phone} </span>
        Is possible: {phone && isPossiblePhoneNumber(phone) ? 'true' : 'false'} */}

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

        <div className="input-password">
        <div className="icon-eye">
         <i onClick={togglePasswordConfirmVisiblity} className="icon"> {passwordconfirmShown ? eye : eyeSlash} </i>
        </div>
        <FormField
        type={passwordconfirmShown ? "text" : "password"}
        standard="labeleffect"
        value={passAgain}
        keys={'passAgain'}
        effect={'effect_3'}
        handleOnChange={value => setPassAgain(value)}
        placeholder={'Confirm pass'} />
        </div>

        <PasswordChecklist
          rules={["length","specialChar","number","capital","match"]}
          minLength={5}
          value={pass}
          valueAgain={passAgain}
          onChange={(isValid) => {}}
        />
        <span className="msg-error"> {msg} </span>
        <div className="button-signup">
        <button class="btn-login" type="submit">Sign up</button>  
        </div>
        </form>
        </div>
    </div>
  );
}

export default SignUp;

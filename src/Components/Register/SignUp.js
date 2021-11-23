import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import PopupRegistration from '../Popups/PopupRegistration';
import PopupFailRegistration from '../Popups/PopupFailRegistration';
import React, { useState, useEffect } from 'react';
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'
import { FormField } from 'react-form-input-fields';
import PasswordChecklist from "react-password-checklist";
import Loader from 'react-loader-spinner';
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
    let [loading, setLoading] = useState(false);
    let [open, setOpen] = useState(false);
    let [fail, setFail] = useState(false);
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
      setLoading(true);
      let regLetter = /^[a-zA-ZñÑáÁéÉíÍóÓúÚ]*$/i; // regular expression only letters
      let regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/; // regular expression password
      let regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/; // regular expression email

      const data = {
      name: name,
      country: country,
      region: region,
      phone: phone,
      email: email,
      password: pass
      }

      //Name validation
      if (name.length === 0) {
        setmsg("Name field required");
        setLoading(false);
      }
      else if (!regLetter.test(name)) {
        setmsg("Name field requires only letters");
        setLoading(false);
      }
      else if (name.length <= 3) {
        setmsg("Your name must be at least 3 characters");
        setLoading(false);
      }
      //Email validation
      else if (email.length === 0) {
        setmsg("Email field required");
        setLoading(false);
      }
      else if (!regEmail.test(email)) {
        setmsg("Please enter a valid email address");
        setLoading(false);
      }
      //Region validation
      else if (region.length === 0) {
        setmsg("Region field required");
        setLoading(false);
      }
      //Phone validation
      else if (phone.length === 0) {
        setmsg("Phone field required");
        setLoading(false);
      }
      else if (!isPossiblePhoneNumber) {
        setmsg("Phone field required");
        setLoading(false);
      }

      //Pass validation
      else if (pass.length === 0) {
        setmsg("Password field required");
        setLoading(false);
      }
      else if (pass.length < 8 && pass.length > 16) {
        setmsg("Your name must be between 8 and 16 characters");
        setLoading(false);
      }
      else if (!regPass.test(pass)) {
        setLoading(false);
      }
      else if (pass !== passAgain) {
        setmsg("Password and password confirmation don´t match");
        setLoading(false);
      }

      
      else {
      axios.post("https://serverfortnite.cleverapps.io/register", data)
        .then(res => {
          console.log(res.data);

          if (res.data.success === true) {

            setOpen(o=> !o);
            setLoading(false);
          
          } else {

            console.log(res.data);
            setmsg(res.data.msg);
            setLoading(false);
          }
        })
        .catch(error => {
          console.log(error);
          setLoading(false);
          
        })
      }
    } //end register function

    useEffect(() =>{

    }, []);

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
     { open ? <PopupRegistration pop={open}/> : fail ? <PopupFailRegistration pop={fail} /> : null }
        <div className="signup-div">
        <h2>Sign up</h2>
        <form className="form-div" onSubmit={(e) => registeruser(e)}>
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

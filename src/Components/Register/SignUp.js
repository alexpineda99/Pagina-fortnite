import '../../Assets/Css/Main.css';
import Navbar from "../Navbar";
import { useState } from 'react';
import PhoneInput, {isPossiblePhoneNumber} from 'react-phone-number-input'
import { FormField } from 'react-form-input-fields';
import PasswordChecklist from "react-password-checklist"
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import 'react-form-input-fields/dist/index.css'
import 'react-phone-number-input/style.css'

function SignUp() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [country, setCountry] = useState("");
    let [region, setRegion] = useState("");
    let [pass, setPass] = useState("");
    let [passAgain, setPassAgain] = useState("");
    let [phone, setPhone] = useState("");
    let [n, setn] = useState(2);
    let [showp, setShowp] = useState(true);

    function register () {

    }

  return (
    <div className="main">
        <Navbar/>
        <div className="signup-div">
        <h2>Sign up</h2>
        <form onSubmit={() => alert("register succesful")}>
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

        <FormField
        type={showp ? "text" : "password"}
        standard="labeleffect"
        value={pass}
        keys={'pass'}
        effect={'effect_3'}
        handleOnChange={value => setPass(value)}
        placeholder={'Enter pass'} />

        {/* <FormField
        type="switch"
        value={showp}
        keys={'showp'}
        handleOnChange={value => setShowp(value)}
        label={'Show password'} /> */}

        {/* <span> Estado: {showp  ? 'true' : 'false'} </span> */}

        <FormField
        type={"password"}
        standard="labeleffect"
        value={passAgain}
        keys={'passAgain'}
        effect={'effect_3'}
        handleOnChange={value => setPassAgain(value)}
        placeholder={'Confirm pass'} />

        <PasswordChecklist
          rules={["length","specialChar","number","capital","match"]}
          minLength={5}
          value={pass}
          valueAgain={passAgain}
          onChange={(isValid) => {}}
          />

        <button class="btn-login" onClick={() => alert("hola")}>Sign up</button>  

        </form>
        </div>
    </div>
  );
}

export default SignUp;

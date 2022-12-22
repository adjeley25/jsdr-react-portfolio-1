import {useState}from "react";
import AnimatedLetters from '../AnimatedLetters';
import { registerNewUser,signInWithEmail} from "../../firebase";


const Login=() => {

    let [email, setEmail]=useState('');
    let [password, setPassword]=useState('');

function updateEmail( event) {
    setEmail(event.target.value);
    console.log (email);

}

function updatePassword( event) {
    setPassword(event.target.value);
    console.log (password);

}

//function registerUser(event){
 //   event.preventDefault();

 //   console.log(email, password);

  //  registerNewUser(email, password);
//}


function logUserIn(event){
    event.preventDefault();

    console.log(email, password);

    signInWithEmail(email, password);
    
}


    return( 
    
    <>
    
    <div className='login-page'>
    
    <h2><AnimatedLetters strArray={"LOGIN PAGE".split('')} starIdx={1}/></h2>
    
     
        <form>
        <div className ="login-form">
<input type="text" placeholder="Email" onChange={updateEmail}/>
<br/>
<input type="password" placeholder="Password" onChange={updatePassword}/>
<br/>
<input type="submit" value="Submit" onClick={logUserIn}/>
        </div>
        </form>
    </div>
    
    
    
    

  {  /*<div className ="register-form">
     <h2> Register</h2>
        <form>
<input type="text" placeholder="Email" onChange={updateEmail}/>
<br/>
<input type="password" placeholder="Password" onChange={updatePassword}/>
<br/>
<input type="submit" value="Submit" onClick={registerUser}/>
        </form>
    </div>*/}
    </>

    );

}

export default Login;
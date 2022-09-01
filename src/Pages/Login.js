import { useRef, useState } from 'react';
import { isLogin, userExists } from '../API/authAPI.mjs';
import './Login.css';

export default function Login() {

    const [passdis, setpassdis] = useState(true);
    const [emaildis, setemaildis] = useState(false);
    const [Ebtndis, setEbtndis] = useState(false);
    const [Pbtndis, setPbtndis] = useState(true);

    const email = useRef('');
    const pass = useRef('');

    async function checkEmail() {
        const mail = email.current.value + "";

        if(mail.length === 0 || !mail.includes("@")) {
            alert('Incorrect Email');    
        } else {
            await userExists(mail).then(res => {
                // User exists
                if(res.status !== 404) {
                    setpassdis(false);
                    setemaildis(true);
            
                    setEbtndis(true);
                    setPbtndis(false);
                } else {
                    // User doesn't Exists
                    alert(res.msg);
                    // Redirect to Register
                }
            });
        }
    }

    async function loginPass() {
        const password = pass.current.value;

        await isLogin(email.current.value, password).then(res => {
            // Logged in successfully
            alert(res.msg);
            if(res.status === 200) {
                // Redirect to Home Page
            }
        });
    }
    return (
        <>
        <div id='loginform' className='container-fluid'>
        <h2 id='logintxt'>Login</h2>
        <form>
            <div class="mb-3" hidden={emaildis}>
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" ref={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3" hidden={passdis}>
                <label for="exampleInputPassword1" class="form-label">Enter Password for {email.current.value}</label>
                <input type="password" class="form-control" ref={pass} id="exampleInputPassword1" />
            </div>
        </form>
        <button id="loginbtn" type="submit" hidden={Ebtndis} onClick={checkEmail} class="btn btn-primary">Continue</button>
        <button id="loginpassbtn" type="submit" hidden={Pbtndis} onClick={loginPass} class="btn btn-success">Confirm</button>
        </div>
        </>
    );
}
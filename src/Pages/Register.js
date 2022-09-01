import './Register.css';
import { useRef, useState } from "react";
import { saveUserCreds, sendMail, userExists } from '../API/authAPI.mjs';
export default function Register() {
    const [passdis, setPassdis] = useState(true);
    const [emaildis, setEmaildis] = useState(false);
    const [otpdis, setotpdis] = useState(true);
    const [changeEdis, setchangeEdis] = useState(true);
    const [Remailbtn, setRemailbtn] = useState(false);
    const [Rpassbtn, setRpasslbtn] = useState(true);
    const [Rotpbtn, setRotpbtn] = useState(true);

    let emailtxt = useRef('');
    let otptxt = useRef(0);
    let pass = useRef('');
    let cpass = useRef('');

    const [otp, setotp] = useState(0);


    async function onRegister() {
        const email = emailtxt.current.value+"";
        console.log(email);
        if(email.length <= 1 || !email.includes("@")) {
            alert('Incorrect Email');
        } else {
            await userExists(email).then(async r => {
                // User doesn't exists Register....
                if(r.status === 404) {
                    await sendMail(email).then(res => {
                        if(res.status === 200) {
                            setotp(res.otp);

                            alert(res.msg);
                            setotpdis(false);
                            // setPassdis(false);
                            setEmaildis(true);
                            setchangeEdis(false);
                            setRotpbtn(false);
                            setRemailbtn(true);
                            // setRemailbtn(true);
                            // setRpasslbtn(false);
        
                            emailtxt.current.value = email;
                        } else {
                            alert("Error Occured");
                        }
                    });
                } else {
                    alert("User with this Email Already Exists");
                }
                // User already exists with this email Login.... 
            });
        }

    }

    async function onRegisterPass() {
        const password = pass.current.value+"";
        const cpassword = cpass.current.value+"";

        if(password.length < 5) {
            alert('Password must be atleast of 5 characters');
        } else if(cpassword.length === 0) {
            alert('Please confirm the entered password');
        } else if(password !== cpassword) {
            alert('The password entered and confirmed should be same');
        } else {
            console.log(emailtxt.current.value);
            await saveUserCreds(emailtxt.current.value, password).then(res => {
                alert(res.msg);
            });
        }

    }

    async function onRegisterOTPPass() {
        const otpno = otptxt.current.value+"";

        // Correct OTP
        if(String(otpno) === String(otp)) {
            setPassdis(false);
            setRemailbtn(true);
            setRpasslbtn(false);

            setotpdis(true);
            setEmaildis(true);
            setRotpbtn(true);
        } else {
            alert('Incorrect OTP');
        }

    }

    function changeEmail() {
        setPassdis(true);
        setEmaildis(false);
        setRotpbtn(true);
        setchangeEdis(true);
        setRpasslbtn(true);
        setRemailbtn(false);
        setotpdis(true);
    }

    return (
        <>
        <div id='registerform' className='container-fluid'>
        <h2 id='registertxt'>Register</h2>
        <form>
            <div class="mb-3" hidden={emaildis}>
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" ref={emailtxt} aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3" hidden={otpdis}>
                <label for="exampleInputEmail1" class="form-label">Enter the OTP {emailtxt.current.value}</label>
                <input type="number" class="form-control" id="exampleInputEmail1" ref={otptxt} aria-describedby="emailHelp" />
            </div>
            <div class="mb-3" hidden={passdis}>
                <label for="exampleInputPassword1" class="form-label">Enter Password for {emailtxt.current.value}</label>
                <input type="password" class="form-control" ref={pass} id="exampleInputPassword1" />
            </div>
            <div class="mb-3" hidden={passdis}>
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" ref={cpass} id="exampleInputPassword1" />
            </div>
            <div class="mb-3 form-check" hidden={passdis}>
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
            </div>
        </form>
        <button id="changeEmailbtn" hidden={changeEdis} onClick={changeEmail} type="submit" class="btn btn-primary">Change Email</button>
        <button id="registeremailbtn" hidden={Remailbtn} onClick={onRegister} type="submit" class="btn btn-primary">Continue</button>
        <button id="registerpassbtn" hidden={Rpassbtn} onClick={onRegisterPass} type="submit" class="btn btn-primary">Confirm Password</button>
        <button id="registerotpbtn" hidden={Rotpbtn} onClick={onRegisterOTPPass} type="submit" class="btn btn-success">Confirm OTP</button>
        </div>
        </>
    );
}